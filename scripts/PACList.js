import { usePACs } from "./PACProvider.js"
import { useCorporations } from "./CorporationProvider.js"
import { useCorporateDonations } from "./CorporateDonationsProvider.js"
import PAC from "./PAC.js"

const contentTarget = document.querySelector(".PACs")

export const PACList = () => {
    const PACs = usePACs()
    const corporations = useCorporations()
    const corporateDonations = useCorporateDonations()

    const render = () => {
        contentTarget.innerHTML = PACs.map(currentPAC => {

            const filteredDonations = corporateDonations.filter(
                currentDonation =>
                    currentDonation.pacId === currentPAC.id
            )

            let donationsObject = {
                "corporations_names":[], 
                "corporation_donation_sums":[]
            }

            for(var i = 1; i < corporations.length + 1; i++) {

                let donationsArray = []

                const matchingDonationsArray = filteredDonations.filter(
                    currentFD =>
                        currentFD.corporationId === i
                )

                const foundCorporation = corporations.find(
                    corporation => {
                        if (matchingDonationsArray.length > 0) {
                            return corporation.id === matchingDonationsArray[0].corporationId
                        }
                    }
                )

                if (matchingDonationsArray.length > 0) {
                    donationsObject.corporations_names.push(foundCorporation.company)
    
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
    
                    donationsObject.corporation_donation_sums.push(sum)
                }

            }

            let arrayOfObjects = []

            for(var i = 0; i < donationsObject.corporation_donation_sums.length; i++) {
                let donationObject = {
                    "name": donationsObject.corporations_names[i],
                    "sum": donationsObject.corporation_donation_sums[i]
                }
                
                arrayOfObjects.push(donationObject)
            }

            console.log("arrayOfObjects")
            console.log(arrayOfObjects)

            // Get HTML representation of product
            const html = PAC(currentPAC, arrayOfObjects)

            return html
        }).join("")
    }

    render()
}

export default PACList