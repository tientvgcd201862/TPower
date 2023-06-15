import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'



function Add(){

    const[product, setProduct] = useState('');
    const[price, setPrice] = useState('');

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a= product,
        b = price;

        Employees.push({id: uniqueId, Product : a, Price : b});
        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formProduct">
                <Form.Control type="text" placeholder="Enter Product" required onChange={(e) => setProduct(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control type="text" placeholder="Enter Price" required onChange={(e) => setPrice(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
}

export default Add;