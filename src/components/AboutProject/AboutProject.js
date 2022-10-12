function AboutProject() {
  return (
    <section id="project" className="about-project">
      <h2 className="about-project__heading section__heading">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__description-column">
          <h3 className="about-project__description-heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description-column">
          <h3 className="about-project__description-heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__steps">
        <p className="about-project__steps-text about-project__steps-text_type_one-week">
          1 неделя
        </p>
        <p className="about-project__steps-text about-project__steps-text_type_four-week">
          4 недели
        </p>
        <p className="about-project__description-info about-project__description-info-backend">
          Back-end
        </p>
        <p className="about-project__description-info about-project__description-info-frontend">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
