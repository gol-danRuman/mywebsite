import React, { useState } from 'react';
import MaterialTable, { Column } from 'material-table';

export default function MaterialTableDemo(props ) {

//   const [addStatus, setAddStatus] = React.useState(false);

//   const toggleAddStatus  = () => {
//     setAddStatus(!addStatus);
//   }
//   const columns = props.columns;
//   const rows = props.rows;

//   const [editStatus, setEditStatus] = React.useState(false);

//   const toggleEditStatus  = () => {
//     setEditStatus(!editStatus);
//   }

//   const [rowData, setRowData] = React.useState();


//   const [state, setState] = React.useState({
//     columns: props.columns,
//     data: props.rows,
//   });

//   return (
//     <div>
     
//     <MaterialTable
//       title="Editable Example"
//       columns={state.columns}
//       data={state.data}
//       actions={[
//         {
//           icon: 'add',
//           tooltip: 'Add',
//           isFreeAction: true,
//           onClick: (event) => {
//             setAddStatus(true);
//           }
//         },
//         rowData => ({
//           icon: 'delete',
//           tooltip: 'Delete',
//           onClick: (event, rowData) =>{
            
//           },
//           disabled: false
//         }),
//         rowData => ({
//           icon: 'edit',
//           tooltip: 'Edit',
//           onClick: (event, rowData) => {
//             setRowData(rowData);
//             setEditStatus(true);

//           },
//           disabled: false
//         })
//       ]}
//       options={{
//         actionsColumnIndex: -1
//       }}
//     />
    

    
//     </div>
//   );

    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Adı", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
            {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
              },
              {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
              },
              {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
              },
              {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
              },
          ]}
          title="Demo Title"
        />
      </div>
    );
}