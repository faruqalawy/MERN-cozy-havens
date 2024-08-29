import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function MainContent({ data, current }) {
    return (
        <Fade triggerOnce>{data[current] && data[current].content}</Fade>
    )
}
