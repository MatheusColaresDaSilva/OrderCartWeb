import React, { useState } from "react";
import { useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/ListProducts.css'
import ProductService from '../service/ProductService'
import Loading from "./Loading";
import { Paginator } from "primereact/paginator";

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
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(()=> {
    setLoading(true);
    ProductService.findAllProducts(page, rows)
    .then((response) => {
        setProducts(response.data.dados.content);
        setTotalRecords(response.data.dados.totalElements);
      }).catch(error => {
        alert(`Error: ${error.message}`);
      }).finally(()=> {
        setLoading(false);
      })

    }, [page, rows]);

    const onPageChange = (event: any) => {
      setPage(event.page);
      console.log("nois")
      setRows(event.rows);
  };

    return (
       <> 
       { loading ? 
        <Loading/> :
        <>
          <DataTable loading={loading} value={products} paginator={false} rows={rows} className="data-table">
            <Column field="id" header="ID" style={{ width: '25%' }}></Column>
            <Column field="description" header="Description" style={{ width: '25%' }}></Column>
          </DataTable>
          <Paginator first={page * rows} rows={rows} totalRecords={totalRecords} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange}></Paginator>
          </>    
        }</>
    )
}

export default ListProducts;