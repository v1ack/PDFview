import {pages} from "./constants"
import FilesList from "./pages/FilesList.svelte"
import PdfView from "./pages/PdfView.svelte"
import PdfPreview from "./pages/PdfPreview.svelte"
import Help from "./pages/Help.svelte"
import MainScreen from "./pages/MainScreen.svelte"
import Message from "./pages/Message.svelte"
import FileReceive from "./pages/FileReceive.svelte"
import TxtView from "./pages/TxtView.svelte"


export const routes = {
  [pages.filesList]: FilesList,
  [pages.pdfView]: PdfView,
  [pages.pdfPreview]: PdfPreview,
  [pages.help]: Help,
  [pages.mainScreen]: MainScreen,
  [pages.message]: Message,
  [pages.fileReceive]: FileReceive,
  [pages.txtView]: TxtView
}
