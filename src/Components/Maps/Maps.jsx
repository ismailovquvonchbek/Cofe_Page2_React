import "./Maps.scss"
import MapsImg from "../Image/Shape.png"

function Maps(params) {
    return (
        <>
            <section className="maps">
                <div className="container">
                    <div className="maps__info">
                        <h3 className="maps__heading">Why choose us?</h3>
                        <p className="maps__text">
                            A large part of our role is choosing which particular coffees will be featured
                            in our range. This means working closely with the best coffee growers to give
                            you a more impactful experience on every level.
                        </p>
                    </div>

                    <ul className="maps__list">
                        <li className="maps__item">
                            <img className="maps__img" src={MapsImg} alt="img" />
                            <h4 className="maps__head">
                                Best quality
                            </h4>
                            <p className="maps__p">
                                Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                            </p>
                        </li>

                        <li className="maps__item">
                            <img className="maps__img" src={MapsImg} alt="img" />
                            <h4 className="maps__head">
                                Best quality
                            </h4>
                            <p className="maps__p">
                                Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                            </p>
                        </li>

                        <li className="maps__item">
                            <img className="maps__img" src={MapsImg} alt="img" />
                            <h4 className="maps__head">
                                Best quality
                            </h4>
                            <p className="maps__p">
                                Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Maps;