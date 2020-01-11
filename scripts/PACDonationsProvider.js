let pacdonations = []

export const usePacDonations = () => pacdonations.slice()

export const getPacDonations = () => fetch("http://localhost:8088/pacdonations")
    .then(res => res.json())
    .then(parsedPacdonations => pacdonations = parsedPacdonations)