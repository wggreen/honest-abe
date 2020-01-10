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
                console.log("matchingDonationsArray:")
                console.log(matchingDonationsArray)

                const foundCorporation = corporations.find(
                    corporation => {
                        if (matchingDonationsArray.length > 0) {
                            return corporation.id === matchingDonationsArray[0].corporationId
                        }
                    }
                )

                if (matchingDonationsArray.length > 0) {
                    donationsObject.corporations_names.push(foundCorporation.company)
                    console.log("donationsObject:")
                    console.log(donationsObject)
    
                    matchingDonationsArray.map(
                        currentMD => {
                            donationsArray.push(currentMD.amount)
                        }
                    )
                    console.log("donationsArray:")
                    console.log(donationsArray)
    
                    let sum = donationsArray.reduce((acc, val) => {
                        return acc + val;
                        }
                    )
    
                    donationsObject.corporation_donation_sums.push(sum)
                    console.log("donationsObject:")
                    console.log(donationsObject)
                }

            }

            let arrayOfObjects = []

            for(var i = 0; i < donationsObject.corporation_donation_sums.length; i++) {
                let donationObject = {
                    "name": donationsObject.corporations_names[i],
                    "sum": donationsObject.corporation_donation_sums[i]
                }
                
                console.log("donationsObject.corporation_donation_sums[i]:")
                console.log(donationsObject.corporation_donation_sums[i])
                arrayOfObjects.push(donationObject)
            }

            // Get HTML representation of product
            const html = PAC(currentPAC, arrayOfObjects)

            return html
        }).join("")
    }

    render()
}

export default PACList