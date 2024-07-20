import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { SidebarProvider } from './Context/SidebarContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
    <SidebarProvider>   
      <App />
    </SidebarProvider>
    </ThemeProvider>
)
