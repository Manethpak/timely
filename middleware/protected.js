export default async function ({ $auth, route, next }) {
  if (
    $auth.loggedIn &&
    (route.path === '/login' || route.path === '/register')
  ) {
    // if logged in and on page login or register, redirect to home
    next('/')
  } else {
    // go through
  }
}
