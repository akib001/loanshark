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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', height: '30vh', justifyContent: 'center', alignItems:'center'}}>
                    <Typography variant={'h4'} sx={{color: '#212121'}}>Stake Coin:</Typography>
                    <FormControl variant="standard" sx={{ width: '12ch' }}>
                        <Input
                            id="stake-coin"
                            value={'89'}
                            sx={{fontSize: '24px', '& .css-1pnmrwp-MuiTypography-root ': {
                                    color: '#212121',
                                    fontWeight: '550'
                                } }}
                            // onChange={handleChange('weight')}
                            endAdornment={<InputAdornment position="end">USDT</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'stake_coin',
                            }}
                        />
                    </FormControl>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Invest
                        </Button>
                    </Stack>
                <Stack direction="row" spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant={'h4'} sx={{color: '#212121'}}>Reward:</Typography>
                    <Typography variant={'h5'} sx={{color: '#212121', textAlign: 'center'}}>55</Typography>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Withdraw
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default BecomeALenderPage;