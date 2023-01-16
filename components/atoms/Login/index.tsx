import { Button } from '@mui/material'
import { Title, Wrapper, LoginTextField } from './stylle'

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Title>Login</Title>
      <LoginTextField label="Usuário" variant="filled" />
      <LoginTextField label="Senha" variant="filled" />
      <Button
        style={{ backgroundColor: '#111111' }}
        fullWidth
        variant="contained"
      >
        Entrar
      </Button>
    </Wrapper>
  )
}

export default Login
