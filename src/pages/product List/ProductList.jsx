import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../dummyData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

export default function ProductList() {

 const [data,setData]=useState(productRows);


 const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'product', headerName: 'Product', width: 170, renderCell: (params) => {

            return (<div className="productListItem">

                <img src={params.row.img} alt="" className="productListImg" />
                {params.row.name}
            </div>)

        }
    },
    { field: 'stock', headerName: 'Stock', width: 270 },
    { field: 'status', headerName: 'Status', width: 120, },
    { field: 'price', headerName: 'Price', width: 160, },
    { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{

        return (<>

        <Link to={"/product/" + params.row.id }    >
        <button className="productListEdit">Edit</button>
        </Link>

        <DeleteOutline className="productListDelete" onClick={()=>{handleDelete(params.row.id)}} />
        </>);

    } }
    
];





    return (
        <div className="productList">





            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick

            />



        </div>
    )
}
