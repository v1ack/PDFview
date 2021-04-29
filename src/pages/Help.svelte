<script>
  /* global tizen */
  import Button from "../components/Button.svelte"
  import {historyStore} from "../store"

  function openBrowserOnPhone(url) {
    try {
      tizen.application.launchAppControl(
        new tizen.ApplicationControl(
          "http://tizen.org/appcontrol/operation/default",
          null,
          null,
          null,
          [
            new tizen.ApplicationControlData("msgId", [
              "mgr_install_host_app_req",
            ]),
            new tizen.ApplicationControlData("type", ["phone"]),
            new tizen.ApplicationControlData("deeplink", [url]),
          ]
        ),
        "com.samsung.w-manager-service",
        null,
        null,
        null
      )
      alert("Check on phone")
    } catch (err) {
      // launcher error
    }
  }
</script>

<div class="container">
  <div class="text">
    This app can open PDFs<br /> You can manually put PDF to 'Documents' folder,
    or send by special app
  </div>
  <Button
    on:click={() => openBrowserOnPhone("https://v1ack.github.io/pdfview")}
  >
    Download app
  </Button>
  <Button on:click={historyStore.goBack}>Ok</Button>
</div>

<style>
  .container {
    text-align: center;
    padding: 70px 2.0625rem;
    box-sizing: border-box;
    font-size: 1.6em;
    height: 360px;
    width: 360px;
  }
</style>
