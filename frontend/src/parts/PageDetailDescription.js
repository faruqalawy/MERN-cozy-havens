import React from 'react';
import parse from 'html-react-parser';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
    cloud: {
        cloudName: "dnwvsqlh1",
    },
});

export default function PageDetailDescription({ data }) {
    return (
        <main>
            <h4>About the place</h4>
            {parse(data.description)}
            <div className='row' style={{marginTop: 30}}>
                {data.features.map((feature, index) => {
                    return (
                        <div
                            key={`feature-${index}`}
                            className='col-3'
                            style={{marginBottom: 20}}
                        >
                            <AdvancedImage
                                cldImg={cld.image(feature.imageUrl)}
                                width="38"
                                className='d-block mb-2'
                                alt={feature.name}
                            />{" "}
                            <span>{feature.qty}</span>
                            <span className='text-gray-500 font-weight-light'>
                                {" "}{feature.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
