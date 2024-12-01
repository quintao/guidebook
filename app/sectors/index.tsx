import Ayerne from "./ayerne"
import Barme from "./barme"
import Defago from "./defago"
import DryTooling from "./drytooling"
import PortesDuSoleil from "./portesdusoleil"
import ValDilliez from "./valdilliez"
import ChampDeBarme from "./champdebarme"

// Top and Left values below are dependent on the map being used in the main screen.
const Sectors = {
  "blocVDI": {...ValDilliez, top: "22%", left: "80%", color: "orange"},
  "dryTooling": {...DryTooling, top: "35%", left: "78%", color: "red"},
  "portesDuSoleil": {...PortesDuSoleil, top: "28%", left: "15%", color: "blue" },
  "ayerne": {...Ayerne,top: "42%", left: "21%", color: "green" },
  "defago": {...Defago, top: "55%", left: "58%", color: "grey"},
  "champDeBarme": {...ChampDeBarme, top: "70%", left: "55%", color: "brown"},
  "barme": {...Barme, top: "88%", left: "15%", color: "magenta" },
}

export default Sectors