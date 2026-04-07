import fotoPerfil from './fotoPerfil.jpeg'
import './App.css'
function App() {
  return (
    <div>
      <header>
      <h1>Mariana Medeiros Colli dos Santos</h1>
      <img src={fotoPerfil}></img>
      <h2>Mariana Medeiros</h2>
      </header>

      <main>
        <section>
          <h1>Dados para contato</h1>
          <p>Mariana Medeiros</p>
          <p>44 99860-9427</p>
          <p>E-mail: mary.medeiros.colli@gmail.com</p>
          <p>Linkedin: Mariana Medeiros Colli dos Santos</p>
          <p>GitHub: mdrscolli</p>
        </section>

        <section>
          <h1>Formação</h1>

          <div>
          <article>
          <h2>Cursando Ensino Médio Profissionalizante em Análise e Desenvolvimento de Sistemas</h2>
          <p>Instituição: Colégio Estadual Santa Maria Goretti</p>
          <p>Ano de conclusão: 2027</p>
          </article>

          <article>
          <h2>Comunicação Escrita</h2>
          <p>Instituição: Fundação Bradesco</p>
          <p>Ano de conclusão: 2026</p>
          </article>

          <article>
          <h2>Atendimento ao Público</h2>
          <p>Instituição: Fundação Bradesco</p>
          <p>Ano de conclusão: 2026</p>
          </article>
         
          <h1>Experiência Profissional</h1>

         <article>
          <h2>Empresa: Vogue </h2>
          <p>Cargo: Editora chefe</p>
          <p>período: 2026</p>
          </article>
        </div> 

        </section>

      </main>

      <footer>
        <div>Desenvolvido por Mariana Medeiros Colli</div>
      </footer>
    </div> 
  );
}

export default App;
