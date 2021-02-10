import React from "react";
import { Doughnut } from "react-chartjs-2";

export default class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: {
        endpoints: {
          global: "",
          employee: "",
        },
      },

      charts: {
        global: {
          listings: {
            labels: [],
            datasets: [
              {
                data: [],
                backgroundColor: ["#032336", "#FC9543"],
                borderColor: ["#032336", "#FC9543"],
              },
            ],
          },
          value: {
            labels: [],
            datasets: [
              {
                data: [],
                backgroundColor: ["#032336", "#FC9543"],
                borderColor: ["#032336", "#FC9543"],
              },
            ],
          },
        },

        employee: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: ["#032336", "#FC9543"],
              borderColor: ["#032336", "#FC9543"],
            },
          ],
        },
      },
    };
  }

  componentDidMount() {
    this.setData();
  }

  setData() {
    const global = {
      listings: {
        available: 128,
        sold: 36,
      },

      value: {
        available: 18900000,
        sold: 4600000,
      },
    };

    const employee = {
      sold: {
        q: 4,
        v: 560000,
        c: 26000,
      },
    };

    const charts = { ...this.state.charts };

    charts.global.listings.labels.push(
      `${global.listings.available} Available`
    );
    charts.global.listings.labels.push(`${global.listings.sold} Sold`);
    charts.global.listings.datasets[0].data.push(
      global.listings.available,
      global.listings.sold
    );

    charts.global.value.labels.push(`Available: $${global.value.available}`);
    charts.global.value.labels.push(`Sold: $${global.value.sold}`);
    charts.global.value.datasets[0].data.push(
      global.value.available,
      global.value.sold
    );

    this.setState({ charts });
  }

  render() {
    return (
      <div className="charts">
        <h2>Global</h2>
        <div className="content">
          <div className="col">
            <h3>Listings</h3>
            <Doughnut data={this.state.charts.global.listings} />
          </div>
          <div className="col">
            <h3>Total Value</h3>
            <Doughnut data={this.state.charts.global.value} />
          </div>
        </div>
      </div>
    );
  }
}
