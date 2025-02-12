import { Component } from "react"

class LoginForm extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            email:"",
            password:"",
            formdata:null
        }
    }
    handlechange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlesubmit =(e)=>{
        e.preventDefault()
        const {username,email,password}=this.state
        this.setState({formdata:{username,email,password}})
    }

    render(){
        console.log(this.state)
        return(
            <>
            <form onSubmit={this.handlesubmit}> 
                <label for="username">Name:</label>
                <input type="text" placeholder="enter username" id="username" name="username" onChange={this.handlechange}/>
                <br></br>
                <label for="email">Email:</label>
                <input type="email" placeholder="enter email" id="email" name="email" onChange={this.handlechange}/>
                <br></br>
                <label for="password">Password:</label>
                <input type="password" placeholder="enter password" id="password"  name="password"onChange={this.handlechange}/>
                <br></br>
                <button type="submit" >login</button>

                
            </form>
            {
                this.state.formdata?
                <div><h2>name:{this.state.formdata.username}</h2>
                <h2>email:{this.state.formdata.email}</h2>
                <h2>password:{this.state.formdata.password}</h2></div>: "Loading......"
            }
            
            </>
        )
    }

}
export default LoginForm