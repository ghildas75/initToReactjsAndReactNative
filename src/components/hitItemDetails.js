import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios/index";
import {HitItem} from "./hitItem";
 export class HitItemDetails extends React.Component{
constructor(props){
 super(props)
    this.state={
     hit:null
    }
}

    componentDidMount(){
  this.getHits(this.props.match.params.id)
    }
     getHits(id){

         const url ='https://pixabay.com/api/?key=16360694-7d19609c43a6b721fc0eb29fd&id='+id;
         axios.get(url).then((response)=>{

             this.setState({
                 hit:response.data.hits[0],



             })
         }).catch((error)=>{
             console.error(error);
         })
     }
    render(){
    if( this.state.hit !=null){
        return <HitItem hit={this.state.hit} showDetails={true}/>
    }

     else return <div></div>

    }

 }






