import React, { Component } from 'react';
import propTypes from 'prop-types';
import Button from 'elements/Button';
import { InputNumber, InputDate } from 'elements/Form';

export default class BookingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                duration: 1,
                date: {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: "selection"
                }
            }
        };
    }

    updateData = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    };

    componentDidUpdate(prevProps, prevState) {
        const { data } = this.state;

        if (prevState.data.date !== data.date) {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(data.date.endDate);
            const countDuration = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
            this.setState({
                data: {
                    ...this.state.data,
                    duration: countDuration,
                },
            });
        }

        if (prevState.data.duration !== data.duration) {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(startDate.setDate(startDate.getDate() + +data.duration - 1));
            this.setState({
                data: {
                    ...this.state.data,
                    date: {
                        ...this.state.data.date,
                        endDate: endDate,
                    },
                },
            });
        }
    }
    
    render() {
        const { data } = this.state;
        const { itemDetails, startBooking, properties } = this.props;

        return (
            <div className='card booking-form bordered'>
                <h4 className='mb-3'>Start Booking</h4>
                <h5 className='h2 text-teal mb-4'>
                    ${properties.price || itemDetails.price}{" "}
                    <span className='text-gray-500 font-weight-light'>
                        per {itemDetails.unit}
                    </span>
                </h5>

                <label htmlFor='duration'>How long you will stay?</label>
                <InputNumber
                    max={30}
                    suffix={" night"}
                    isSuffixPlural
                    onChange={this.updateData}
                    name='duration'
                    value={data.duration}
                />

                <label htmlFor='date'>Pick a date</label>
                <InputDate onChange={this.updateData} name="date" value={data.date} />

                <h6 
                    className='text-gray-500 font-weight-light'
                    style={{ marginBottom: 40 }}
                >
                    You will pay{" "}
                    <span className='text-gray-900'>
                        ${(properties.price || itemDetails.price) * data.duration} USD
                    </span>{" "}
                    per{" "}
                    <span className='text-gray-900'>
                        {data.duration} {itemDetails.unit}
                    </span>
                </h6>

                <Button
                    className='btn'
                    hasShadow
                    isPrimary
                    isBlock
                    type='link'
                    href='/checkout'
                    style={{ display: 'flex', justifyContent: 'center' }}
                    // onClick={startBooking}
                >
                    Continue to Book
                </Button>
            </div>
        )
    }
}

BookingForm.propTypes = {
    itemDetails: propTypes.object,
    // startBooking: propTypes.func,
    properties: propTypes.object
};
