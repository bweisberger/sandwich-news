import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            userName: "",
            password: ""
        }
    }
    handleChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.login(this.state.userName, this.state.password);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="userName" type="text" value={this.state.userName} placeholder="User name" onChange={this.handleChange}/>
                <input name="password" type="password" value={this.state.password} placeholder="password" onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Login;