import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import App from './App.tsx'
import ThemeContextProvider from './components/ThemeContext/ThemeContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
      </ThemeContextProvider>
  </StrictMode>,
)
