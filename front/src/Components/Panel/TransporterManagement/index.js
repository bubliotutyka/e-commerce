import React, { Component } from "react";
import MaterialTable from "material-table";
import TransporterService from '../../../Service/TransporterService';


export default class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          columns: [{ title: "Name", field: "name" },
                    { title: "Weigth", field: 'base_cost[0].weight' },
                    { title: "Base Cost", field: 'base_cost[0].base_cost'},
                    { title: "Shipment Delay", field: "delivery_delay"},
                    { title: "Supplement per Product", field:"per_product"},
                    { title: "BlackList", field:"blacklist[0]"},
                    { title: "Disponibility", field: "disponibility[0]"}
                    ],
        };
      }

      componentDidMount = () => {
        this.getTransporters();
      }
     
      getTransporters = async () => {
        const transporters = await TransporterService.GetAllTransporter();
        this.setState({ transporters }, () => console.log(this.state));
      } 

    render() {
        return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
            columns={this.state.columns}
            data={this.state.transporters}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      data.push(newData);
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.transporters;
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      console.log(data[index])
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      let data = this.state.data;
                      const index = data.indexOf(oldData);
                      data.splice(index, 1);
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
            }}
            title="Gestion des Stock"
            />
        </div>
        );
    }
}