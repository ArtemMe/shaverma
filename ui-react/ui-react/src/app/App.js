import React, { Component } from 'react';
import './App.css';
import Shaverma_list from "../content/Shaverma_list";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Order_table from "../table/Order_table";
import {countProduct} from "../services/CartService";
import {registerOrder} from "../services/JwtService";

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            products:null,
            cart: [],
        }
    }

    handlerBuy = product => {
       this.setAmountProducts();
       this.state.cart.push(product);
       localStorage.setItem('cart',JSON.stringify(this.state.cart));
    }

    componentDidMount(){
        this.setAmountProducts();
    }

    setAmountProducts = () => {
        let amountProducts = localStorage.getItem("amount_products");

        if(amountProducts !== null){
            amountProducts = parseInt(amountProducts)+1;
        }else{
            amountProducts = 1;
        }

        localStorage.setItem("amount_products", amountProducts);

        this.setState({
            products:amountProducts,
        });
    }

    cleanCart = () =>{
        this.setState({
            products: null,
        });
        localStorage.removeItem("cart");
    }
  render() {
    return (
      <div className="App">
          <MuiThemeProvider>
              <Header
                  productCounter={this.state.products}
                  cleanCart = {this.cleanCart}
              />
              <Shaverma_list handlerBuy={this.handlerBuy}/>
          </MuiThemeProvider>
      </div>
    );
  }
}

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <AppBar
                    title="ШАВЕРМА"
                    iconElementRight={
                        <div className='right_corner'>
                            <div>
                                <ProcessCheckoutDialog
                                    productCounter={this.props.productCounter}
                                    orderedProducts = {this.props.orderedProducts}
                                    cleanCart = {this.props.cleanCart}
                                />
                            </div>
                            <div>
                                <FlatButton
                                    label="ВЫХОД"
                                    onClick={()=>this.logOut()}
                                    href="/login"
                                />
                            </div>
                        </div>
                    }
                />
            </div>
        )
    }
}

class Cart extends Component {
    render(){
        return(
            <Chip>
                В корзине {this.props.productCounter}
            </Chip>
        )
    }
}

class ProcessCheckoutDialog extends React.Component {
    state = {
        open: false,
        orderId: null,
        list_shava:[],
    };

    // getListProducts = () => {
    //     const list = JSON.parse(localStorage.getItem("cart")).sort((item1,item2)=>{return (item1.id-item2.id)});
    //     return countProduct(list);
    // }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleRegisterOrder = () => {
        const list = JSON.parse(localStorage.getItem("cart")).sort((item1,item2)=>{return (item1.id-item2.id)});
        const list_shava = countProduct(list);
        const orderProductJson = [];
        list_shava.map(product =>{
            console.log(product.counter+"  "+product.shava_info.id);
            orderProductJson.push({quantity:product.counter, productId:product.shava_info.id})
        })

        registerOrder(orderProductJson)
            .then(res => this.setState({orderId: res.data}));

        //this.setState({open: false});
    };

    handleClose = () =>{
        this.setState({open: false,orderId:null});
        this.props.cleanCart();
    };

    render() {
        const actionsBeforeOrder = [
            <FlatButton
                label="Отмена"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Заказать"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleRegisterOrder}
            />,
        ];
        const actionsAfterOrder = [
            <FlatButton
                label="Закрыть"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <RaisedButton label={this.props.productCounter===null ? 'В корзине пусто' : 'В корзине '+this.props.productCounter} onClick={this.handleOpen} />
                <Dialog
                    title="Ваш заказ"
                    actions={this.state.orderId !==null? actionsAfterOrder : actionsBeforeOrder}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {
                        this.state.orderId !== null
                        ? <h1>Номер заказа {this.state.orderId}</h1>
                        : <Order_table/>
                    }

                </Dialog>
            </div>
        );
    }
}


export default App;
