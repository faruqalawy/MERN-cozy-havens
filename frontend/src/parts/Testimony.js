import React from "react";
import { Fade } from "react-awesome-reveal";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimony({ data }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dnwvsqlh1",
    },
  });
  return (
    <section className="container">
      <Fade direction="up" triggerOnce>
        <div className="row align-items-center container-grid">

          <div className="item column-12 column-lg-4" style={{ marginRight: 30 }}>
            <div className="testimonial-hero">
              <AdvancedImage
                cldImg={cld.image(data.imageUrl)}
                alt={data.name}
              />
            </div>
          </div>

          <div className="item column-12 column-lg-8 testimonial-text">
            <h4 style={{ marginBottom: 30 }} className="testimonial-name">{data.name}</h4>
            <Star value={data.rate} width={48} height={48} spacing={4} className="testimonial-stars" />
            <h5
              className="font-weight-light line-height-2 my-3 testimonial-content"
              style={{ fontSize: 28 }}
            >
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.travelerName}, {data.travelerOccupation}
            </span>
            <div>
              <Button
                className="btn px-5 testimonial-button"
                style={{ marginTop: 65 }}
                hasShadow
                isPrimary
                type="link"
                // href={`/testimonial/${data._id}`}
              >
                Read His Story
              </Button>
            </div>
          </div>

        </div>
      </Fade>
    </section>
  );
}
