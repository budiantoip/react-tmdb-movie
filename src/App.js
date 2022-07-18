import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MovieList from './containers/MovieList';
import theme from './themes/theme';
import About from './containers/About';
import Indonesian from "./containers/Indonesian";
import Pricing from "./containers/Pricing";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='about' element={<About />} />
          <Route path='indonesian' element={<Indonesian />} />
          <Route path='pricing' element={<Pricing />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
