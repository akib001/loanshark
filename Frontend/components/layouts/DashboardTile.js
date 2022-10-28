import React from 'react';
import {Card, Typography} from "@mui/material"


const DashboardTile = ({title, value}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #ebebeb',
                borderRadius: '3px',
                textAlign: 'center',
                p: '1rem',
            }}
        >
            <Typography variant="overline" >
                {title}:
            </Typography>
            <Typography variant="h5" sx={{color: '#2962ff'}}>
                {value}
            </Typography>
        </Card>
    );
};

export default DashboardTile;