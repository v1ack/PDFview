import {terser} from "rollup-plugin-terser"
import livereload from "rollup-plugin-livereload"
import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import sveltePreprocess from "svelte-preprocess"
import css from "rollup-plugin-css-only"
import fs from "fs"
import {copySync} from "fs-extra"
import path from "path"
import babel from "@rollup/plugin-babel"

const pdfJsWorker = path.resolve(__dirname, "node_modules/pdfjs-dist/es5/build/pdf.worker.min.js")
const pdfJs = path.resolve(__dirname, "node_modules/pdfjs-dist/es5/build/pdf.min.js")
// const pdfJsWorker = path.resolve(__dirname, "node_modules/pdfjs-dist/build/pdf.worker.min.js")
// const pdfJs = path.resolve(__dirname, "node_modules/pdfjs-dist/build/pdf.min.js")


let production = !process.env.ROLLUP_WATCH
let app_type = process.env.APP_TYPE || "pro"
let app_version = process.env.npm_package_version

let constants = {
  demo: {
    app_id: "pdfviewdem",
    app_name: "Docs View demo",
    icon: "pdfviewdemo.png"
  },
  pro: {
    app_id: "docviewpro",
    app_name: "Docs View",
    icon: "pdfviewpro.png"
  },
  demo_old: {
    app_id: "pdfviewdem"
  },
  pro_old: {
    app_id: "pdfviewpro"
  }
}

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        }
      )

      process.on("SIGTERM", toExit)
      process.on("exit", toExit)
    }
  }
}

function replaceInFiles(filename) {
  fs.readFile("src/files/" + filename, "utf8", function(err, data) {
    if (err) {
      return console.log(err)
    }
    let result = data.replace(/{{app_id}}/g, constants[app_type].app_id)
    result = result.replace(/{{app_name}}/g, constants[app_type].app_name)
    result = result.replace(/{{app_version}}/g, app_version)

    fs.writeFile("build/" + filename, result, "utf8", function(err) {
      if (err) return console.log(err)
    })
  })
}

const copyToDist = () => ({
  generateBundle() {
    copySync("assets/", "build/")
    copySync(pdfJsWorker, "build/pdf_worker.js")
    replaceInFiles("accessoryservices.xml")
    replaceInFiles("config.xml")
    copySync("src/files/" + constants[app_type].icon, "build/icon.png")
  }
})

export default {
  external: ["tizen", pdfJs, pdfJsWorker, "webapis"],
  input: "src/index.js",
  output: {
    file: "build/bundle.js",
    format: "iife",
    name: "app",
    globals: {
      [pdfJsWorker]: "PdfjsWorker",
      [pdfJs]: "Pdfjs",
      "tizen": "tizen",
      "webapis": "webapis"
    }
  },
  plugins: [
    {
      // provide node environment on the client
      transform: (code) => ({
        code: code.replace("is_dev", `${!production}`).replace("app_type", `"${app_type}"`),
        map: {mappings: ""}
      })
    },
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production
      }
    }),
    css({output: "bundle.css"}),
    resolve({
      browser: true,
      dedupe: ["svelte"]
    }),
    commonjs(),
    copyToDist(),
    babel({
      extensions: [".js", ".mjs", ".html", ".svelte"],
      babelHelpers: "runtime",
      exclude: ["node_modules/@babel/**", "node_modules/core-js/**"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "> 0.25%, not dead",
            useBuiltIns: "usage",
            corejs: 3
          }
        ]
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: false
          }
        ]
      ]
    }),
    !production && serve(),
    !production && livereload("build"),
    production && terser()
  ]
}
