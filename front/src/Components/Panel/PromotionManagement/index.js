import React, { Component } from "react";
import MaterialTable from "material-table";
import PromotionService from '../../../Service/PromotionService';


export default class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          columns: [{ title: "Code", field: "code" },
                    { title: "% De reduction", field:"reduction"},
                    { title: "Date de debut", field:"start"},
                    { title: "Date de fin", field: "end"}
                    ],
        };
      }

      componentDidMount = () => {
        this.getPromotions();
      }
     
      getPromotions = async () => {
        const promotions = await PromotionService.getAll();
        this.setState({ promotions }, () => console.log(this.state));
      } 

    render() {
        return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
            columns={this.state.columns}
            data={this.state.promotions}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.promotions;
                      console.log(PromotionService.create(newData));
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
                      const data = this.state.promotions;
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      console.log(PromotionService.update(data[index].id, data[index]))
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      let data = this.state.promotions;
                      const index = data.indexOf(oldData);
                      data.splice(index, 1);
                      PromotionService.delete(oldData.id)
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
            }}
            title="Gestion des Promotion"
            />
        </div>
        );
    }
}