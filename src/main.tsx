import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './features/store'
import './index.css'
import App from './App'

const basePath = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basePath}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
