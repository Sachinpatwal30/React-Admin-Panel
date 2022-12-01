import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link} from "react-router-dom"
import { useState } from "react";

export default function UserList() {

    const [data, setData]= useState(userRows)

    function handleDelete(id){

        console.log("id is " + id);

        setData(  data.filter((item)=> item.id!==id)  )

        console.log("inside delete function");


    }





    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username', headerName: 'User name', width: 170, renderCell: (params) => {

                return (<div className="userListUser">

                    <img src={params.row.avatar} alt="" className="userListImg" />
                    {params.row.username}
                </div>)

            }
        },
        { field: 'email', headerName: 'User Email', width: 270 },
        { field: 'status', headerName: 'Status', width: 120, },
        { field: 'transaction', headerName: 'Transaction', width: 160, },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{

            return (<>

            <Link to={"/user/" + params.row.id }    >
            <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutline className="userListDelete" onClick={()=>{handleDelete(params.row.id)}} />
            </>);

        } }
        
    ];

    return (
        <div className='userList'>

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
