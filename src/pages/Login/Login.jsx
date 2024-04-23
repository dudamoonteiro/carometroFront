
import './Login.css';
import { Link } from 'react-router-dom';
import BasicExample from '../../Componentes/Navbar';

function Login() {
  return (

    <div className='pai-login'>
      <BasicExample></BasicExample>
      <div className='caixa'>
        <form action="" className='formLogin'>
          <div className='Login'>
            <h1>LOGIN</h1>
            <div className='formulario'>
              <label htmlFor="">Usuário:</label>
              <input type="text" placeholder='Usuário:' />
              <br />
              <label htmlFor="">Senha:</label>
              <input type="password" placeholder='Senha:' />

              <div className='naoCadastro'><Link className="cadastro-style" to="/cadastro">Não tem um cadastro? Cadastra-se agora</Link></div><br />
              <div className='divButtonEntrar'>
                <Link button className='buttonEntrar' to="/PaginaInicial">Entrar</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


  );

}

export default Login;