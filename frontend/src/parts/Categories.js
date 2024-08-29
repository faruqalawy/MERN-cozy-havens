import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

import Button from 'elements/Button'

export default function Categories( { data } ) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "dnwvsqlh1",
        },
    });

    return data.map((category, index1) => {
        return (
            <section className="container" key={`category-${index1}`}>
                <Fade direction='up' triggerOnce>
                <h4 className='mb-3 font-weight-medium'>{category.name}</h4>
                <div className='container-grid'>
                    {category.items.length === 0 ? (
                        <div className='row'>
                            <div className='col-auto align-items-center'>
                                There is no property in this category
                            </div>
                        </div>
                    ) : (
                        category.items.map((item,index2) => {
                            return (
                                <div className='item column-12 column-sm-6 column-lg-3 row-1' key={`category-${index1}-item-${index2}`}>
                                    <Fade direction='up' triggerOnce delay={300 * index2}>
                                        <div className='card border-0'>
                                            {item.isPopular && (
                                                <div className='tag'>
                                                    Popular {" "}
                                                    <span className='font-weight-light'>Choice</span>
                                                </div>
                                            )}
                                            <figure className='img-wrapper'>
                                                <AdvancedImage cldImg={cld.image(item.imageUrl)} alt={item.name} className='image-cover' />
                                            </figure>
                                            <div className='meta-wrapper'>
                                                <Button type='link' href={`/properties/${item.name}`} className='stretched-link d-block text-gray-800'>
                                                    <h5 className='h4'>{item.name}</h5>
                                                </Button>
                                                <span className='text-gray-500'>
                                                    {item.city}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            )
                        })
                    )}
                </div>
                </Fade>
            </section>
        )
    })
}
