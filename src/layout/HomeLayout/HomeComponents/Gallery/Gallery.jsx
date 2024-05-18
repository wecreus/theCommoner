import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import { Flickr, GalleryPictures, Instagram } from "@/common/utils";
import "./Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SocialIcon from "@/common/SocialIcon/SocialIcon";

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
          Here are a couple of my photos way back from <b>2016</b>. While Im not
          making money from taking pictures anymore, I still enjoy it very much.
        </p>
        <div className="card__gallery--links">
          Find more of my photos on socials: insta flickr
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
            gradient={
              "linear-gradient(135deg, #0066DD 0%, #FF0084 80%)"
            }
            Icon={Flickr}
            url={"https://www.flickr.com/photos/166330239@N03/"}
          />
        </div>
      </div>
    </section>
  );
});

export default Gallery;
