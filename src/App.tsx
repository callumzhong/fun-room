import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Room from './pages/Room'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="room" element={<Room />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export default App
