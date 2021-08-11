import React from 'react';
import axios from 'axios';

const API_URL = 'https://url-shortner-backend-nodejs.herokuapp.com/registration';

class signup extends React.Component{

constructor(){

    super();

    this.state =
    {
    FirstName:'',
    LastName:'',
    email: '',
    password: '',
    confirmpassword: ''


    }
}
handleChange = ( { target: { name , value } }) =>{

this.setState({ [name] : value })

}
handelSubmit = (event) =>{
  event.preventDefault();
  
  this.createUser();
}

createUser = async () => {

const { data } = await axios.post(API_URL , {

  FirstName:this.state.FirstName,
  LastName:this.state.LastName,
  email : this.state.email,
  password: this.state.password,
  confirmpassword : this.state.confirmpassword
},{

  withCredentials: true
})

if(data.result == "success"){

  alert(data.message);
}

else{

  alert(data.message);
}


this.setState({FirstName:'' ,LastName:'' , email : '' , password: '', confirmpassword: ''})

}

render(){


    return (
        <>
    <section class="content">
        <div class="container-fluid">
          <div class="row">
              <div class="col-md-3">

              </div>
          <div class="col-md-6">
         
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Sign Up</h3>
              </div>
          
              <form onSubmit={this.handelSubmit}>
                <div class="card-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" name="FirstName" value={this.state.FirstName} class="form-control" id="exampleInputEmail1" placeholder="Enter Name" onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" name="LastName" value={this.state.LastName} class="form-control" id="exampleInputEmail1" placeholder="Enter Name" onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" value={this.state.email} class="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" value={this.state.password} class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" name="confirmpassword" value={this.state.confirmpassword} class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                  </div>
                <div class="card-footer">
                  <button type="Submit" class="btn btn-primary">Submit</button>
                </div>
                </div>
              </form>
            </div>           

          </div>
          </div>
          </div>
          </section>

        </>
    )
}

}


export default signup;