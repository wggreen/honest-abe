const Politician = (politician, arrayOfObjects) => {
    return `
        <section class="politician">
            <header class="politician__name">
                <h1>${politician.name.first} ${politician.name.last}</h1>
            </header>
            <div class="politician__info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
            <div class="pac__donations">
                <h2>PAC Donations</h2>
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

export default Politician