import { Carousel } from "react-responsive-carousel";
import { GalleryPictures } from "@/common/utils";
import "./Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
  return (
    <section className="card">
      <div className="card__content card__gallery">
        <Carousel
          emulateTouch
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          className="carousel"
          onSwipeMove={(e) => {
            e.stopPropagation();
          }}
          autoPlay={true}
          infiniteLoop={true}
        >
          {GalleryPictures.map((picture, i) => (
            <div
              style={{
                backgroundImage: "url(" + picture.url + ")",
              }}
              title={picture.title}
              aria-label={picture.title}
              className="carousel__image"
              role="img"
              key={picture.title + i}
            >
              <span>{picture.title}</span>
            </div>
          ))}
        </Carousel>
        <p className="card__gallery--text">
          Here are a couple of my photos way back from 2016. While Im not making a living on this anymore, I still consider myself pretty good at it.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
