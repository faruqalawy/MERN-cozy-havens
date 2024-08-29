import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';

import Header from 'parts/Header';
import Button from 'elements/Button';
import Stepper, {
    Numbering,
    Meta,
    MainContent,
    Controller
} from 'elements/Stepper';

import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';

import ItemDetails from "../json/itemDetails.json"

export default class Checkout extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: ""
        }
    };

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value,
            }
        });
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { data } = this.state;

        const checkout = {
            duration: 3
        }

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank fields below",
                content: (
                    <BookingInformation
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },

            payment: {
                title: "Payment",
                description: "Kindly follow the instuctions below",
                content: (
                    <Payment
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },

            completed: {
                title: "Yay! Completed",
                description: null,
                content: <Completed />
            },
        }

        return (
        <>
            <Header isCentered />

            <Stepper steps={steps}>
                {
                    (prevStep, nextStep, CurrentStep, steps) => {
                        return (
                        <>
                            <Numbering
                                data={steps}
                                current={CurrentStep}
                                style={{marginBottom: 50}}
                            />

                            <Meta data={steps} current={CurrentStep} />

                            <MainContent data={steps} current={CurrentStep} />

                            {CurrentStep === "bookingInformation" && (
                                <Controller>
                                    {data.firstName !== "" &&
                                        data.lastName !== '' &&
                                        data.email !== '' &&
                                        data.phone !== '' && (
                                            <Fade triggerOnce>
                                                <Button
                                                    className='btn mb-3'
                                                    type='button'
                                                    isBlock
                                                    isPrimary
                                                    hasShadow
                                                    onClick={nextStep}
                                                >
                                                    Continue to Book
                                                </Button>
                                            </Fade>
                                        )}
                                        <Button
                                            className='btn d-flex justify-content-center align-item-center'
                                            type='link'
                                            isBlock
                                            isLight
                                            href={`/properties/${ItemDetails.name}`}
                                        >
                                            Cancel
                                        </Button>
                                </Controller>
                            )}

                            {CurrentStep === "payment" && (
                                <Controller>
                                    {data.proofPayment !== "" &&
                                        data.bankName !== '' &&
                                        data.bankHolder !== '' && (
                                            <Fade triggerOnce>
                                                <Button
                                                    className='btn mb-3'
                                                    type='button'
                                                    isBlock
                                                    isPrimary
                                                    hasShadow
                                                    onClick={nextStep}
                                                >
                                                    Continue to Book
                                                </Button>
                                            </Fade>
                                        )}
                                        <Button
                                            className='btn'
                                            type='button'
                                            isBlock
                                            isLight
                                            onClick={prevStep}
                                        >
                                            Cancel
                                        </Button>
                                </Controller>
                            )}

                            {CurrentStep === "completed" && (
                                <Controller>
                                    <Button
                                        className='btn d-flex justify-content-center align-item-center'
                                        type='link'
                                        isBlock
                                        isPrimary
                                        hasShadow
                                        href='/'
                                    >
                                        Back to Home
                                    </Button>
                                </Controller>
                            )}
                        </>
                    )}
                }
            </Stepper>
        </>
        )
    }
}
