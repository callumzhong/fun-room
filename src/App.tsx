import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import RoomPage from './pages/RoomPage'
import ErrorPage from './pages/ErrorPage'
import { QueryClient, QueryClientProvider } from 'react-query'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="room/:id" element={<RoomPage />} />
    </Route>
  )
)

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)

export default App
