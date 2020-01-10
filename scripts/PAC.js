const PAC = (individualPAC, arrayOfObjects) => {
    return `
        <section class="pac">
            <header class="pac__name">
                <h1>${individualPAC.registeredName}</h1>
            </header>
            <div class="pac__info">
                <div>${individualPAC.address}</div>
            </div>
            <div class="pac__donors">
                <h2>Donors</h2>
                <ul>
                ${
                    arrayOfObjects.map(
                        object => {
                            return `<li>${object.name} (${object.sum})</li>`
                        }
                    ).join("")
                }
                </ul>
            </div>
        </section>
    `
}

export default PAC