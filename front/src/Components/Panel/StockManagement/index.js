import React, { Component } from "react";
import MaterialTable,{MTableToolbar} from "material-table";
import Input from '@material-ui/core/Input';
import ProductService from '../../../Service/ProductService';
import SupplierService from '../../../Service/SupplierService';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


export default class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [],
          columns: [{ title: "Name", field: "name" },
                    { title: "Quantity", field: 'quantity' },
                    { title: "Product to buy", field: "order", render: rowData => <div><Input type="number" onChange={(e) => {rowData.order = e.target.value; }} defaultValue={rowData.stock}/></div>},
                    { title: "Shipment Status", field:"delivery", emptyValue: "No Order for this Product" }
                    ],
          suppliers:[],
          supplier: "NonCorp"
        };
      }

      componentDidMount = () => {
        this.getProducts();
        this.getSuppliers();
      }
     
      getProducts = async () => {
        const products = await ProductService.getAll();
        this.setState({ products });
      } 

      getSuppliers = async () => {
        const suppliers = await SupplierService.getAll();
        this.setState({ suppliers }, () => console.log(this.state));
      } 

    render() {
        return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
            actions={[
                {
                    tooltip: 'Add to Stock',
                    icon: 'add',
                    onClick: (evt, data) => {
                        for(let i in data) {
                            data[i].delivery = `You ordered ${data[i].order} unity from ${this.state.supplier}`;
                        }
                        this.forceUpdate();
                    }
                }
            ]}
            options={{
                selection : true
            }}
            columns={this.state.columns}
            data={this.state.products}
            title="Gestion des Stock"
            components={{
                Toolbar: props => (
                  <div>
                    <MTableToolbar {...props} />
                    <div style={{padding: '0px 10px', minWidth: 120}}>
                    <InputLabel htmlFor="supp">Suppliers</InputLabel>
                    <Select
                        value={this.state.supplier}
                        onChange={(e) => {
                            this.setState({supplier: e.target.value})
                        }}
                        inputProps={{
                            name: 'supplier',
                            id: 'supp',
                        }}
                    >    
                        {this.state.suppliers.map((item, key) => {
                            return <MenuItem key={key} value={item.name}>{item.name}</MenuItem> 
                        })}
                     </Select>
                    </div>
                  </div>
                ),
              }}
            />
        </div>
        );
    }
}