const Politician = (politician, arrayOfObjects, bills) => {
    return `
        <section class="politician">
            <header class="politician__name">
                <h1>${politician.name.first} ${politician.name.last}</h1>
            </header>
            <div class="politician__info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
                <div class="politician__bills">
                <h2>Sponsored Bills</h2>
                <div>
                ${
                    bills.map(
                        bill => {
                            return `<div>${bill}</div >`
                        }
                    ).join("")
                }
                </div>
            </div>
        </section>
    `
}

export default Politician