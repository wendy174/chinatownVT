import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'; 
import { ClerkProvider } from '@clerk/clerk-react'



// Clerk authen key
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

console.log(clerkKey)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkKey} >
      <App />
    </ClerkProvider >
  </StrictMode>,
)
