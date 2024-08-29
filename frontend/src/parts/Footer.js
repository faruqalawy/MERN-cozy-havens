import React from 'react'

import Button from 'elements/Button'
import IconText from './IconText'

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='container-grid'>
                <div className='item column-12 column-md-6 column-lg-3' style={{ width: 350 }}>
                    <IconText />
                    <p className='brand-tagline'>
                        Discover, Book, and Unwind. Your<br />
                        Journey Begins with Us!
                    </p>
                </div>
                <div className='item column-12 column-md-6 column-lg-3'>
                    <h6 className='mt-2'>For Beginners</h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button type='link' href='/register'>
                                New Account
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/properties'>
                                Start Booking a Room
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/use-payment'>
                                Use Payment
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className='item column-12 column-md-6 column-lg-3'>
                    <h6 className='mt-2'>Explore Us</h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button type='link' href='/careers'>
                                Our Careers
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/privacy'>
                                Privacy
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/terms'>
                                Terms & Conditions
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className='item column-12 column-md-6 column-lg-3'>
                    <h6 className='mt-2'>Connect Us</h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button isExternal type='link' href='mailto:support@cozyhavens.id'>
                                support@cozyhavens.id
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button isExternal type='link' href='tel:+6202112345678'>
                                021 - 1234 - 5678
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <span>
                                CozyHavens, Sleman, Yogyakarta
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center copyrights py-5'>
                    Copyright 2023 - All right reserved - CozyHavens
                </div>
            </div>
        </div>
    </footer>
  )
}
