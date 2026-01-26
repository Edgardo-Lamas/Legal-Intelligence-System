import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        primaryColor: '#e8c078', // Gold accent
        primaryTextColor: '#1a2234',
        primaryBorderColor: '#4a7c94',
        lineColor: '#7a7a7a',
        fontFamily: 'Inter, sans-serif',
    },
    securityLevel: 'loose',
});

const MermaidDiagram = ({ chart, title }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart).then(result => {
                // Post-process SVG string to force full width/height
                // Often Mermaid adds height="100%" or fixed width which limits responsiveness
                let svgCode = result.svg;

                // Hack: Remove max-width if present, set width/height to 100%
                svgCode = svgCode.replace(/width="[^"]*"/, 'width="100%"');
                svgCode = svgCode.replace(/height="[^"]*"/, 'height="100%"');
                svgCode = svgCode.replace(/max-width:[^;]*;/g, 'max-width: none;');

                containerRef.current.innerHTML = svgCode;
            });
        }
    }, [chart]);

    return (
        <div className="visual-card">
            {title && <h4 className="visual-card__title">{title}</h4>}
            {/* Remove padding from this container to let SVG touch edges if needed */}
            <div className="visual-card__content" ref={containerRef} style={{ width: '100%' }}>
                {/* SVG inserted here */}
            </div>
        </div>
    );
};

export default MermaidDiagram;
