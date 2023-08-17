import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
// eslint-disable-next-line
const MenuDrawer = ({ open, onClick, mode }) => {
    const drawerWidth = "100%";
    return (
        <Drawer anchor="right" open={open} PaperProps={{ style: { width: drawerWidth, background: mode === 'dark' ? '#121120' : '#FFFFFF' } }}>
            <Box onClick={onClick} >
                <List>
                    <ListItem>
                        <Typography color="text.1000">Hello</Typography>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default MenuDrawer;