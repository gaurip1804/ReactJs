import React, { Component } from 'react';
import UsingFetch from './UsingFetch'; 


export default class UsingForm extends Component{

    
  render(){
    return(
      <div>
      <form>
      <label>
        Name:
         <input type="text" name="uname" value = {this.props.uname} onChange={(e)=>this.props.onChangeValue(e)}></input>
      </label>
      <label>
        ID:
        <input type="text" name="id" value = {this.props.id} onChange={(e)=>this.props.onChangeValue(e)}></input>
      </label>
      {/* <input type="button" value="Submit" onClick = {(e) => this.props.handleSubmit(e)} /> */}

      <input type="button" value="Submit" onClick = {() => this.props.handleSubmit()} />
    </form>
      {/* <UsingFetch datasource = {this.state.companyList}/> */}
    </div>
    )
  }

}