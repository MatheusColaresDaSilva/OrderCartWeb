import React, { useState } from "react";
import { useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/ListProducts.css'
import ProductService from '../service/ProductService'

interface Product {
    id?: number;
    description: string;
  }
  
//   interface ListProduct {
//     products: Product[];
//   }

// const ListProducts: React.FC<ListProduct> = ({ products }) => {
const ListProducts: React.FC = () => {

  const[products , setProducts] = useState<Product[]>();

  useEffect(()=>{
    ProductService.findAllProducts()
    .then((response) => {
        setProducts(response.data.dados);
      }).catch(error => {
        alert(`Error: ${error.message}`);
      });
    }, []);

    return (
<       DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} className="data-table">
          <Column field="id" header="ID" style={{ width: '25%' }}></Column>
          <Column field="description" header="Description" style={{ width: '25%' }}></Column>
        </DataTable>
    )
}

export default ListProducts;