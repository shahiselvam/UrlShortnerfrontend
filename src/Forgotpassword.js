
import React from 'react';
import axios from 'axios';


const API_URL = 'https://url-shortner-backend-nodejs.herokuapp.com/reset'
class reset extends React.Component{

constructor(){

    super();
    this.state = {
    password:'',
    confirmpassword:''
      
    }
}

componentDidMount() {
const token = this.props.match.params.token;

  this.checkIfValid(token);

}
handleChange = ( { target: { name , value } }) =>{

  this.setState({ [name] : value })
  
  }
  handleSubmit = (event) =>
  {

   event.preventDefault();
   this.newPassword();
  }
  
  newPassword = async () =>
  {

    const token = this.props.match.params.token;
  const { data } = await axios.post(`${API_URL}/${token}`, {
   password:this.state.password,
   confirmpassword: this.state.confirmpassword
  
  },{

    withCredentials: true
  });
  
  if(data.result == "Success"){
  
    
    alert(data.message); 
    this.props.history.push("/login");  
  }
  
  else{
  
    alert(data.message);
  }
  
  this.setState({password:'' ,confirmpassword:'' })

  
    }

 checkIfValid = async (token) =>{
  

  const { data} = await axios.get(`${API_URL}/${token}`,{

    withCredentials: true
  });

  if(data.result == "error"){


    alert(data.message); 
    this.props.history.push("/Forget");  
  }

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
                <h3 class="card-title">Forget Password</h3>
              </div>
          
              <form onSubmit={this.handleSubmit}>
                <div class="card-body">
                  
                  <div class="form-group">
                    <label for="exampleInputPassword1">NewPassword</label>
                    <input type="password" name="password" value={this.state.password} class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" name="confirmpassword" value={this.state.confirmpassword} class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                  </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
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

export default reset;
