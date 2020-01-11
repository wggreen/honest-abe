const PAC = (individualPAC, arrayOfObjects) => {
    return `
        <section class="PAC">
            <header class="PAC__name">
                <h1>${individualPAC.registeredName}</h1>
            </header>
            <div class="PAC__info">
                <div>${individualPAC.address}</div>
            </div>
            <div class="PAC__donors">
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