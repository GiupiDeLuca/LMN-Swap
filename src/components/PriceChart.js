import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";
import Spinner from "./Spinner";
import { chartOptions, dummyData } from "./PriceChart.config";
import {
  priceChartLoadedSelector,
  priceChartSelector,
} from "../store/selectors";

const priceSymbol = (priceChange) => {
  let output;
  if (priceChange === "+") {
    output = <span className="text-success">&#9650;</span>; // green up triangle (html entity)
  } else {
    output = <span className="text-dange">&#9660;</span>; // red down triangle
  }
  return output;
};

const showPriceChart = (priceChart) => {
  return (
    <div className="price-chart">
      <div className="price">
        <h5>
          LMN/ETH &nbsp; {priceSymbol(priceChart.priceChange)} &nbsp; {priceChart.lastPrice}
        </h5>
      </div>
      <Chart
        options={chartOptions}
        series={priceChart.series}
        type="candlestick"
        width="100%"
        height="100%"
      />
    </div>
  );
};

class PriceChart extends Component {
  render() {
    return (
      <div className="card bg-dark text-white">
        <div className="card-header">Price Chart</div>
        <div className="card-body">
          {this.props.priceChartLoaded ? (
            showPriceChart(this.props.priceChart)
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    priceChartLoaded: priceChartLoadedSelector(state),
    priceChart: priceChartSelector(state),
  };
}

export default connect(mapStateToProps)(PriceChart);
