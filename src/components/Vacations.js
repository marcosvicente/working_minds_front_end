import React, { Component } from 'react';
import List from './vacations/List.js';
import Create from './vacations/Create.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Vacation extends Component {

  render() {
    return (
    <div style={{ width: '40rem', margin: '0 auto'}}>
      <h2 className="text-center">Vacation</h2>
      <List />
      <Create />
      
    </div>
    );
  }
}
   
export default Vacation;