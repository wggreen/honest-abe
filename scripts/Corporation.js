const Corporation = (corporation) => {
    return `
        <section class="corporation">
            <header class="corporation__name">
                <h1>${corporation.company}</h1>
            </header>
            <div class="corporation__info">
                <div>${corporation.address}</div>
            </div>
        </section>
    `
}

export default Corporation