export default async function ({ $auth, route, redirect }) {
  if (
    $auth.loggedIn &&
    (route.path === '/login' || route.path === '/register')
  ) {
    // if logged in and on page login or register, redirect to home
    redirect('/')
  } else {
    // go through
  }
}
