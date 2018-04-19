import React, { Component } from 'react';
import './Order_table.css';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableFooter,
} from 'material-ui/Table';
import {countProduct, getSortedProductList} from "../services/CartService";

class Order_table extends Component {
    constructor(props) {
        super(props);

        this.state={
            list:[],
            list_shava:[],
            fixedHeader: false,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px',
        }
    }

    componentDidMount(){
        this.setState({
            list_shava: countProduct(getSortedProductList())
        });
    }

    render() {
        const {list_shava} = this.state;
        let amount = 0;
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Название</TableHeaderColumn>
                            <TableHeaderColumn>Количество</TableHeaderColumn>
                            <TableHeaderColumn>Стоимость</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                    {list_shava.map((item) => {
                            const handlerDismiss = () => {
                                console.log("This work!");
                            }
                            amount = amount+item.counter*item.shava_info.cost;
                            return (
                                <TableRow key={item.shava_info.id}>
                                    <TableRowColumn>{item.shava_info.title}</TableRowColumn>
                                    <TableRowColumn>{item.counter}</TableRowColumn>
                                    <TableRowColumn>{item.shava_info.cost}</TableRowColumn>
                                </TableRow>
                            )
                        }
                    )}
                    </TableBody>
                    <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
                        <TableRow>
                            <TableRowColumn ></TableRowColumn>
                            <TableRowColumn >Итого:</TableRowColumn>
                            <TableRowColumn >{amount}</TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        )
    }
}

const Button = ({onClick, className, children})=> {
    return(
        <button
            onClick={onClick}
            className={className}
            type='button'
        >
            {children}
        </button>
    )
}

export default Order_table;