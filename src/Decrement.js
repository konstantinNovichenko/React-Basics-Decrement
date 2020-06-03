import React, {Component} from 'react';
import './App.css';


class Decrement extends Component{
  constructor(props){
      super(props);
      this.state = 
      {
        number: props.start,
        startingNum: props.start
    };
  }  

//decrement the number by 1
performDecrement(state) {
    if(state.number === 0) {
        return alert("Number cannot be less than zero!")
    }

    this.setState({number: state.number - 1});
}

//reset number to its starting value
resetNumber(state) {
    this.setState({number: state.startingNum});
}

render(){

    return (
        <div className = "decrement-field">
            <h4 className="decrement-number">
                {this.state.number} <br></br>                
            </h4>

            <div className="decrement-buttons">
                <button onClick={
                        () => this.performDecrement(this.state)
                    }> 
                    DECREASE
                </button>

                <button onClick={
                        () => this.resetNumber(this.state)
                    }>
                    RESET
                </button>
            </div>
            

        </div>


    );
}
}



export default Decrement;
