import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
    const wholeStars = Math.floor(value);
    const decimals = value - wholeStars;

    const stars = Array.from({ length: 5 }, (_, index) => (
        <div
            id='star-element'
            className={`star ${index < wholeStars ? '' : 'placeholder'}`}
            key={`star-${index}`}
            style={{
                left: index * (width + spacing),
                height: height,
                width: width,
                marginRight: index < 4 ? spacing : 0
            }}
        ></div>
    ));

    if (decimals > 0 && value <= 5) {
        stars.push(
            <div
                id='star-element'
                className='star'
                key={`starWithDecimal`}
                style={{
                    left: wholeStars * (width + spacing),
                    height: height,
                    width: decimals * width - spacing,
                }}
            ></div>
        );
    }

    return (
        <div className={['stars', className].join(" ")} data-testid="stars-container">
            {stars}
        </div>
    );
}

Star.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    spacing: PropTypes.number
};
