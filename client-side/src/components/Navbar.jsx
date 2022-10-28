import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {Container} from "@mui/system";
import CustomButton from "./CustomButton";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from '../media/logo.png'


const pages = [
    {
        menuTitle: 'Home',
        link: '/home',
        icon: <HomeIcon/>
    }, {
        menuTitle: 'Analytics',
        link: '/analytics',
        icon: <FeaturedPlayListIcon/>
    },
    {
        menuTitle: 'Features',
        link: '/features',
        icon: <MiscellaneousServicesIcon/>
    },
    {
        menuTitle: 'Services',
        link: '/services',
        icon: <ListAltIcon/>
    },

    {
        menuTitle: 'Contact',
        link: '/contact',
        icon: <ContactsIcon/>
    },
];

export const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });
    const navigate = useNavigate();

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.type === "Tab" || event.type === "Shift")
        ) {
            return;
        }

        setMobileMenu({...mobileMenu, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{width: anchor === "top" || anchor === "bottom" ? "auto" : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                {pages.map((item, index) =>
                    (<ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(item.link);
                            // setAnchorElNav(null);
                        }}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.menuTitle}/>
                        </ListItemButton>
                    </ListItem>)
                )}
            </List>
        </Box>
    );

    const NavLink = styled(Typography)(({theme}) => ({
        fontSize: "14px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        },
    }));

    const NavbarLinksBox = styled(Box)(({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({theme}) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));

    const NavbarContainer = styled(Container)(({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled("img")(({theme}) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    return (
        <NavbarContainer>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <CustomMenuIcon onClick={toggleDrawer("left", true)}/>
                    <Drawer
                        anchor="left"
                        open={mobileMenu["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                    <NavbarLogo src={logo} alt="logo"/>
                </Box>

                <NavbarLinksBox>
                    {pages?.map((item, index) => (
                        <NavLink key={index} variant="body2" onClick={() => {
                            navigate(item.link);
                        }}>{item.menuTitle}</NavLink>
                    ))}
                </NavbarLinksBox>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <NavLink variant="body2">Sign Up</NavLink>
                <CustomButton
                    backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="Register"
                />
            </Box>
        </NavbarContainer>
    );
};

export default Navbar;
