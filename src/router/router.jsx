import { createBrowserRouter } from 'react-router-dom'
import Layout from '../RoutedApp/Layout'
import ErrorPage from '../RoutedApp/ErrorPage'
import LessonCard from '../RoutedApp/LessonCard'
import { getLessonData } from '../helpers/getLessonData'

const ROUTES = {
  mainPage: '/routing-by-pages-react/',
  lessonPage: 'routing-by-pages-react/lessons/:lesson',
}

export const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.lessonPage,
    element: <LessonCard />,
    loader: getLessonData,
    errorElement: <ErrorPage />,
  },
])
