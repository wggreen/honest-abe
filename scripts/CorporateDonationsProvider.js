let corporateDonations = []

export const useCorporateDonations = () => corporateDonations.slice()

export const getCorporateDonations = () => fetch("http://localhost:8088/corporateDonations")
    .then(res => res.json())
    .then(parsedCorporateDonations => corporateDonations = parsedCorporateDonations)