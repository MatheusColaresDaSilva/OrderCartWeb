import React, { useState } from "react";
import { useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/ListPeople.css'
import PersonService from '../service/PersonService'
import Loading from "./Loading";
import { Paginator } from "primereact/paginator";

interface Person {
    id?: number;
    name: string;
    sin: string;
    birthDate: Date;
  }

const ListPeople: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const[people , setPeople] = useState<Person[]>();
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(()=> {
    setLoading(true);
    PersonService.findAllPeople(page, rows)
    .then((response: any) => {
        setPeople(response.content);
        setTotalRecords(response.totalElements);
      }).catch((error: any) => {
        alert(`Error: ${error.message}`);
      }).finally(()=> {
        setLoading(false);
      })

    }, [page, rows]);

    const onPageChange = (event: any) => {
      setPage(event.page);
      setRows(event.rows);
  };

    return (
       <> 
       { loading ? 
        <Loading/> :
        <>
          <DataTable loading={loading} value={people} paginator={false} rows={rows} className="data-table">
            <Column field="id" header="ID" style={{ width: '25%' }}></Column>
            <Column field="name" header="Name" style={{ width: '25%' }}></Column>
            <Column field="sin" header="SIN" style={{ width: '25%' }}></Column>
            <Column field="birthDate" header="Brith Date" style={{ width: '25%' }}></Column>
          </DataTable>
          <Paginator first={page * rows} rows={rows} totalRecords={totalRecords} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange}></Paginator>
          </>    
        }</>
    )
}

export default ListPeople;