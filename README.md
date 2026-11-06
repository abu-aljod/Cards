# Blackjack

The webiste displays 2 random cards with the score which is the sum of both cards values. If it's more than 21, the page displays a message that lets the user know that it is a blackjack.
On page refresh, 2 new cards render.


## Cards.js

On this component, we generate 2 random different values and 2 suits, we check if the 2 values are different and if not we generate new ones to get different values so that the 2 cards shown on the screen are different. We use these values to pass them to the "Request" component to get the cards, and then we add them to a div that has a class of "cards-cont" which gives styles for the cards container. Then We Display the score as a h2 header; this score is calculated based on the values of both cards. In a ternary conditional, we check if the score is higher than 21, if so we display a message saying it's a blackjack.

## Request.js

The request component receives the value and suit as props, combine them together, and returns an img tag the has the source which is this API: https://deckofcardsapi.com/static/img/${code}.png . The code is the value and suit combined which indicates what type of card is it. 

## App.js

This component is only responsible to call Cards component and render it to the screen with: 

```js 

ReactDOM.render(<App />, document.getElementById("root")); 

```

## index.html

This html page is responsible to link all components together along with the stylesheet and external sources needed for react.