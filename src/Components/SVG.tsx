import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg'

interface ComponentProps {
    requestURL: string | null,
}

const SvgComponent: React.FC<ComponentProps> = ({requestURL}) => {
    const [svgData, setSvgData] = useState<string | null>(null);

    console.log(requestURL);

    useEffect(() => {
        if(!requestURL) return;
        fetch(requestURL)
            .then(response => response.text())
            .then(data => {
                let svgDataURL = `data:image/svg+xml,${encodeURIComponent(data)}`;
                setSvgData(svgDataURL);
            })
            .catch(error => console.error(error));
    }, [requestURL]);

    return svgData ? <>
            <ReactSVG src={svgData}/>
        </>
        : null;
};

export default SvgComponent;