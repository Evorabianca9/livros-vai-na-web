import protagonistaLivro from '../../assets/protagonistaLivro.png';
import s from './livrosDoados.module.scss';

export default function LivrosDoados() {
  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>

      <section className={s.containerCards}>
        <section>
          <img src={protagonistaLivro} alt="imagem do livro O protagonista" />
          <div>
            <p>O protagonista</p>
            <p>Sussane Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  );
}
