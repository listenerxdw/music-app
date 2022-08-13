// named mutations because it mutates the db
import { MdEmail } from 'react-icons/md';
import fetcher from './fetcher'

export const auth = (
  mode: 'signin' | 'signup',
  body: {firstName: string, lastName: string, email: string; password: string }
) => {
  if (mode === 'signin') {
    return fetcher(`/${mode}`, { email: body.email, password: body.password })
  } else {
    return fetcher(`/${mode}`, body)
  }
}
