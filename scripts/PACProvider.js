let PACs = []

export const usePACs = () => PACs.slice()

export const getPACs = () => fetch("http://localhost:8088/pacs")
    .then(res => res.json())
    .then(parsedPACs => PACs = parsedPACs)