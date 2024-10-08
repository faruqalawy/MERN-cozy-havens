import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import './index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import iconCalendar from 'assets/images/icons/ic_calendar.svg';
import formatDate from 'utils/formatDate';

export default function InputDate(props) {
    const { value, placeholder, name } = props;
    const [isShowed, setIsShowed] = useState(false);

    const datePickerChange = value => {
        const target = {
            target: {
                value: value.selection,
                name: name,
            },
        };
        props.onChange(target);
    };

    useEffect(() => {
        const handleClickOutside = event => {
            if (refDate.current && !refDate.current.contains(event.target)) {
                setIsShowed(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const refDate = useRef(null);

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    };

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
        value.endDate ? '-' + formatDate(value.endDate) : ''
    }`;

    return (
        <div
            ref={refDate}
            className={['input-date mb-3', props.outerClassName].join(' ')}
            style={{ position: 'relative' }} // Tambahkan posisi relatif
        >
            <div className="input-group">
                <div className="input-group-prepend bg-gray-900" style={{ width: 45 }}>
                    <span className="input-group-text">
                        <img src={iconCalendar} alt="icon calendar" />
                    </span>
                </div>
                <input
                    readOnly
                    type="text"
                    className="form-control"
                    value={displayDate}
                    placeholder={placeholder}
                    onClick={() => setIsShowed(!isShowed)}
                />

                {isShowed && (
                    <div className="date-range-wrapper" data-testid="date-range-wrapper">
                        <DateRange
                            editableDateInputs={true}
                            onChange={datePickerChange}
                            moveRangeOnFirstSelection={false}
                            onRangeFocusChange={check}
                            ranges={[value]}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

InputDate.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string,
    name: PropTypes.string,
};
