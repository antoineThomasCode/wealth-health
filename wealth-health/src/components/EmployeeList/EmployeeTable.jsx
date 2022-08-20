import '../../sass/components/EmployeeTable.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import employees from '../../dataMocked/employees';
import { useSelector } from "react-redux";




export default function EmployeeTable({pagination}) {
  const rows = useSelector((state) => state.employee)
  const columns = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 110,
      editable: false,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 120,
      editable: false,
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      width: 100,
      type: 'date',
      editable: false,
    },
    {
      field: 'department',
      headerName: 'Department',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
   },
    {
      field: 'dateOfBirth',
      headerName: 'Date of Birth',
      type: 'date',
      width: 110,
      editable: true,
    },
    {
      field: 'street',
      headerName: 'Street',
      type: 'string',
      width: 180,
      editable: true,
    },
    {
      field: 'city',
      headerName: 'City',
      type: 'string',
      width: 130,
      editable: true,
    },
    {
      field: 'state',
      headerName: 'State',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      type: 'number',
      width: 70,
      editable: true,
    }
  ];
  return (
    <Box sx={{ height: 525, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={parseInt(pagination)}
        rowsPerPages={parseInt(pagination)}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}