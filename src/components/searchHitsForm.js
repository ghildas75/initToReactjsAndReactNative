import React from "react";

export class SearchHitsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            keyWord:''
        }
    }
    setKeyWord=(event)=> {
        this.setState({
            keyWord: event.target.value

        })
    }
    doSearch=(event)=>{
        event.preventDefault();

     this.props.onSearch(this.state.keyWord);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.doSearch}>
                    <div className="row m-2 p-2">
                        <div className='col' >
                            <input type='text' className='form-control' value={this.state.keyWord} placeholder='Key word'
                                   onChange={this.setKeyWord} />
                        </div>
                        <div className='col' >
                            <button className='btn btn-success'> Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
