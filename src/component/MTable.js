import React from 'react'
import {
    DataGrid, GridRowsProp, GridColDef, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridSelectionModel,
} from '@mui/x-data-grid';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton />
            <GridToolbarColumnsButton />
            <GridToolbarExport />
        </GridToolbarContainer>
    )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 3,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const rows = [
    { id: 1, col1: '77', col2: 'The Building Of Tom', col3: '$600', col4: '$00.00', col5: '000', col6: '000', col7: '2021-06-22' },
    { id: 2, col1: '13', col2: 'Test Project- 550 w', col3: '$600', col4: '$00.00', col5: '000', col6: '000', col7: '2021-02-02' },
    { id: 3, col1: '4', col2: '450 Lincoln Ave', col3: '$600', col4: '$00.00', col5: '000', col6: '000', col7: '2021-08-12' },
];

const columns = [
    { field: 'id', headerName: 'Project #', width: 100 },
    {
        field: 'col2',
        headerName: 'Name & Client',
        width: 148,
        editable: false,
    },
    {
        field: 'col3',
        headerName: 'PAID',
        width: 150,
        editable: false,
    },
    {
        field: 'col4',
        headerName: 'Balance',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'col5',
        headerName: 'TIX',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'col6',
        headerName: 'COs',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'col7',
        headerName: 'Start',
    },
];

export const MTable = () => {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
                components={{ Toolbar: CustomToolbar }}
            />
        </div>
    );
}