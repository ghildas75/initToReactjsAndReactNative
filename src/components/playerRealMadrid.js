import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class PlayerRealMadrid extends React.Component{
constructor(props){
    super(props)
    this.state={
        counter:1,
        imagesList:[0]
    }
    
}
setCounter=(op)=>{

    let sign= op =='+'?+1:-1;
    if(op ==="-" && this.state.counter ===1){
        sign=0;
    }

    let c=this.state.counter+sign;

    this.setState({
            counter:c ,
            imagesList:new Array (c).fill(0)
        }

    )

}

render(){
return (
<div className="card m-3">
    <div className="card-header">
        <b>{this.props.title}:{this.state.counter}</b>

    </div>
    <div className='md-3'>
        <button onClick={() =>this.setCounter('+')} className='btn btn-primary m-2'>+</button>
        <button onClick={() =>this.setCounter('-')} className='btn btn-primary m-2'>-</button>
    </div>
     <div className="card-body">
     {
         this.state.imagesList.map((v,index)=>
       <span>{index}
         <img   width={ 100}  src={this.props.image}/>
          </span>
     )}

     </div>
</div>

)

}

}

export default PlayerRealMadrid;