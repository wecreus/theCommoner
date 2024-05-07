import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { GalleryPictures } from "@/common/utils";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
  useEffect(() => {
    document.addEventListener("touchmove", (e) => {

    });
  }, []);
  return (
    <section className="card">
      <Carousel
        emulateTouch
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className="Gallery-carousel"
      >
        <img
          src={GalleryPictures[0].url}
          width="400px"
          alt="Best"
        />
        <img
          src={GalleryPictures[1].url}
          width="400px"
          alt="Best"
        />
        <img
          src={GalleryPictures[2].url}
          width="400px"
          alt="Best"
        />
      </Carousel>
    </section>
  );
};

export default Gallery;
