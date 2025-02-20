import {Component} from "react";


class UserClass extends Component {

    constructor(props)

    {
        super(props);
        console.log("constructure");
        this.state={
            count:3,
            

        }
        
        
    }
    componentDidMount (){
        console.log("componentdidmount");
    }
    render(){
        return(
            <div className="user-card">
            <h1>{this.props.name}</h1>
            <h2>count: {this.state.count}</h2>
            <button onClick={
                ()=>{

                    this.setState({
                        count:this.state.count+1,
                    })
                }
            }>count increase

            </button>
            <h2>Location: Mumbai</h2>
            <h3>Contact: @kohili</h3>
            </div>
        );
    }
    
}

export default UserClass;