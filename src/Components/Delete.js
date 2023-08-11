import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const Delete = () => {
    return <div>
    <h1>Delete</h1>
    
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Product Type</th>
        <th>Description</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Car</td>
            <td>Lorem Ipsum</td>
            <th>Description</th>
            <th><Button variant="danger">X</Button>{' '}</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Car</td>
            <td>Lorem Ipsum</td>
            <th>Description</th>
            <th><Button variant="danger">X</Button>{' '}</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Car</td>
            <td>Lorem Ipsum</td>
            <th>Description</th>
            <th><Button variant="danger">X</Button>{' '}</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Car</td>
            <td>Lorem Ipsum</td>
            <th>Description</th>
            <th><Button variant="danger">X</Button>{' '}</th>
        </tr>

    </tbody>
  </Table>
    </div>;
  };
  
  export default Delete;