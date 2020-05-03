import React from "react";
import axios from 'axios';
import {HitItem} from "./hitItem";
import {SearchHitsForm} from "./searchHitsForm";

export class HitPixBay extends React.Component{
constructor(props){
    super(props)
    this.state={
        hits:[],
        currentPage:1,
        pageSize:10,
        currentKeyWord:'London',
        totalPages:1,
        pages:[]

    }
}
componentDidMount(){
    this.getHits();
}

getHits(keyWord){

    const url ='https://pixabay.com/api/?key=16360694-7d19609c43a6b721fc0eb29fd&q='+keyWord+'&page='+this.state.currentPage+'&per_page='+this.state.pageSize;
    axios.get(url).then((response)=>{
        const totalP= (response.data.totalHits%this.state.pageSize) ===0?(response.data.totalHits/this.state.pageSize):Math.floor(response.data.totalHits/this.state.pageSize)+1;

        this.setState({
            hits:response.data.hits,
            totalPages:totalP,
            pages:new Array(totalP).fill(0),
            currentKeyWord:keyWord



        })
    }).catch((error)=>{
        console.error(error);
    })
}

goToPage=(index)=>{
  this.setState({
      currentPage:index
  },()=> {
      this.getHits(this.state.currentKeyWord);
  })

}
search=(keyWord)=>{
    this.getHits(keyWord)

}

    render(){
        return <div>
            <SearchHitsForm onSearch={this.search}/>

        {/*   <form onSubmit={this.getHitsBKeyWord}>
               <div className="row m-2 p-2">
                   <div className='col' >
                       <input type='text' className='form-control' value={this.state.currentKeyWord} placeholder='Key word'
                              onChange={this.setKeyWord} />
                   </div>
                   <div className='col' >
                       <button className='btn btn-success'> Search</button>
                   </div>
               </div>
           </form>*/}
            <div className='row'>

            {
                this.state.hits.map((hit,index)=>

                       <HitItem hit={hit} showDetails={false}/>
                       /* <div className="col-md-4" key={index}>
                        <div className="card">
                            <div className="card-header card-title">{res.tags} | {res.webformatWidth} x {res.webformatHeight}
                            </div>
                            <div className="card-body">
                           <img  className='card-img'  height={200} src={res.webformatURL} alt="description"/>
                            </div>

                        </div>

                    </div>*/

                   )

            }
            </div>

            <div>
               <ul className='nav nav-pills'>
                   {
                       this.state.pages.map((p,index)=>
                       <li  key={index}><button className={this.state.currentPage ===index+1?'btn btn-primary':'btn btn-link'} onClick={()=>this.goToPage(index+1)}>{index+1}</button></li>
                       )
                   }
               </ul>
            </div>
        </div>
    }



}