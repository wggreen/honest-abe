let bills = []

export const useBills = () => bills.slice()

export const getBills = () => fetch("http://localhost:8088/legislations")
    .then(res => res.json())
    .then(parsedBills => bills = parsedBills)