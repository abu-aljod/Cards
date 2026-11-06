function Request({val, suit}) {
    if (!val || !suit) {
        return console.error("Suit or value are not defined")
    } 

    let code = val + suit

    return (
        <img className="card" src={`https://deckofcardsapi.com/static/img/${code}.png`} alt="Card image" />
    )
}