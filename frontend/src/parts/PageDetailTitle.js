import React from "react";
import { Fade } from "react-awesome-reveal";

import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ breadcrumb, properties }) {
  const smallPageDetails = (
    <div className="d-flex d-lg-none flex-column gap-3">
      <div className="items-start">
        <Breadcrumb data={breadcrumb} />
      </div>
      <div className="text-center">
        <h1 className="h2">{properties.name}</h1>
        <span className="text-gray-400">{properties.city}</span>
      </div>
    </div>
  );
  
  return (
    <section className="container spacing-sm">
      <Fade direction="up" triggerOnce>
        {smallPageDetails}
        <div className="row align-items-center d-none d-lg-flex">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{properties.name}</h1>
            <span className="text-gray-400">{properties.city}</span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
