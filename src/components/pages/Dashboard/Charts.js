import React from "react";
import { Doughnut } from "react-chartjs-2";
import { finalEndpoints } from "../../../utils/endpoints";
import { authHeader } from "../../../utils/helpers";
import { auth, firebaseStorage } from "../../../firebase/firebase";


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

  async setData() {
    const currentUserToken = await auth.currentUser.getIdToken();
    const AuthHeader = authHeader(currentUserToken);
    const res = await fetch(
      finalEndpoints.getUserStats,
      {
        headers: AuthHeader,
      }
    );
    const userStats = await res.json()
    console.log(userStats)
    const global = {
      listings: {
        available: userStats.data.available,
        sold: userStats.data.sold,
      },

      value: {
        available: userStats.data.revenue,
        sold: userStats.data.possibleRevenue,
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
