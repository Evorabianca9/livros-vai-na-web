import logoFacebook from '../../assets/logoFacebook.png';
import logoTwitter from '../../assets/logoTwitter.png';
import logoYoutube from '../../assets/logoYoutube.png';
import logoLinkedln from '../../assets/logoLinkedln.png';
import logoInstagram from '../../assets/logoInstagram.png';
import s from './footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>

        <nav>
          <a href="https://www.facebook.com/login/?locale=pt_BR">
            <img src={logoFacebook} alt="logotipo do facebook" />
          </a>
          <a href="https://x.com/?lang=pt-br">
            <img src={logoTwitter} alt="logotipo do twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={logoYoutube} alt="logotipo do youtube" />
          </a>
          <a href="https://br.linkedin.com/">
            <img src={logoLinkedln} alt="logotipo do linkedln" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={logoInstagram} alt="logotipo do instragram" />
          </a>
        </nav>
      </section>
      <section className={s.copyrigth}>
        <p> Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
