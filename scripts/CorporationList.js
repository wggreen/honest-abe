import { useCorporations } from "./CorporationProvider.js"
import Corporation from "./Corporation.js"

const contentTarget = document.querySelector(".corporations")

export const CorporationList = () => {
    const corporations = useCorporations()

    const render = () => {
        contentTarget.innerHTML = corporations.map(corporation => {
            // Get HTML representation of product
            const html = Corporation(corporation)

            return html
        }).join("")
    }

    render()
}

export default CorporationList