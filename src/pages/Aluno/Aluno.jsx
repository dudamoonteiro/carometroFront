
import './Aluno.css';
import BasicExample from '../../Componentes/Navbar';

function Aluno() {
  return (
   <div className='pai-aluno'>
    <BasicExample></BasicExample>
    <div className="infaluno">
    <div className="caixa-aluno">
      <img className="aluna" src="https://cdn-icons-png.flaticon.com/512/921/921053.png" alt=""  width="300px" />
    </div>
    <div className="nome">
      <h1>MARINA GOMES RODRIGUES</h1> <br />
      <h5 className="NM">Nome da mãe: Cíntia</h5>
      <h5 className="NP">Nome do pai: Roberto</h5>
      <h5 className="TM">Telefone da mãe: (14) 998456789</h5>
      <h5 className="TM">Telefone do pai: (14) 998123456</h5>

    </div>
    </div>
    <div className="ocorrencias">
    <input className="OC" type="text" placeholder="Ocorrências:" />
    </div>
   </div>
  );
}

export default Aluno;