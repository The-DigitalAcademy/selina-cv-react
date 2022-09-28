import React from 'react'
import Table from 'react-bootstrap/Table';


const Contact = () => {
  return (
    
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Email address</th>
          <th>Telephone</th>
          <th>City</th>
          <th>Street</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Selinakuna29@gmail.com</td>
          <td> 075 677 4591</td>
          <td>Johannesburg </td>
          <td>Rissik street</td>
        </tr>
      </tbody>
    </Table>


  )
}

export default Contact