import {createBrowserRouter} from 'react-router-dom';

import ListStudents from '../screens/listStudents';
import ErrorPage from '../screens/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListStudents />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
