import React, { useState } from "react";
import { useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/ListProducts.css'
import ProductService from '../service/ProductService'
import Loading from "./Loading";

interface Product {
    id?: number;
    description: string;
  }
  
//   interface ListProduct {
//     products: Product[];
//   }

// const ListProducts: React.FC<ListProduct> = ({ products }) => {
const ListProducts: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const[products , setProducts] = useState<Product[]>();

  useEffect(()=> {
    setLoading(true);
    ProductService.findAllProducts()
    .then((response) => {
        setProducts(response.data.dados);
      }).catch(error => {
        alert(`Error: ${error.message}`);
      }).finally(()=> {
        setLoading(false);
      })

    }, []);

    return (
       <> 
       { loading ? 
        <Loading/> :
        <DataTable loading={loading} value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} className="data-table">
          <Column field="id" header="ID" style={{ width: '25%' }}></Column>
          <Column field="description" header="Description" style={{ width: '25%' }}></Column>
        </DataTable>
        }</>
    )
}

export default ListProducts;