import React from "react";
import { Fade } from "react-awesome-reveal";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

import Button from "elements/Button";

export default function MostPicked(props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dnwvsqlh1",
    },
  });

  const largeDisplay = (
    <div className="container-grid">
      {props.data.map((item, index) => {
        return (
          <div
            key={`mostpicked-${index}`}
            className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
          >
            <div className="card card-featured">
              <div className="tag">
                ${item.price}
                <span className="font-weight-light"> per {item.unit}</span>
              </div>
              <figure className="img-wrapper">
                <AdvancedImage
                  cldImg={cld.image(item.imageUrl)}
                  alt={item.name}
                  className="image-cover"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  className="stretched-link d-block text-white"
                  href={`/properties/${item.name}`}
                >
                  <h5>{item.name}</h5>
                </Button>
                <span>{item.city}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const smallDisplay = (
    <div className="container-grid">
      {props.data.map((item, index) => {
        return (
          <div
            key={`mostpicked-${index}`}
            className={`item ${
              index === 0 ? " row-2 column-12" : " row-1 column-12 column-md-6"
            }`}
            style={{ padding: "0" }}
          >
            <div className="card card-featured">
              <div className="tag">
                ${item.price}
                <span className="font-weight-light"> per {item.unit}</span>
              </div>
              <figure className="img-wrapper">
                <AdvancedImage
                  cldImg={cld.image(item.imageUrl)}
                  alt={item.name}
                  className="image-cover"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  className="stretched-link d-block text-white"
                  href={`/properties/${item.name}`}
                >
                  <h5>{item.name}</h5>
                </Button>
                <span>{item.city}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade direction="up" triggerOnce>
        <h4 className="mb-3">Most Picked</h4>
        <div className="d-none d-xl-block">{largeDisplay}</div>
        <div className="d-xl-none">{smallDisplay}</div>
      </Fade>
    </section>
  );
}
