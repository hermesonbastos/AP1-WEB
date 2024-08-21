import './App.css';
import Questao01A from './questoes/Questao01';
import Questao02 from './questoes/Questao02';
import Questao03 from './questoes/Questao03';
import Questao04 from './questoes/Questao04';

function App() {
  return (
    <div>
      <h2>Questão 01</h2>
      <Questao01A />
      <h2>Questão 02</h2>
      <Questao02 />
      <h2>Questão 03</h2>
      <Questao03 />
      <h2>Questão 04</h2>
      <Questao04 />
    </div>
  );
}

export default App;
