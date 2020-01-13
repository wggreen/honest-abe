let corporateInterests = []

export const useCorporateInterests = () => corporateInterests.slice()

export const getCorporateInterests = () => fetch("http://localhost:8088/corporateinterests")
    .then(res => res.json())
    .then(parsedCorporateInterests => corporateInterests = parsedCorporateInterests)