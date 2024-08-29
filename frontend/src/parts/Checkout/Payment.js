import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { InputFile, InputText } from 'elements/Form';

import logoBri from "assets/images/logo-bri.jpg"
import logoBsi from "assets/images/logo-bsi.jpg"

export default function Payment(props) {
    const { data, ItemDetails, checkout } = props;

    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;

    return (
        <Fade triggerOnce>
            <div className='container' style={{marginBottom: 30}}>
                <div className='row justify-content-center align-items-center payment'>

                    <div className='col-12 col-md-5 py-5 payment-details'>
                        <Fade delay={300} triggerOnce>
                            <p className='mb-4'>Payment Transfer:</p>
                            <p>Tax: ${tax}%</p>
                            <p>Sub total: ${subTotal} USD</p>
                            <p>Total: ${grandTotal} USD</p>
                            <div className='row mt-4'>
                                <div className='col-3 text-right'>
                                    <img src={logoBri} alt='back rakyat indonesia' width="60" />
                                </div>
                                <div className='col'>
                                    <dl>
                                        <dd>Bank Rakyat Indonesia</dd>
                                        <dd>1345 0100 8154 501</dd>
                                        <dd>Faruq Alawy Hudaya</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-3 text-right'>
                                    <img src={logoBsi} alt='back rakyat indonesia' width="60" />
                                </div>
                                <div className='col'>
                                    <dl>
                                        <dd>Bank Syariah Indonesia</dd>
                                        <dd>1345 0100 8154 501</dd>
                                        <dd>Faruq Alawy Hudaya</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-12 col-md-5 py-5 payment-form'>
                    <h4 className='d-md-none text-center' style={{marginBottom: 20}}>Payment Information</h4>
                        <Fade delay={600} triggerOnce>
                            <label htmlFor='proofPayment'>Upload Transfer Receipt</label>
                            <InputFile
                                accept="image/*"
                                id="proofPayment"
                                name="proofPayment"
                                value={data.proofPayment}
                                onChange={props.onChange}
                            />

                            <label htmlFor='bankName'>Bank Name</label>
                            <InputText
                                id="bankName"
                                name="bankName"
                                value={data.bankName}
                                onChange={props.onChange}
                                type="text"
                            />

                            <label htmlFor='bankHolder'>Your Name</label>
                            <InputText
                                id="bankHolder"
                                name="bankHolder"
                                value={data.bankHolder}
                                onChange={props.onChange}
                                type="text"
                            />
                        </Fade>
                    </div>

                </div>
            </div>
        </Fade>
    )
}
