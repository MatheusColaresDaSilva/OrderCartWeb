import React from "react";
import { Formik, Form, Field } from 'formik';
import ProductService from '../service/ProductService'
import '../styles/NewProduct.css';

type Values = {
    description: string;
}

const NewProduct: React.FC = () => {

    const createNewProduct = (value: Values) => {
        return ProductService.createNewProduct(value)
        .then((response) => {
            alert('New product added');
          }).catch(error => {
            alert(`Error: ${error.message}`);
          });
    
        ;
    }

    return (
        <div className="container">
            <h3>Create New Product</h3>
            <Formik
                    initialValues={{
                       description: '',
                    }}
                    onSubmit={(values: Values) => {
                        createNewProduct(values);
                    }}

                >{ formik => (
                    <Form>
                        <Field id="description" name="description" type="text" placeholder='Type the product name'/>

                        <button type="submit">Create</button>
                    </Form>
                    )}
            </Formik>
        </div>
    )
}

export default NewProduct;