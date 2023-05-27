## Dependencies
npm i axios
## About
Epistemica-X is a web application for managing investment theses. Evidence-based reasoning helps managers determine how different mixtures of crypto tokens perform. Epistemica-X incorporates a Solana wallet interface as well.

Suppose a basket with an initial value of $10,000.00. Assume the aim is to determine the basket's return since the start of the year, January 1st, 2022. Then say the basket whose performance is to be measured is comprised of equal parts Bitcoin and Ether. Next solve for the quantity of Bitcoin and Ether $10,000.00 would have purchased at the historical prices. 

The core business logic to be performed in state is this: 

Initial Basket Value [user input] * BTC weighting (.5) [user input] / historical price [value from API] = BTC quantity [value calcuated in state]
Initial Basket Value [user input] * ETH weighting (.5) [user input] / historical price [value from API] = ETH quantity [value calculated in state]

BTC Quantity [value calculated in state] * present BTC price [value from API]
+ ETH Quantity [value calculated in state] * present ETH price [value from API]
= Present Basket Value [value calculated in state]

Total return [value calculated in state] = (Present Basket Value [value calculated in state] - Initial Basket Value [user input]) / Initial Basket Value [user input]
-------
## Technologies
Epistemica-X is a single page application built with React.js, React Hooks, Material UI, and JavaScript. CoinTiger uses CoinGecko's API for getting market data. The application makes calls directly to public endpoints. Solana wallet functionality is provided. 

## Contributions
Some features that would be really cool that I haven't gotten to yet but wouldn't mind getting around to at some point:

1. Chart.js to with basic ROI curves for each basket. Ideally you can click on the card, it flips over, then you see the chart of it's performance since the indexing date.
2. Covarience and correlation calculations for different baskets or correlation between a basket and the Nasdaq or S&P 500 index.

## Dependencies
1. redux
2. react-redux
3. axios
4. react
5. react-router-dom

