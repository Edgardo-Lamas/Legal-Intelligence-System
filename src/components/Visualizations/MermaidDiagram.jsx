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
                containerRef.current.innerHTML = result.svg;
            });
        }
    }, [chart]);

    return (
        <div className="visual-card">
            {title && <h4 className="visual-card__title">{title}</h4>}
            <div className="visual-card__content" ref={containerRef} style={{ overflow: 'hidden' }}>
                {/* SVG inserted here */}
            </div>
        </div>
    );
};

export default MermaidDiagram;
