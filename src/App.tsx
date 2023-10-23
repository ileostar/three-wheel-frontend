import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import routes from '~react-pages'

export default function App() {
  return (
    <main className="Index flex justify-between items-center flex-col font-sans w-screen h-screen text-center text-gray-700 dark:text-gray-200 box-border">
        <Router>
          <Routes />
        </Router>
        <Footer />
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
