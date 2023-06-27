
import { Drawer, styled } from "@mui/material";

import SideBarContent from "./SideBarContent";
import SideBarCategorizes from "./SideBarcategorizes";

const StyledDrawer = styled(Drawer)`
    margin-top: 54px;
`

const SideBar = ({ toggleDrawer, openDrawer }) => {

    return (
        <StyledDrawer
            anchor='left'
            open={openDrawer}
            onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': { 
                    width: 250,
                    borderRight: 'none',
                    background: '#e8eaeb',
                    marginTop: '64px',
                    height: '100%',
                    
                },
            }}
          >
            <SideBarContent />
            <SideBarCategorizes />
        </StyledDrawer>
    )
}

export default SideBar;