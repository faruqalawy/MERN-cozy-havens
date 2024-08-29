import React from 'react';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import { useMostPickedProperties, useCategoriesProperties } from '../hooks/getProperties';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import ItemDetails from "../json/itemDetails.json";

export default function DetailsPage() {
    const { propertyName } = useParams();
    const { mostPickedProperty, error: mostPickedError } = useMostPickedProperties(propertyName);
    const { categoriesProperty, error: categoriesError } = useCategoriesProperties(propertyName);

    React.useEffect(() => {
        window.title = "Staycation | Home";
        window.scrollTo(0, 0);
    }, []);

    const breadcrumb = [
        { pageTitle: "Home", PageHref: "/" },
        { pageTitle: "House Details", PageHref: "" }
    ];

    if (mostPickedError || categoriesError) return <div>Error: {(mostPickedError || categoriesError).message}</div>;
    if (!mostPickedProperty && !categoriesProperty) return <div>Loading...</div>;

    const property = mostPickedProperty || categoriesProperty;

    return (
        <>
            <Header />
            <PageDetailTitle
                breadcrumb={breadcrumb}
                properties={property}
            />
            <FeaturedImage data={ItemDetails.imageUrls} properties={property} />
            <section className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-7 pr-5'>
                        <Fade direction='up' triggerOnce>
                            <PageDetailDescription data={ItemDetails} />
                        </Fade>
                    </div>
                    <div className='col-12 col-md-6 col-lg-5'>
                        <Fade direction='up' triggerOnce>
                            <BookingForm itemDetails={ItemDetails} properties={property} />
                        </Fade>
                    </div>
                </div>
            </section>
            <Categories data={ItemDetails.categories} />
            <Testimony data={ItemDetails.testimonial} />
            <Footer />
        </>
    );
}
