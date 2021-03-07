import React from 'react';



export default class FiddleSticks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: "A billion reasons to try"    
        
        }
        //const ego = this.state.choose;
        this.PickMe = this.PickMe.bind(this);
     
    }
    PickMe(){
        alert(this.state.choose);
    }
    render(){
        return (
            <button onClick={this.PickMe}>PICK ME</button> 

    );

    }
    

}