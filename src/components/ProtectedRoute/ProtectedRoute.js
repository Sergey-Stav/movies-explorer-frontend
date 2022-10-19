import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {
        () => (props.isLoggedIn === true) ? <Component {...props} /> : <Redirect to='/' />
      }
    </Route>
  )
}