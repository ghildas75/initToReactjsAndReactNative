import React from "react";
import {Link} from "react-router-dom";

export class HitItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-4" key={this.props.hit.id}>
                <div className="card">
                    <div className='m-2'>
                        {
                            (this.props.showDetails)?<Link  className='btn btn-danger' to={'/hits'}> Back</Link> :''
                        }

                    </div>
                    <div className="card-header card-title mb-2">{ !this.props.showDetails?this.props.hit.tags:'Details'} | {this.props.hit.webformatWidth} x {this.props.hit.webformatHeight}
                    </div>
                    <div className="card-body">
                        {
                            !this.props.showDetails?
                                <img  className='card-img'  height={200} src={this.props.hit.webformatURL} alt="description"/>:
                            <img  className='card-img'   src={this.props.hit.webformatURL} alt="description"/>
                        }


                    </div>

                </div>
                {
                  (!this.props.showDetails)?
                    <div>

                    <Link  className= 'btn btn-link' to= {'/hitDetails/'+this.props.hit.id}> Hit details </Link>
                    </div>:
                      <div className='row p-2'>
                         
                          <div className='col-auto'>

                              <img  className='card-img'   src={this.props.hit.userImageURL} alt="description"/>
                          </div>
                           <div>
                               <ul className='nav nav-pills'>
                                   <li className='list-group-item'><span className='card-title'> Views:{this.props.hit.views}</span></li>
                                   <li className='list-group-item'> <span className='card-title'> Comments:{this.props.hit.comments}</span></li>
                                   <li className='list-group-item'> <span className='card-title'>Downlaod:{this.props.hit.downloads}</span></li>

                               </ul>
                               <Link  className='btn btn-danger' to={'/hits'}> Back</Link>
                           </div>

                      </div>



                }


            </div>
        )

    }
}