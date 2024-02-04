import "./Our.scss"
import OurImages from "../Image/OurImgages.png"

function Our() {
    return (
        <>
            <section className="our">
                <div className="container">

                    <div className="our__bg"></div>
                     <ul className="our__list">
                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">Gran Espresso</b>
                            <p className="our__p">
                                Light and flavorful blend with cocoa and black pepper for an intense experience.
                            </p>
                        </li>

                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">Planalto</b>
                            <p className="our__p">
                                Light and flavorful blend with cocoa and black pepper for an intense experience.
                            </p>
                        </li>

                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">Picollo</b>
                            <p className="our__p">
                                Light and flavorful blend with cocoa and black pepper for an intense experience.
                            </p>
                        </li>

                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">Danche</b>
                            <p className="our__p">
                                Light and flavorful blend with cocoa and black pepper for an intense experience.
                            </p>
                        </li>
                     </ul>
                </div>
            </section>
        </>
    )
}

export default Our;