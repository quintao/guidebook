import Ayerne from "./ayerne"
import Barme from "./barme"

// Top and Left values below are dependent on the map being used in the main screen.
const Sectors = {
  "ayerne": {...Ayerne,top: 200, left: 100, color: "green" },
  "barme": {...Barme, top: 360, left: 50, color: "magenta" },
  "blocVDI": {top: 30, left: 330, color: "orange"},
  "dryTooling": {top: 140, left: 280, color: "red"},
  "portesDuSoleil": {top: 140, left: 30, color: "blue" },
  "defago": {top: 220, left: 240, color: "grey"},
  "champDeBarme": {top: 300, left: 150, color: "brown"},
}

export default Sectors