import React, { Component } from 'react';
 // import Api from './api/Api'; 
  import UsingForm from './UsingForm';
  import UsingFetch from './UsingFetch'; 
  //import New from './api/New'; 


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        companyList:[],
        uname: '',
        id: ''
    };
   
    }
    
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => { return  res.json()})
      .then(
        res => {
             this.setState({
              companyList : res
             });
        },
         (error) => {
          console.log(error);
        }
        );
      }

      
  

  handleChangeValue = (e) => {
    this.setState({
           [e.target.name]: e.target.value,
       });
  }

  handleSubmit = () => {
    var newObj = {
              'id' : this.state.id,
              'name' : this.state.uname
              }
    var newlist = this.state.companyList;
    newlist.push(newObj);
    this.setState({
      companyList:newlist
    });
 }

      render() {
        return (
          <div className="App">
            1) DataGrid
            {/* { <Api onChange = {() => this.handleChange()} datasource = {this.state.datasource} /> }  */}
            
            <UsingForm onChangeValue = {this.handleChangeValue} handleSubmit = {this.handleSubmit}></UsingForm>
            <UsingFetch datasource = {this.state.companyList}/>
          </div>
        );
      }
    }





export default App;
