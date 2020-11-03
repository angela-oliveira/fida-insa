import React from 'react';
import reactDOM from 'react-dom';

class Estado extends React.Component{
    
    constructor(props){
        super(props)
        // let weight = '100'

        this.state={
            top: 400,
            left:0
        }

        this.cmd_click = this.cmd_click.bind(this)
    }

    cmd_click(){
        this.setState({ left: this.state.left + 5})
        console.log(this.state.left);
    }
    
    render(){
        let left = this.state.left;
        return(
            <div >
                <p style={{position:'relative',left:left}}>Nome: Messias </p>
                <button onClick={this.cmd_click}>Clique</button>
            </div>
        )
    }
}

export default Estado;