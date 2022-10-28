import React from 'react';
import {Box, Stack, Typography, Grid, Card, Container} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import DashboardTile from "../components/layouts/DashboardTile";
import {ethers} from 'ethers'
import {useState} from 'react'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Rabib', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const AnalyticsPage = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            window.ethereum.request({ method: 'eth_requestAccounts'})
                .then(result => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
                    getAccountBalance(result[0]);
                })
                .catch(error => {
                    setErrorMessage(error.message);

                });

        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    }

    const getAccountBalance = (account) => {
        window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }


    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <DashboardTile title={'Total Loan Origination Value'} value={1245}/>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <DashboardTile title={'Total Loan Origination Value'} value={1245}/>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <DashboardTile title={'Total Loan Origination Value'} value={1245}/>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <DashboardTile title={'Total Loan Origination Value'} value={1245}/>
                    </Grid>
                </Grid>
                <div style={{ height: 400, width: '100%', backgroundColor: "#fff", marginTop: '40px' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </Container>
            <div>
                <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
                <button onClick={connectWalletHandler}>{connButtonText}</button>
                <div>
                    <h3>Address: {defaultAccount}</h3>
                </div>
                <div>
                    <h3>Balance: {userBalance}</h3>
                </div>
                {errorMessage}
            </div>
        </Box>
    );
};

export default AnalyticsPage;