import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employee:[
        {id:"2020", name:"Ram", email:"ram@wipro.com"},
        {id:"2021", name:"Ravi", email:"ravi@wipro.com"},
        {id:"2022", name:"Vinay", email:"vinay@wipro.com"},
        {id:"2023", name:"John", email:"john@wipro.com"},
        {id:"2024", name:"Steve", email:"steve@wipro.com"}
      ]
    };
  }

  render() {
    const rows=this.state.employee.map(e => <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
        </tr>)
    const myStyle={
      border: "2px dashed green",
      textAlign:"center"
    }

    return (
      <div align="center">
        <h1 style={{color:"skyblue"}}>Employee List</h1>
        <table border="1" style={myStyle}>
          <thead style={{backgroundColor:"cyan"}}>
            <th style={{padding:"10px"}}>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email ID</th>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
