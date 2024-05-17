import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import { GalleryPictures } from "@/common/utils";
import "./Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Gallery = memo(() => {
  return (
    <section className="card">
      <div className="card__content card__gallery">
        <Carousel
          emulateTouch
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          className="carousel-gallery"
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
              className="carousel-gallery__image"
              key={picture.title + i}
            >
              <span>{picture.title}</span>
            </div>
          ))}
        </Carousel>
        <p className="card__gallery--text">
          Here are a couple of my photos way back from <b>2016</b>. While Im not making money from taking pictures anymore, I still enjoy it very much.
        </p>
      </div>
    </section>
  );
});

export default Gallery;
