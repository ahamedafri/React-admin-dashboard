import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable"
import { userRows } from "../../data";
import "./users.scss"
import { GridColDef,GridValueGetterParams } from "@mui/x-data-grid";
import Add from "../../components/add/Add";


const columns: GridColDef[] = [
  { field: 'id',
   headerName: 'ID', 
   width: 90 
  },
  {
   field:"avatar",
   headerName:"Avatar",
   width:100,
   renderCell:(params)=>{
      return <img src={params.row.img || "/noavatar.png"} alt=""/>
   }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
 
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },     
  {
      field:"status",
      headerName:"Status",
      width:100,
      type:"boolean",
  },
    
];

 


const Users = () => {
  
  const[open,setOpen] = useState(false);
 
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <Add columns={columns} slug="user" setOpen={setOpen}/>}
    </div>
  )
}

export default Users