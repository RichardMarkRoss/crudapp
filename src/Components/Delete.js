import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { fetchProducts, deleteProduct } from '../Redux/actions';

const Delete = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the component mounts
  }, [dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId)); // Dispatch the deleteProduct action
  };

  return (
    <div>
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
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>X</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Delete;
