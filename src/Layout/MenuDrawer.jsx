import { Box, Drawer, Typography } from "@mui/material";
import { LightClose, DarkClose, LightLogo, DarkLogo } from "../assets/Icons";
import { menuItems } from "./MenuItems";
import { Fade } from "react-awesome-reveal";

// eslint-disable-next-line
const MenuDrawer = ({ open, onClick, mode }) => {
    const drawerWidth = "100%";
    return (
        <Drawer anchor="right" open={open} PaperProps={{ style: { width: drawerWidth, background: mode === 'dark' ? '#121120' : '#FFFFFF' } }}>
            <Box>
                <Box sx={{ p: "16px 40px", display: "flex", justifyContent: "flex-end", alignItems: "center", cursor: "pointer" }} onClick={onClick}>
                    {mode === "light" ? <LightClose /> : <DarkClose />}
                </Box>
                <Box sx={{ mt: "100px", display: "flex", justifyContent: "center" }}>
                    {mode === "light" ? <LightLogo /> : <DarkLogo />}
                </Box>
                <Box sx={{ mt: "80px", mb: "80px", display: "flex", flexDirection: "column", gap: "24px" }}>
                    <Fade top cascade duration="500">
                        {menuItems.map((data) => {
                            return (
                                <Typography color="text.1000" sx={{
                                    fontSize: "32px",
                                    fontWeight: 700, textAlign: "center"
                                }} key={data.id}>{data.title}</Typography>
                            )
                        })}
                    </Fade>
                </Box>
            </Box>
        </Drawer>
    );
};

export default MenuDrawer;