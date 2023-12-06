import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    {/* Header */}
    <Header />

    {/* Main Content */}
    <RouterProvider router={router} />

    {/* Footer */}
    <footer></footer>

  </React.StrictMode>,
)
