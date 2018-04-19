import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile, IconButton, Subheader} from "material-ui";
import {getResource} from "../services/JwtService";
import Paper from 'material-ui/Paper';
import './Shaverma_list.css'

const style1 = {
    height: 250,
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const generateListOfShaverm = (tiles,handlerBuy) => {
    console.log(tiles);
    return(
        <div>
            {tiles.map((tile)=>(
                <Paper style={style1} zDepth={1} className='style2'>
                    <div className='info_block'>
                        <div className="wrapper">
                            <div className="content">
                                <p>{tile.title}</p>
                                <p>{tile.comment}</p>
                            </div>
                            <div class="sidebar">
                                <div class="circle">{tile.cost}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FlatButton
                            label="Купить"
                            fullWidth={true}
                            onClick={(event)=>handlerBuy(tile)}
                        />
                    </div>
                </Paper>
            ))}
        </div>
    );
}

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1000,
        height: 450,
        overflowY: 'auto',
    },
};

class Shaverma_list extends Component {

    constructor(props){
        super(props);

        this.state = {tiles:[]}
    }

    componentDidMount(){
        const url = 'http://localhost:8082/spring-security-oauth-resource/list_shaverm';
        const data = getResource(url);
        data.then(result => {
            this.setState({tiles : result.data})
        });
    }

    logOut(){
        localStorage.removeItem("access_token");
    }
    render(){
        const {tiles} = this.state;
        return (
            <div>
                {generateListOfShaverm(tiles,this.props.handlerBuy)}
            </div>
        )
    }
}
export default Shaverma_list;