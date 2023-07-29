import { Container } from "react-bootstrap";

export default function Carousel({ images }) {
    return (
        <Container className="p-0">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    {images.map((image, index) => (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                            key={index}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner rounded ratio ratio-16x9">
                    {images.map((image, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            data-bs-interval={index === 0 ? "10000" : "2000"}
                            key={index}
                        >
                            <img src={image} className=" d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"></button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"></button>
            </div>
        </Container>
    );
}
