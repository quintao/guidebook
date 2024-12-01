import Ayerne from "./ayerne"
import Barme from "./barme"
import Defago from "./defago"
import DryTooling from "./drytooling"
import PortesDuSoleil from "./portesdusoleil"
import ValDilliez from "./valdilliez"
import ChampDeBarme from "./champdebarme"

// Top and Left values below are dependent on the map being used in the main screen.
const Sectors = {
  "blocVDI": ValDilliez,
  "dryTooling": DryTooling,
  "portesDuSoleil": PortesDuSoleil,
  "ayerne": Ayerne,
  "defago": Defago,
  "champDeBarme": ChampDeBarme,
  "barme": Barme,
}

export default Sectors