import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>  {/* Ensures consistent styling across the app */}
      <Navbar/>
      <Home/>

    </ThemeProvider>
  );
}

export default App;
