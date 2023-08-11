import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { updateProduct } from '../Redux/actions'; // Import updateProduct action

const Update = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // For demonstration, let's assume you want to update the first product
    const firstProduct = products[0]; // You can replace this with the correct logic
    if (firstProduct) {
      setProductId(firstProduct.id);
      setName(firstProduct.name);
      setCategory(firstProduct.category);
      setDescription(firstProduct.description);
    }
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedProduct = {
      id: productId,
      name,
      category,
      description,
    };
    
    dispatch(updateProduct(productId, updatedProduct)); // Dispatch the updateProduct action
  };

  return (
    <div>
      <h1>Update</h1>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Product Type</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
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
          <Form.Control
            placeholder="Lorem Ipsum"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;
