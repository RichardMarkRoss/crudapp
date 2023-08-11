import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Update = () => {
    return <div>
    <h1>Update</h1>
    
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Prduct Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Product Type</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Home</option>
        <option>Garden</option>
        <option>Kitchen</option>
        <option>Bathroom</option>
        <option>Other</option>
      </Form.Select>
    </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Product Description</Form.Label>
      <Form.Control placeholder="Lorem Ipsum" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    
    </div>;
  };
  
  export default Update;