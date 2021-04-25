export const bezelActions = {
  scale: "scale",
  scroll: "scroll",
  changePage: "changePage"
}

export const defaultConfigValues = {
  files: "[]",
  lastFile: "",
  txtAction: bezelActions.scroll,
  txtFontSize: "16",
  txtTheme: "white",
  pdfAction: bezelActions.scale
}

export const pages = {
  filesList: 1,
  pdfPreview: 2,
  pdfView: 3,
  mainScreen: 4,
  help: 5,
  settings: 6,
  message: 8,
  fileReceive: 9,
  txtView: 12
}

export const saMessages = {
  already_exist: "The remote Accessory Peer Agent already exists.",
  network_error: "The connection failed due to a network error.",
  device_unreachable: "The remote Accessory Peer Agent is unreachable or no longer available, perhaps it has been powered off or the connectivity has been turned off.",
  invalid_peeragent: "The SAPeerAgent object is invalid.",
  peeragent_no_response: "The remote Accessory Peer Agent timedout.",
  peeragent_rejected: "Accessory Peer Agent rejected the request.",
  error_reflection_exception: "The framework failed to construct an SASocket object.",
  file_io: "The file write request failed.",
  peer_channel_io: "The remote peer is not reachable.",
  peer_conn_lost: "The connection to the remote peer is lost during the file transfer.",
  peer_no_response: "The remote peer did not respond.",
  peer_rejected: "The remote peer rejected/cancelled the file request.",
  space_not_available: "The receiver device does not have enough free space available.",
  unknown_error: "Unknown error occurred.",
  onconnect: "File transfer connection established.",
  oncomplete: "File transfer ended successful."
}

export const defaultPage = {
  pageId: pages.mainScreen,
  options: {}
}

export const theme = {
  black: {
    background: "#000000",
    text: "#FFFFFF"
  },
  white: {
    background: "#FFFFFF",
    text: "#000000"
  }
}

export const bezelActionsButtons = {
  scale: {
    id: bezelActions.scale,
    label: "Scale",
    image: "/icons/scale.svg"
  },
  scroll: {
    id: bezelActions.scroll,
    label: "Scroll",
    image: "/icons/scroll.svg"
  },
  changePage: {
    id: bezelActions.changePage,
    label: "Page",
    image: "/icons/change-page.svg"
  }
}

export const isDev = is_dev

export const supportBezel = isDev || tizen.systeminfo.getCapability("http://tizen.org/feature/input.rotating_bezel")
