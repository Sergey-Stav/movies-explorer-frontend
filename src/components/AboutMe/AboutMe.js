import student__photo from "../../images/student_photo.jpg";

function AboutMe() {
  return (
    <section id="student" className="about-me">
      <h2 className="about-me__heading section__heading">Студент</h2>
      <div className="about-me__description">
        <div className="about-me__description-text">
          <h3 className="about-me__description-title">Сергей</h3>
          <p className="about-me__description-subtitle">
            Веб&#8209;разработчик, 44 года
          </p>
          <p className="about-me__description-paragraph">
            Я родился в г. Сергиев Посад Московской области, живу в г.
            Ставрополе. Закончил Ставропольский филиал РВИРВ в 2000 году. С 2005
            года работаю в компании ВымпелКом в эксплуатации мобильной сети.
            Начинаю свой путь в веб&#8209;разработке.
          </p>
          <a
            href="https://github.com/Sergey-Stav/"
            target="_blank"
            rel="noreferrer"
            className="about-me__description-link opacity-on-hover"
          >
            Github
          </a>
        </div>
        <img
          src={student__photo}
          alt="Сергей"
          className="about-me__description-photo"
        />
      </div>
    </section>
  );
}

export default AboutMe;
