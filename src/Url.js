import  React  from 'react';
import axios from 'axios';
import Home from './home';
import {Link} from 'react-router-dom';
const API_URL1 = 'https://url-shortner-backend-nodejs.herokuapp.com/shorten';


class Url extends React.Component{

constructor(){

    super();

    this.state={
     Url:[]

    }
}

componentDidMount(){

    this.getUrl();
}


getUrl = async () =>{

    const { data }  = await axios.get(API_URL1 ,{

        withCredentials: true
      });
 
    this.setState({Url:data})
}



render(){
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
                    <section class="content-header">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title"></h3>
                                        </div>

                                        <div class="card-body table-responsive p-0">
                                            <table class="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>

                                                        <th>LongUrl</th>
                                                        <th>ShortUrl</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.Url.map(url => {
                                                        return (
                                                            <tr key={url._id}>
                                                                <td>
                                                                <Link to={{ pathname:url.longUrl}} target="_blank" >
                                                                {url.longUrl}
                                                                </Link>
                                                                </td>
                                                                <td>
                                                                <Link to={{ pathname:"http://"+url.shortUrl}} target="_blank" >
                                                                {url.shortUrl}
                                                                </Link>    
                                                                </td>                                                            
                                                            </tr>


                                                        );
                                                    })}



                                                </tbody>
                                            </table>
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

export default Url;