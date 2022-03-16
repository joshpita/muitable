import React from 'react'
import {
    DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport
} from '@mui/x-data-grid';
import ProgressBar from './ProgressBar';
import ProgressBarDemo from './ProgressBarDemo';

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton />
            <GridToolbarColumnsButton />
            <GridToolbarExport />
        </GridToolbarContainer>
    )
}
const rows = [
    { id: 77, col1: 'The Building Of Tom', col2: '$600', col3: '$00.00', col4: '000', col5: '000', col6: '2021-06-22' },
    { id: 13, col1: 'Test Project- 550 w', col2: '$600', col3: '$00.00', col4: '000', col5: '000', col6: '2021-02-02' },
    { id: 4, col1: '450 Lincoln Ave', col2: '$600', col3: '$00.00', col4: '000', col5: '000', col6: '2021-08-12' },
];

const divStyle = {
    color: '#40C4FF',
}

// style={divStyle}

const columns = [
    {
        field: 'id',
        headerName: 'Project #',
        width: 100,
    },
    {
        field: 'col1',
        headerName: 'Name & Client',
        width: 148,
        editable: false,
    },
    {
        field: 'col2',
        headerName: 'PAID',
        width: 110,
        editable: false,
        renderCell: (params) => (
            <>
                {/* <ProgressBar></ProgressBar> */}
                <ProgressBarDemo></ProgressBarDemo>
                <h6>{params.row.col3}</h6>
            </>
        ),
    },
    {
        field: 'col3',
        headerName: 'Balance',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'col4',
        headerName: 'TIX',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'col5',
        headerName: 'COs',
        type: 'number',
        width: 160,
        editable: false,
    },
    {
        field: 'col6',
        headerName: 'Start',
        width: 180,
        editable: false,
    },
];

export const MTable = () => {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: CustomToolbar }}
        />
    );
}