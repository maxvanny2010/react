import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";

function App() {
    return (
        <Container>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6"> CarShop </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    );
}

export default App;