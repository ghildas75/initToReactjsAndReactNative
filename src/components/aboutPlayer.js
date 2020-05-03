import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 export class AboutPlayer extends React.Component{
constructor(props){
    super(props)
    this.state={
        langValue:'',
        label:'Take it easy!!!!!!!!!!',
        contact:{
            name:"Zidane",
            email:"zidane@madrid.com",
            photo:'./pictures/zizou.jpg'
        },
        languages:[
            {id:1,lang:'Java'},
            {id:2,lang:'Php'},
            {id:3,lang:'C++'},
            {id:4,lang:'SCALA'}
        ]
    }

}

componentWillMount(){
    console.log('its will  mount') ;
}
componentDidMount(){
    console.log('its did mount');
}
componentDidUpdate() {
    console.log('its did update');

}
componentWillUpdate(){
    console.log('its will update');
}





     deleteLanguage=(item)=>{
         let index=this.state.languages.indexOf(item);
         let newLang=[...this.state.languages];
         newLang.splice(index,1);
         this.setState(
             {
                 languages:newLang

             })

     }





addLanguages=(event)=> {
    event.preventDefault();
    let toAdd={
        id:[...this.state.languages].pop().id+1,
        lang:this.state.langValue
    }
    this.setState(
        {
            languages:[...this.state.languages,toAdd]
        }
    )

}

     setLanguages=(event)=>{
    this.setState({
        langValue:event.target.value
    })

     }

render(){
return (

<div className="card">
    <div className="card-header"><label className='card-title'><b>{ this.state.label}</b></label></div>
    <div className="row">
        <div className="col col-auto">
            <img  width={100} src={this.state.contact.photo}  alt='real madrid player'/>
        </div>
        <div className="col">
            <ul className='list-group'>
                <li className='list-group-item'> {this.state.contact.name}</li>
                <li className='list-group-item'>{this.state.contact.email}</li>
            </ul>
        </div>

    </div>

    <div className='card m-2'>

        <div className="card-header"><label className='card-title'><b>Languages</b></label></div>
        <div className="card-body">
            <form onSubmit={this.addLanguages}>
                <div  className='row mb-2'>
                    <div className='col'>
                        <input  className='p-2' type="text" name='lang'
                                onChange={this.setLanguages}
                                value={this.state.langValue} placeholder='Languages'/>
                    </div>
                    <div className='col col-auto'>

                        <button className='btn btn-primary' type="submit">Add </button>
                    </div>


                </div>
            </form>


            <table className="table">
                <thead>
                <tr>
                    <th> ID</th>  <th> lang</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.languages.map((item)=> {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.lang}</td>
                            <td>
                                <button onClick={()=>this.deleteLanguage(item)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    })
                }

                </tbody>



            </table>
        </div>
    </div>

</div>


)

}

}

