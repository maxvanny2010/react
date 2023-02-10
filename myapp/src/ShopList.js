import React, {useState} from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShopListAddItem from "./ShopListAddItem";
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ShopList() {
    const [items, setItems] = useState([]);
    const addItem = (item) => {
        setItems([item, ...items]);
    }
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6"> Shopping List </Typography>
                </Toolbar>
            </AppBar>
            <Stack alignItems="center">
                <ShopListAddItem addItem={addItem}/>
                <List>
                    {
                        items.map((item, index) =>
                            <ListItem key={index} divider>
                                <ListItemText
                                    primary={item.product}
                                    secondary={item.amount}/>
                            </ListItem>
                        )
                    }
                </List>
            </Stack>
        </Container>
    );
}

export default ShopList;