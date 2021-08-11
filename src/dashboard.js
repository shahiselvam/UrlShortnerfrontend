import React from 'react';
import axios from 'axios';
import Home from './home';

const API_URL1 = 'https://url-shortner-backend-nodejs.herokuapp.com/count';

class dashboard extends React.Component{

constructor(){

    super();

    this.state ={
     UrlCount:''
        
    }
}

componentDidMount()  {
    
   
    this.getCount();
}

getCount = async () =>{
  
    const { data }   = await axios.get(`${API_URL1}`,{

        withCredentials: true
      });
   console.log(data);
   this.setState({UrlCount:data})
   console.log(this.state.UrlCount);
}

render(){
    return (
        <>
       <Home />
           
       <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
    
    
    <section class="content">
      <div class="container-fluid">
    
        <div class="row">
          <div class="col-lg-3 col-6">
    
            <div class="small-box bg-info">
              <div class="inner">
                  
                <h3>{this.state.UrlCount}</h3>
    
                <p>Url</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer"> <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
    
          
          
        </div>
       
       
      </div>
    </section>
    
    </div>
        </>
    )
    
}

}

export default dashboard;