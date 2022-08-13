import AuthForm from '../components/authForm'

const Signin = () => {
  return <AuthForm mode="signin" />
}

// opt out the layout for signin/up page in app.tsx
Signin.authPage = true

export default Signin
