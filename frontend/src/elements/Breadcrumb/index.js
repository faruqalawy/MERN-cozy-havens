import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button';

import "./index.scss";

export default function Breadcrumb(props) {
    const { data, className } = props;

    return (
        <div aria-label='breadcrumb' className={className ? `${className} breadcrumb` : 'breadcrumb'}>
            {data.map((item, index) => (
                <React.Fragment key={`breadcrumb-${index}`}>
                    <span className={`breadcrumb-item${index === data.length - 1 ? " active" : ""}`}>
                        {index === data.length - 1 ? (
                            item.pageTitle
                        ) : (
                            <Button type='link' href={item.pageHref} className='font-weight-light' >
                                {item.pageTitle}
                            </Button>
                        )}
                    </span>
                    {index !== data.length - 1 && (
                        <span className="breadcrumb-divider px-4">/</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

Breadcrumb.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string,
};
