import {Box, Button, Stack, styled, Typography} from "@mui/material";
import {Container} from "@mui/system";
import React from "react";
import hero from '../media/hero_illustration.png'

import CustomButton from "./CustomButton";

const Hero = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({theme}) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));

    const becomeALenderHandler = () => {
        window.location.href = 'http://localhost:3000/'
    }

    return (
        <Box sx={{backgroundColor: "#E6F0FF", minHeight: "80vh"}}>
            <Container>
                <CustomBox>
                    <Box sx={{flex: "1"}}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 0,
                                mb: 4,
                            }}
                        >
                            Welcome to Loan Shark
                        </Typography>
                        <Title variant="h1">
                            Bringing Blockchain Into Microfinance Space
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{fontSize: "18px", color: "#5A6473", my: 4}}
                        >
                            Be the first to get the best real estate deals before they hit the
                            mass market! Hot foreclosure deals with one simple search!
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={becomeALenderHandler} sx={{
                                fontSize: "14px",
                                padding: "0.5rem 1.25rem",
                                borderRadius: "7px",
                                fontWeight: "700",
                                textTransform: "none",
                                border: "2px solid transparent",
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    color: "#222",
                                    borderColor: "#222",
                                }
                            }}>Become a Lender</Button>
                            <CustomButton
                                backgroundColor="#222"
                                color="#fff"
                                buttonText="Become a Borrower"
                                heroBtn={true}
                            />
                        </Stack>
                    </Box>

                    <Box sx={{flex: "1.25"}}>
                        <img
                            src={hero}
                            alt="heroImg"
                            style={{maxWidth: "100%", marginBottom: "2rem"}}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default Hero;
