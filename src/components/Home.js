import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Home() {
  let history = useNavigate();

  const [filterValue, setFilterValue] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(Employees);

  const handleEdit = (id, product, price) => {
    localStorage.setItem('Product', product);
    localStorage.setItem('Price', price);
    localStorage.setItem('Id', id);
  };

  const handleDelete = (id) => {
    var index = Employees.findIndex((employee) => employee.id === id);

    if (index !== -1) {
      Employees.splice(index, 1);
      setFilteredEmployees(Employees);
    }

    history('/');
  };

  const handleFilter = (event) => {
    const { value } = event.target;
    setFilterValue(value);

    const filteredData = Employees.filter((employee) =>
      employee.Product.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredEmployees(filteredData);
  };

  return (
    <Fragment>
      <div style={{ margin: '10rem' }}>
        <div className="mb-3">
          <label htmlFor="filterInput" className="form-label">
            Filter by Product's name:
          </label>
          <input
            type="text"
            id="filterInput"
            className="form-control"
            value={filterValue}
            onChange={handleFilter}
          />
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Product's name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((item) => (
                <tr key={item.id}>
                  <td>{item.Product}</td>
                  <td>{item.Price}</td>
                  <td>
                    <Link to="/edit">
                      <Button
                        onClick={() =>
                          handleEdit(item.id, item.Product, item.Price)
                        }
                      >
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </Button>
                    </Link>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
        <div className="d-flex justify-content-end">
          <Link to="/create">
            <Button variant="primary" size="lg">
              Create
            </Button>
          </Link>
        </div>
        <br></br>
        {/* Bảng survey form */}
      
      </div>
    </Fragment>
  );
}

export default Home;