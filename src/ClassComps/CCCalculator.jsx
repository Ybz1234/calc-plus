import { Component } from "react";
import Button from '@mui/material/Button';

export default class CCCalculator extends Component{

    constructor(props){
        super(props);
        this.state = {n1: 0, n2: 0, res: 0}
    }

    btnAdd = () => {
        let result = Number(this.state.n1) + Number(this.state.n2);
        this.setState({ res: result });
    }
    
    btnSubtract = () => {
        let result = Number(this.state.n1) - Number(this.state.n2);
        this.setState({ res: result });
    }
    
    btnMultiply = () => {
        let result = Number(this.state.n1) * Number(this.state.n2);
        this.setState({ res: result });
    }
    
    btnDivide = () => {
        let result = Number(this.state.n1) / Number(this.state.n2);
        this.setState({ res: result });
    }
    
    

    render(){
        return(
            <>
                <span>Number 1: </span>
                <input type="number" placeholder="Enter 1st number" onChange={(e) => {
                    this.setState({n1: e.target.value})
                }}/> <br />
                <Button variant="contained" onClick={this.btnAdd}>+</Button>
                <Button variant="contained" onClick={this.btnSubtract}>-</Button>
                <Button variant="contained" onClick={this.btnMultiply}>*</Button>
                <Button variant="contained" onClick={this.btnDivide}>/</Button>
                <br/>
                <span>Number 2: </span>
                <input type="number" placeholder="Enter 2nd number" onChange={(e) => {
                    this.setState({n2: e.target.value})
                }}/> <br />
                Result = { this.state.res }
            </>
        );
    }
}