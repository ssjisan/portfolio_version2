import { BrowserRouter } from 'react-router-dom';
import MainRouter from './Components/MainRouter';
import Theme from './Theme/Theme';
import { useEffect, useState } from 'react';

function App() {
  const savedMode = localStorage.getItem('themeMode');
  const initialMode = savedMode || 'light';

  const [mode, setMode] = useState(initialMode);

  const handleModeChange = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#121120' : '#FFFFFF';
  }, [mode]);


  return (
    <Theme mode={mode}>
      <BrowserRouter>
        <MainRouter handleModeChange={handleModeChange} mode={mode} />
      </BrowserRouter>
    </Theme>
  )
}

export default App
