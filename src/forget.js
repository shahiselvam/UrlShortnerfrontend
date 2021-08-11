
import React from 'react';
import axios from 'axios';


const API_URL1 = 'https://url-shortner-backend-nodejs.herokuapp.com/forget'

class Forget extends React.Component{

constructor(){

    super();
    this.state = {

        email:''
    }
}

handleChange = ({target:{name , value}}) =>{

 this.setState({[name] : value})
}

handleSubmit = (event) =>{
    event.preventDefault();
    this.forget();
}

forget = async () =>{

 const {data} = await axios.post(API_URL1 , {
email:this.state.email

 },{

  withCredentials: true
}) 
 if(data.result == "success"){


    alert(data.message); 
  
  }
  
  else{
  
    alert(data.message);
  }

  this.setState({email:''});
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
                    <label for="exampleInputPassword1">Enter Email</label>
                    <input type="Email" name="email" value={this.state.email} class="form-control" id="exampleInputPassword1" placeholder="Email"  onChange={this.handleChange} />
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

export default Forget;
