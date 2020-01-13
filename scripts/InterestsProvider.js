let interests = []

export const useInterests = () => interests.slice()

export const getInterests = () => fetch("http://localhost:8088/interests")
    .then(res => res.json())
    .then(parsedInterests => interests = parsedInterests)