import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../Redux/actions';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Create = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      name,
      description,
      category,
      price: parseFloat(price),
    };

    dispatch(createProduct(productData));
    setName('');
    setDescription('');
    setCategory('');
    setPrice('');
  };

  return (
    <div>
      <h1>Add</h1>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Product Type</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option>Home</option>
              <option>Garden</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            placeholder="Lorem Ipsum"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;