

import { AppBar, Toolbar, Box, InputBase, styled } from '@mui/material';
import { Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined, 
    AppsOutlined, AccountCircleOutlined, Search } from '@mui/icons-material'

import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)`
    background: #0E0B16;
    box-shadow: none;
`;

const SearchWrapper = styled(Box)`
background: #FFFF;
margin-left: 80px;
border-radius: 8px;
min-width: 500px;
max-width: 720px;
height: 48px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;

@media (max-width: 768px) {
    margin-left: 20px;
    min-width: auto;
  }

  & > div {
    width: 80%;
  }
`

const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`

const Header = ({ toggleDrawer }) => {

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="#E7DFDD" onClick={toggleDrawer} />
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
                <SearchWrapper>
                    <Search color="action" />
                    <InputBase />
                    <Tune  color="action"/>
                </SearchWrapper>

                <OptionsWrapper>
                    <HelpOutlineOutlined color="#E7DFDD" />
                    <SettingsOutlined color="#E7DFDD" />
                    <AppsOutlined color="#E7DFDD" />
                    <AccountCircleOutlined color="#E7DFDD" />
               </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;