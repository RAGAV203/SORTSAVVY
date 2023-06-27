import { List, ListItem, Box, styled } from '@mui/material';
import { SIDEBAR_CATDATA } from '../config/sidebarcat.config';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';

const Container = styled(Box)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
        & > a > li > svg {
            margin-right: 20px;
        }
    }
`


const SideBarCategorizes = () => {

    const { type } = useParams();

    return (
        <Container>
           <List>
            Custom Categorizes
           </List>
            <List>
                {
                    SIDEBAR_CATDATA.map(data => (
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={ type === data.name.toLowerCase() ? {
                                backgroundColor: '#C5C1C0',
                                borderRadius: '0 16px 16px 0'
                            } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                        </NavLink>
                    ))
                }
            </List>
        </Container>
    )
}

export default SideBarCategorizes;