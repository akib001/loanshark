import React from 'react';
import {Box, Stack, Typography, Grid, Button, Container} from "@mui/material";
import DashboardTile from "../components/layouts/DashboardTile";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendIcon from '@mui/icons-material/Send';

const BecomeALenderPage = () => {
    return (
        <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <DashboardTile title={'Stacking Balance'} value={1245}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <DashboardTile title={'Wallet Balance'} value={12452345}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <DashboardTile title={'Reward Balance'} value={0}/>
                    </Grid>
                </Grid>
                    <Stack direction="row" spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography>Stake Coin:</Typography>
                    <FormControl variant="standard" sx={{ width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            value={'89'}
                            // onChange={handleChange('weight')}
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                    </Stack>
                <Stack direction="row" spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography>Reward:</Typography>
                    <TextField
                        id="standard-helperText"
                        label=""
                        defaultValue="100"
                        helperText=""
                        variant="standard"
                    />
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Withdraw
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default BecomeALenderPage;