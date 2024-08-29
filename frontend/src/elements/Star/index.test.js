import React from 'react';
import { render, screen } from "@testing-library/react";
import Star from './index';

test("Should have props [value, height, width, spacing]", () => {
    const height = 48, width = 48, spacing = 4;
    render(<Star width={width} height={height} spacing={spacing} value={3.6} />);
    
    // Mengganti destrukturisasi dengan screen.getByTestId
    const starsContainer = screen.getByTestId("stars-container");
    
    expect(starsContainer).toBeInTheDocument();
    expect(starsContainer).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`));

    // Mengganti destrukturisasi dengan screen.getByTestId
    const starElement = screen.getByTestId("star-element");
    
    expect(starElement).toBeInTheDocument();
    expect(starElement).toHaveAttribute("style", expect.stringContaining(`width: ${width}px`));
    expect(starElement).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`));
    expect(starElement).toHaveAttribute("style", expect.stringContaining(`margin-right: ${spacing}px`));
});
