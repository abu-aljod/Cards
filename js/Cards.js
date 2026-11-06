// check if the number was generated before
function isGenerated (val1, val2) {
    if (val1 === val2) {
        // if the number is already generated return true saying "yes this is already generated"
        return true;
    }
    // if this is not ture return false to indicate that the index is not the same
    return false;
}

function convertValue (val) {
    if (val === "A") {
        return 11;
    }
    else if (val === "0" || val === "J" || val === "Q" || val === "K") {
        return 10;
    }
    else if (val >= "2" && val <= "9") {
        return parseInt(val, 10);
    }
    else {
        console.error("Something went wron. The value is invald");
        return 0;
    }
}

function Cards () {
    // An array that includes all card values
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];

    // An array of card suits
    const suits = ["H", "D", "C", "S"];

    let val1;
    let val2
    let suit1;
    let suit2;

    // Get a random value from the array
    val1 = values[Math.floor(Math.random() * values.length)];

    // Get a random suit from the suits array
    suit1 = suits[Math.floor(Math.random() * suits.length)];
    
    val2 = values[Math.floor(Math.random() * values.length)];

    suit2 = suits[Math.floor(Math.random() * suits.length)];

    // keep looping untill you generate a new number
    // I'm only checking against the values, because I'm okay with the suits being the same, but not same value
    while(isGenerated(val1, val2)) {
        // generate a new value
        val2 = values[Math.floor(Math.random() * values.length)];
    }

    let val1Worth = convertValue(val1);
    let val2Worth = convertValue(val2);

    let score = val1Worth + val2Worth;

    return (
        <>
            <div className="cards-cont">
                <Request val={val1} suit={suit1} />
                <Request val={val2} suit={suit2} />
            </div>

            <h2>Score: {score}</h2>

            {score === 21? <p>🔥🔥🔥🔥BLACKJACK!!!🔥🔥🔥🔥</p> : null}
        </>
    )
}