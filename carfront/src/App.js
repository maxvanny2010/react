import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import CarList from "./component/Carlist";

function App() {
    return (
        <Container>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6"> CarShop </Typography>
                    </Toolbar>
                </AppBar>
                <CarList/>
            </div>
        </Container>
    );
}

export default App;