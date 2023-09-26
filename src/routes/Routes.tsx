import { useRoutes } from 'react-router-dom'
import AboutPage from '@components/pages/AboutPage'
import HomePage from '@components/pages/HomePage'
import MainLayout from '~/components/layout/MainLayout'

const Routes = () => {
  const elementRoutes = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'about',
      element: <AboutPage />
    }
  ])
  return <MainLayout>{elementRoutes}</MainLayout>
}
export default Routes
