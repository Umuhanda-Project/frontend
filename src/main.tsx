import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouteProvider from './routes/index.tsx'
import "./utils/i18n.ts"
import { LanguageProvider } from './context/LanguageContext.tsx'
import { ModalProvider } from './context/ModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
    <LanguageProvider>
    <RouteProvider/>
    </LanguageProvider>
    </ModalProvider>
  </StrictMode>,
)
