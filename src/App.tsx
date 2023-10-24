import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import Loading from './components/Loading'
import routes from '~react-pages'

export default function App() {
  return (
    <main className="Index flex justify-between items-center flex-col-reverse font-sans w-screen h-screen text-center text-gray-700 dark:text-gray-200 box-border">
      <Footer />
        <Router>
          <Routes />
        </Router>
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
