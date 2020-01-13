import { usePoliticians } from "./PoliticianProvider.js"
import { usePACs } from "./PACProvider.js"
import { useBills } from "./BillProvider.js"
import { useInterests } from "./InterestsProvider.js"
import { usePacDonations } from "./PACDonationsProvider.js"
import { useBillSponsors } from "./BillSponsorsProvider.js"
import { useCorporateInterests } from "./CorporateInterestsProvider.js"
import { useCorporateDonations } from "./CorporateDonationsProvider.js"
import Politician from "./Politician.js"
import { useCorporations } from "./CorporationProvider.js"

const contentTarget = document.querySelector(".politicians")

export const PoliticianList = () => {
    const politicians = usePoliticians()
    const pacs = usePACs()
    const bills = useBills()
    const interests = useInterests()
    const corporations = useCorporations()
    const corporateDonations = useCorporateDonations()
    const pacDonations = usePacDonations()
    const billSponsors = useBillSponsors()   
    const corporateInterests = useCorporateInterests() 

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


            const filteredSponsors = billSponsors.filter(
                currentSponsor => 
                    currentSponsor.politicianId === politician.id
            )

            let arrayOfFilteredBills = []

            const filteredBillsArrays = filteredSponsors.map(currentSponsor => {
                const filteredBill = bills.filter(
                    currentBill =>
                        currentSponsor.legislationId === currentBill.id
                )
                return filteredBill
            })
            
            filteredBillsArrays.map(currentFBA => {
                const filteredBillArray = currentFBA.map(currentObject => {
                    arrayOfFilteredBills.push(currentObject)
                })
            })

            let filteredInterestsArray = []

            arrayOfFilteredBills.map(currentFB => {
                const filteredInterests = interests.filter(
                    currentInterest =>
                        currentInterest.id === currentFB.interestId
                )
                filteredInterests.map(currentFI => {
                    filteredInterestsArray.push(currentFI)
                })
            })
            
            let arrayOfFilteredCorporateInterests = []

            const filteredCorporateInterestsArray = filteredInterestsArray.map(currentFI => {
                const filteredCorporateInterests = corporateInterests.filter(
                    currentCI =>
                        currentCI.interestId === currentFI.id
                )
                filteredCorporateInterests.map(currentFCI => {
                    arrayOfFilteredCorporateInterests.push(currentFCI)
                })
            })

            let filteredCorporationsArray = []

            arrayOfFilteredCorporateInterests.map(currentFCI => {
                const filteredCorporations = corporations.filter(
                    corporation =>
                        currentFCI.corporationId === corporation.id
                )
                filteredCorporations.map(currentFC => {
                    filteredCorporationsArray.push(currentFC)
                })
            })

            let filteredCorporateDonors = []

            filteredCorporationsArray.map(corporation => {
                const filteredCorporateDonations = corporateDonations.filter(
                    currentDonation =>
                        currentDonation.corporationId === corporation.id
                )
                filteredCorporateDonations.map(currentFCD => {
                    filteredCorporateDonors.push(corporation.company)
                })
            })

            let corporateDonorNames = []

            filteredCorporateDonors.map(donor => {
                if (corporateDonorNames.includes(donor)) {
                    return true
                }
                else {
                    corporateDonorNames.push(donor)
                }
            })

            let arrayOfObjects = []

            for(var i = 0; i < donationsObject.pacs_donation_sums.length; i++) {
                let donationObject = {
                    "name": donationsObject.pacs_names[i],
                    "sum": donationsObject.pacs_donation_sums[i]
                }
                
                arrayOfObjects.push(donationObject)
            }

            // Get HTML representation of product
            const html = Politician(politician, arrayOfObjects, arrayOfFilteredBills, corporateDonorNames)

            return html
        }).join("")
    }

    render()
}

export default PoliticianList