import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchProducts } from '../Redux/actions';

const Read = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Read</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Read;
