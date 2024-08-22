import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>  {/* Ensures consistent styling across the app */}
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
