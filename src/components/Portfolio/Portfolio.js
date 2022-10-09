function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__heading">Портфолио</h4>
            <ul className="portfolio__links">
                <li className="portfolio__links-item">
                    <a href="https://sergey-stav.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link opacity-on-hover">Статичный сайт</a>
                </li>
                <li className="portfolio__links-item">
                    <a href="https://sergey-stav.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link opacity-on-hover">Адаптивный сайт</a>
                </li>
                <li className="portfolio__links-item">
                    <a href="https://mestos.students.nomoredomains.sbs/" target="_blank" rel="noreferrer" className="portfolio__link opacity-on-hover">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;