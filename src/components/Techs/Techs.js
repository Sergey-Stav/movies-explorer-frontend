import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="techs__heading section__heading">Технологии</h2>
      <div className="techs__description">
        <h3 className="techs__description-heading">7 технологий</h3>
        <p className="techs__description-about">
          На курсе веб&#8209;разработки мы освоили технологии, которые применили
          в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;