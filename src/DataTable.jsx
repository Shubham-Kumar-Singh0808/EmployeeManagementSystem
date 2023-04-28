import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function DataTable() {
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [rowdata, setRowdata] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const baseURL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios.get(baseURL).then(
            (response) => {
                setRows(response.data)
            }
        )
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        if (rowdata) {
            setRows([rowdata]);
        } else {
            axios.get(baseURL).then((response) => {
                setRows(response.data);
                console.log(response.data);
            });
        }
    }, [rowdata]);

    return (
        <>
            {rows ? (<Card sx={{ minWidth: 900, m: 4 }}>
                <Box component="span"
                    m={1}
                    pr={1}
                    pt={4}
                    display="flex"
                    justifyContent="end">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={rows}
                        onChange={(e, v) => setRowdata(v)}
                        getOptionLabel={(rows) => rows.name || ""}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                    />
                </Box>
                <CardContent>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>

                                        <TableCell align="center">ID</TableCell>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">UserName</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Website</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                    <TableCell align="center">
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.username}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.email}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.website}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[2, 5, 10]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </CardContent>
            </Card>
            ) : (
               <h2>Loading...</h2> 
            )}


        </>
    );
}
