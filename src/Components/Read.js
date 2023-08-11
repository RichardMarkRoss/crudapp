import Table from 'react-bootstrap/Table';

const Read = () => {
    return <div>
    <h1>Read</h1>
    
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Product Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Car</td>
            <td>Lorem Ipsum</td>
            <td>asdf asdf asdf</td>
        </tr>
        <tr>
            <td>2</td>
            <td>House</td>
            <td>Thornton</td>
            <td>Big and best</td>
        </tr>
        <tr>
            <td>2</td>
            <td>House</td>
            <td>Thornton</td>
            <td>Big and best</td>
        </tr>
        <tr>
            <td>2</td>
            <td>House</td>
            <td>Thornton</td>
            <td>Big and best</td>
        </tr>
        <tr>
            <td>2</td>
            <td>House</td>
            <td>Thornton</td>
            <td>Big and best</td>
        </tr>
    </tbody>
  </Table>
    </div>;
  };
  
  export default Read;