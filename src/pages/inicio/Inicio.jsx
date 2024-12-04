import s from './inicio.module.scss';
import comunidade from '../../assets/comunidade.png';
import usuarioLeitor from '../../assets/usuarioLeitor.png';
import juntos from '../../assets/juntos.png';
import balanca from '../../assets/balanca.png';

export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.porqueDevoDoar}>
        <h2>Por que devo doar?</h2>

        <div className={s.containerCards}>
          <section>
            <img
              src={comunidade}
              alt="imagem ilustrativa de inclusao inclusão para todos"
            />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </section>

          <section>
            <img
              src={usuarioLeitor}
              alt="imagem ilustrativa de usuario lendo"
            />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>

          <section>
            <img src={juntos} alt="imagem ilustrativa de todos juntos" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </section>

          <section>
            <img src={balanca} alt="imagem ilustrativa de uma balança" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
