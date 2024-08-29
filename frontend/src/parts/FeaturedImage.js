import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

export default function FeaturedImage({ data, properties }) {
    const cld = new Cloudinary({ cloud: { cloudName: "dnwvsqlh1" } });
    return (
        <section className='container'>
            <div className='container-grid sm'>
                {data.map((item, index) => {
                    return (
                        <div
                            key={`FeaturedImage-${index}`}
                            className={`item ${index > 0 ? "column-12 column-sm-6 column-lg-4 row-1" : "column-12 column-lg-8 row-2"}`}
                        >
                            <Fade direction='up' delay={300 * index} triggerOnce className='h-100'>
                                <div className='card h-100 border-0'>
                                    <figure className='img-wrapper h-100'>
                                        <AdvancedImage
                                            className={`item ${index > 0 ? "image-cover" : "image-cover-2nd"} h-100`} 
                                            cldImg={cld.image(index > 0 ? item.url : properties.imageUrl)}
                                            alt={item._id} 
                                        />
                                    </figure>
                                </div>
                            </Fade>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
