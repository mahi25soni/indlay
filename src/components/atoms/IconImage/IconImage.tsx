import React, { SVGProps } from 'react';

interface props {
    color?: string;
    size?: number;
    SVGComponent: React.FC<SVGProps<SVGSVGElement>>; // Type for imported SVG components
}

const IconImage = ({ color, size, SVGComponent }: props) => {
    return <span style={{ display: 'inline-flex' }}>
        <SVGComponent
            width={size}
            height={size}
            style={{ stroke: color, fill: color }}
        />
    </span>

}

export default IconImage