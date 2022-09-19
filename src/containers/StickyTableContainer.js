import axios from "axios";
import React, { Component } from "react";
import StickyTableComponent from "../components/StickyTableComponent";

export default class StickyTableContainer extends Component {
  state = {
    rows: [],
    pageUp: false
  };

  async componentDidMount() {   
    console.log("fetch starting")
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h")
    .then( (data) => this.organize(data.data))
    .catch((err) =>console.log(err))
  }


  organize(all) {
    all.forEach(coin => {
      this.state.rows.push([
        coin.name,
        coin.symbol.toUpperCase(),
        Number.parseFloat(coin.current_price),
        Number.parseFloat(coin.price_change_percentage_24h),
        Number.parseInt(coin.market_cap),
        coin.id
      ]);
      this.setState({ pageUp: true });
    });
  }

  render() {
    return (
      <div>
        <StickyTableComponent
          rows={this.state.rows}
        ></StickyTableComponent>
      </div>
    );
  }
}
