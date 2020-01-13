let billSponsors = []

export const useBillSponsors = () => billSponsors.slice()

export const getBillSponsors = () => fetch("http://localhost:8088/politicianlegislations")
    .then(res => res.json())
    .then(parsedBillSponsors => billSponsors = parsedBillSponsors)