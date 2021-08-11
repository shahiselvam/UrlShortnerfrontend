import React from 'react';
import axios from 'axios';
import Home from './home';
import {Link} from 'react-router-dom';
const API_URL1 = 'https://url-shortner-backend-nodejs.herokuapp.com/shorten';


class UrlShortner extends React.Component{

    constructor(){

        super();

        this.state ={

         LongUrl:'',
         ShortUrl:''

        }
    }

    handlechange = ({target:{name , value}}) =>{

     this.setState({[name]: value});
    }


    handleSubmit = (event) =>{
    debugger
        event.preventDefault();

        this.createShorternUrl();
    }

    createShorternUrl = async () =>{
        
        const  {data}  = await axios.post(API_URL1 , {

        longUrl : this.state.LongUrl

        },{

            withCredentials: true
          })
        console.log(data.result);
        console.log(data.Url.shortUrl);
        
         debugger
        if(data.result = "Success"){
         
            this.setState({shortUrl:data.Url.shortUrl})
            

        }

        else{
         
            alert(data.message);
        }

        this.setState({LongUrl:''});
    }
    render() {
        return(
            <>
            <div class="wrapper">
                    <Home />
                    <div class="content-wrapper">
                    <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>UrlShortner</h1>
                                    </div>
                                    <div class="col-sm-12">
                                        <ol class="breadcrumb float-sm-right">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item active">UrlShortner</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="content">
                            <div class="container-fluid">
                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h3 class="card-title"> UrlShortner</h3>
                                            </div>

                                            <form onSubmit={this.handleSubmit}>
                                                <div class="card-body">
                                                    <div class="form-group">
                                                        <label for="Url">Enter Url</label>
                                                        <input  name="LongUrl" class="form-control" placeholder="Enter Url" value={this.state.LongUrl} onChange={this.handlechange} />
                                                    </div>
                                                    <div class="form-group">
                                                     <Link to={{ pathname:"http://"+this.state.shortUrl}} target="_blank" >
                                                     <label for="ShortUrl">{this.state.shortUrl}</label> 
                                                     </Link>                                                       
                                                    </div>

                                                    <div class="footer">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
            </>
        )
    }

}
export default UrlShortner;