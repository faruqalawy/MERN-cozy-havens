import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

import { InputText } from 'elements/Form';

export default function BookingInformation(props) {
    const { data, ItemDetails, checkout } = props;

    const cld = new Cloudinary({
        cloud: {
            cloudName: "dnwvsqlh1",
        },
    });
    return (
        <Fade triggerOnce>
            <div className='container' style={{ marginBottom: 30 }}>
                <div className='row justify-content-center align-items-center booking-info'>
                    <div className='col-12 col-lg-5 py-5 booking-info-image'>
                        <Fade delay={300} triggerOnce>
                            <div className='card border-0'>
                                <figure className='img-wrapper' >
                                    <AdvancedImage
                                        className='image-cover'
                                        cldImg={cld.image("cozy-havens/images/categories-1")}
                                        alt={ItemDetails.name}
                                    />
                                </figure>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='meta-wrapper'>
                                            <h5>{ItemDetails.name}</h5>
                                            <span className='text-gray-500'>
                                                {ItemDetails.city}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                        <span>
                                            ${+checkout.duration * ItemDetails.price} USD
                                            <span className='text-gray-500'> per </span>
                                            {checkout.duration} {ItemDetails.unit}
                                            {+checkout.duration > 1 ? "s" : ""}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='col-12 col-lg-5 booking-info-form'>
                        <h4 className='d-lg-none text-center' style={{marginBottom: 20}}>Your Information</h4>
                        <Fade delay={600} triggerOnce>
                            <label htmlFor='firstName'>First Name</label>
                            <InputText 
                                id="firstName"
                                name="firstName"
                                value={data.firstName}
                                onChange={props.onChange}
                            />

                            <label htmlFor='lastName'>Last Name</label>
                            <InputText 
                                id="lastName"
                                name="lastName"
                                value={data.lastName}
                                onChange={props.onChange}
                            />

                            <label htmlFor='email'>Email Addres</label>
                            <InputText 
                                name="email"
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={props.onChange}
                            />

                            <label htmlFor='phone'>Phone Number</label>
                            <InputText 
                                id="phone"
                                name="phone"
                                type="tel"
                                value={data.phone}
                                onChange={props.onChange}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
