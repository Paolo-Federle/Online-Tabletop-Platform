import UserForm from './UserForm'
import { Link } from 'react-router-dom'
import '../../../CSS/LoginPage.css'
const apiUrl = process.env.REACT_APP_API_URL

const RegisterPage = ({ }) => {
  const handleRegister = async ({ username, password }) => {
    fetch(`${apiUrl}/user/register/`, {
      method: "POST",
      headers: { "Content-type": "application/JSON" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className='center gradient-background gradient-register'>
      <div className='white-space'>
        <h1>Register</h1>
        <UserForm handleSubmit={handleRegister} />
        <br />
        <Link to='/login'>
          Do you already have an account? Login
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage