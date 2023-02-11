import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import Login from "./auth/Login";

function App() {
    return (
        <Container>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6"> CarShop </Typography>
                    </Toolbar>
                </AppBar>
                <Login/>
            </div>
        </Container>
    );
}

export default App;