import React, { Component } from "react";
import MaterialTable from "material-table";
import SupplierService from '../../../Service/SupplierService';


export default class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          columns: [{ title: "Name", field: "name" },
                    ],
          suppliers:[
              {name: "OuiCorp"},
              {name: "YesDistrib"}
          ],
        };
      }

      componentDidMount = () => {
        this.getSuppliers();
        console.log(this.state.products)
      }
     
      getSuppliers = async () => {
        const suppliers = await SupplierService.getAll();
        this.setState({ suppliers }, () => console.log(this.state));
      } 

    render() {
        return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
            columns={this.state.columns}
            data={this.state.suppliers}
            title="Gestion des Fournisseur"
            editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const data = this.state.suppliers;
                        console.log(SupplierService.create(newData));
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
                        const data = this.state.suppliers;
                        const index = data.indexOf(oldData);
                        data[index] = newData;
                        console.log(SupplierService.update(data[index].id, data[index]))
                        this.setState({ data }, () => resolve());
                      }
                      resolve()
                    }, 1000)
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = this.state.suppliers;
                        const index = data.indexOf(oldData);
                        data.splice(index, 1);
                        SupplierService.delete(oldData.id)
                        this.setState({ data }, () => resolve());
                      }
                      resolve()
                    }, 1000)
                  }),
              }}
            />
        </div>
        );
    }
}