import React, { Component } from "react";
import EnhancedTable from "./EnhancedTable";

export default class CoinTable extends Component {
  state = {
    rows: [],
    pageUp: false
  };

  async componentDidMount() {   
    const CoinGeckoEndpointMarkets="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false&price_change_percentage=24h"

    fetch(CoinGeckoEndpointMarkets).then(data => this.organize(data));
  }

  organize(all) {
    all.data.forEach(coin => {
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
        <EnhancedTable
          rows={this.state.rows}
          loggedIn={this.props.loggedIn}
          currentUserId={this.props.currentUserId}
        ></EnhancedTable>
      </div>
    );
  }
}
