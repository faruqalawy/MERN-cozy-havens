import { Fade } from "react-awesome-reveal";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dnwvsqlh1",
    },
  });

  const HeroImage = (
    <>
      <AdvancedImage
        cldImg={cld.image(props.data.heroImageUrl)}
        alt="Banner Hero Section"
        className="img-fluid w-100 h-100"
      />
    </>
  );

  return (
    <section className="container pt-4">
      <Fade direction="up" triggerOnce>
        <div className="row align-items-center hero">
          <div className="d-xl-none col-12 pb-5" style={{ maxHeight: 700 }}>
            {HeroImage}
          </div>

          <div className="col-auto pr-5 hero-text" style={{ maxWidth: 530 }}>
            <h1
              className="font-weight-bold line-weight-1 mb-3"
              style={{ lineHeight: 1.4 }}
            >
              Leave Daily Hustle, <br />
              Start Your Vacation
            </h1>
            <p
              className="mb-5 font-weight-light text-gray-500 w-80"
              style={{ lineHeight: "170%" }}
            >
              Do you plan to vacation in Yogyakarta? <br />
              Break free at Cozy Havens, special curated homes, <br />
              audacious tranquility, your real escape begins.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row d-none d-md-flex" style={{ marginTop: 80 }}>
              {props.data.pros.map((item, index) => {
                return (
                  <div
                    className="col-auto text-center"
                    key={index}
                  >
                    <AdvancedImage
                      cldImg={cld.image(item.imageUrl)}
                      width="36"
                      height="36"
                      alt={`${item.number} ${item.name}`}
                    />
                    <h6 className="mt-3">
                      {formatNumber(item.number)}{" "}
                      <span className="text-gray-500 font-weight-light">
                        {item.name}
                      </span>
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="d-none d-xl-block ml-5"
            style={{ width: 580, height: 450 }}
          >
            {HeroImage}
          </div>
        </div>
      </Fade>
    </section>
  );
}
