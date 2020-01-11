import { usePoliticians } from "./PoliticianProvider.js"
import { usePACs } from "./PACProvider.js"
import { usePacDonations } from "./PACDonationsProvider.js"
import Politician from "./Politician.js"

const contentTarget = document.querySelector(".politicians")

export const PoliticianList = () => {
    const politicians = usePoliticians()
    const pacs = usePACs()
    const pacDonations = usePacDonations()

    const render = () => {
        contentTarget.innerHTML = politicians.map(politician => {

            const filteredDonations = pacDonations.filter(
                currentDonation =>
                    currentDonation.politicianId === politician.id
            )

            let donationsObject = {
                "pacs_names":[], 
                "pacs_donation_sums":[]
            }

            for(var i = 1; i < pacs.length + 1; i++) {

                let donationsArray = []

                const matchingDonationsArray = filteredDonations.filter(
                    currentFD =>
                        currentFD.pacId === i
                )

                const foundPAC = pacs.find(
                    pac => {
                        if (matchingDonationsArray.length > 0) {
                            return pac.id === matchingDonationsArray[0].pacId
                        }
                    }
                )

                if (matchingDonationsArray.length > 0) {
                    donationsObject.pacs_names.push(foundPAC.registeredName)
    
                    matchingDonationsArray.map(
                        currentMD => {
                            donationsArray.push(currentMD.amount)
                        }
                    )
    
                    let sum = donationsArray.reduce((acc, val) => {
                        return acc + val;
                        }
                    )

                    sum.toString()

                    sum = '$' + sum.toFixed()
    
                    donationsObject.pacs_donation_sums.push(sum)
                }

            }

            let arrayOfObjects = []

            for(var i = 0; i < donationsObject.pacs_donation_sums.length; i++) {
                let donationObject = {
                    "name": donationsObject.pacs_names[i],
                    "sum": donationsObject.pacs_donation_sums[i]
                }
                
                arrayOfObjects.push(donationObject)
            }

            // Get HTML representation of product
            const html = Politician(politician, arrayOfObjects)

            return html
        }).join("")
    }

    render()
}

export default PoliticianList