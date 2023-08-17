import { Box, Container, Tooltip } from "@mui/material";
import {
    Sun, DarkMenu, Moon, DarkLogo, LightLogo, LightMenu
} from "../assets/Icons";
import MenuDrawer from "./MenuDrawer";
import { useState } from "react";
// eslint-disable-next-line
export default function NavBar({ handleModeChange, mode }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    };
    return (
        <Container>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pt: "16px", pb: "16px", height: "64px" }}>
                {mode === "light" ? <LightLogo /> : <DarkLogo />}
                <Box sx={{ display: "flex", gap: "8px" }}>
                    <Tooltip title={mode === "light" ? "Turn off the light" : "Turn on the light"}>
                        <Box sx={{ height: "40px", width: "40px", borderRadius: "8px", border: mode === "light" ? "1px solid rgba(17, 24, 39, 0.32)" : "1px solid rgba(255, 255, 255, 0.32)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={handleModeChange}>
                            {mode === "light" ? <Moon /> : <Sun />}
                        </Box>
                    </Tooltip>
                    <Tooltip title="Menu">
                        <Box sx={{ height: "40px", width: "40px", borderRadius: "8px", background: mode === "light" ? "rgba(17, 24, 39, 0.08)" : "rgba(255, 255, 255, 0.08)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={toggleDrawer}>
                            {mode === "light" ? <LightMenu /> : <DarkMenu />}
                        </Box>
                    </Tooltip>
                </Box>
            </Box>
            <MenuDrawer open={drawerOpen} onClick={toggleDrawer} mode={mode}/>
        </Container>
    )
}
