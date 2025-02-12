import { Component } from "react"

class LoginForm1 extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            email:"",
            password:"",
            formdata:[]
        }
    }
    handlechange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlesubmit =(e)=>{
        e.preventDefault()
        const {username,email,password,formdata}=this.state
        this.setState({formdata:[...formdata,{username,email,password}]})
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

                
            </form >
            {
                this.state.formdata.length > 0 ?
                <table border={1} cellSpacing={1}>
                    <thead>
                <th>Name</th>
                <th>Email</th>
                <th>password</th>
                </thead>
                <tbody>{this.state.formdata.map((val,idx)=>(
               
                <tr key={idx}>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                </tr>
                ))}
                </tbody></table>: "Loading......"
            }
            
            </>
        )
    }

}
export default LoginForm1