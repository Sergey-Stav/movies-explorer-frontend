function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a
              href="https://praktikum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
              className="footer__link opacity-on-hover"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="footer__link opacity-on-hover"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
