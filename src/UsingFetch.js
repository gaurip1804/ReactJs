import React, { Component } from 'react';


class UsingFetch extends Component{
    constructor(){
        super();
    }
       render(){
           return(
                     <div>
                       {this.props.datasource ? this.props.datasource.map(item =>
                         <div key={item.id}>
                             {item.name}
                         </div>
                         ) : 'No Data' }
                     </div>
           )
       }
}

export default UsingFetch;