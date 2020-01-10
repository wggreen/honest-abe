import { usePoliticians } from "./PoliticianProvider.js"
import Politician from "./Politician.js"

const contentTarget = document.querySelector(".politicians")

export const PoliticianList = () => {
    const politicians = usePoliticians()

    const render = () => {
        contentTarget.innerHTML = politicians.map(politician => {
            // Get HTML representation of product
            const html = Politician(politician)

            return html
        }).join("")
    }

    render()
}

export default PoliticianList