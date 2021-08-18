import React from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const API_URL1 = 'https://url-shortner-backend-nodejs.herokuapp.com/login'
class login extends React.Component{

constructor(){

    super();
    this.state = {

      email:'',
      password: ''
    }
}

handleChange = ( { target: { name , value } }) =>{

  this.setState({ [name] : value })
  
  }
  handleSubmit = (event) =>{

    event.preventDefault();
    this.Login();

  }


  Login = async () =>{

const { data  } = await axios.post(API_URL1 , {

email:this.state.email,
password:this.state.password

},{

  withCredentials: true
})

if(data.result == "success"){
  const cookies = new Cookies();
  cookies.set('access_token' , data.access_token ,{path: '/', Domain: 'https://urlshorterbackend.herokuapp.com', secure: true,  httpOnly: false,sameSite: "none"})
  this.props.history.push(`/dashboard`);  

}

else{

  alert(data.message);
}

this.setState({email:'', password:''})
  }
render(){


    return (
        <>
        <div class="row">
        <div class="col-md-3">
            
        </div>
        <div class="col-md-6">
         <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">login</h3>
              </div>
           
              <form class="form-horizontal"  onSubmit={this.handleSubmit}>
                <div class="card-body">
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" name="email" class="form-control" id="inputEmail3" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" name="password" class="form-control" id="inputPassword3"value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                    </div>
                  </div>
                  <button class="btn btn-info">Sign In</button>
                  <br />
                <div class="card-footer">
                <Link to={"/Signup"}> <button class="btn btn-default float-right">Signup</button></Link>
                <Link to={"/Forget"}> <button class="btn btn-default float-right">ForgetPassword</button></Link>
                </div>
              </div>
              </form>
            </div>
            </div>

            <div class="col-md-3">

            </div>
            </div>
        </>
    )
}

}

export default login;
