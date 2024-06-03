import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import { Flickr, GalleryPictures, Instagram, Xcom } from "@/common/utils";
import "./Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SocialIcon from "@/common/SocialIcon/SocialIcon";

const Gallery = memo(() => {
  return (
    <div className="card__content card__gallery animate-render">
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
        Here are a couple of my photos way back from <b>2016</b>. While Im not
        making money from taking pictures anymore, I still enjoy it very much.
      </p>
      <div className="card__gallery--links">
        <span className="card__gallery--text">
          Find more of my photos on socials:
        </span>
        <SocialIcon
          name="Instagram"
          gradient={
            "linear-gradient(135deg, #405DE6 -20%, #E1306C 30%, #FCAF45 120%)"
          }
          Icon={Instagram}
          url={"https://www.instagram.com/wecreus/"}
        />
        <SocialIcon
          name="Flickr"
          gradient={"linear-gradient(135deg, #0066DD 0%, #FF0084 80%)"}
          Icon={Flickr}
          url={"https://www.flickr.com/photos/166330239@N03/"}
        />
        <SocialIcon
          name="X"
          gradient={"linear-gradient(135deg, #000 0%, #000 80%)"}
          Icon={Xcom}
          url={"https://www.x.com/wecreus"}
        />
      </div>
    </div>
  );
});

export default Gallery;
