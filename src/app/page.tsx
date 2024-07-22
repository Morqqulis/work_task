import LoginHero from '@sections/Login/LoginHero'
import { LoginPageMeta } from '@settings/meta'
import { NextPage } from 'next'

export const metadata = LoginPageMeta

const Login: NextPage = () => {
  return (
    <main>
      <LoginHero />
    </main>
  )
}

export default Login
