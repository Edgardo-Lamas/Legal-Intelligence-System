import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const ModelComparisonChart = () => {
    const data = [
        { subject: 'Razonamiento', chatgpt: 90, gemini: 70, fullMark: 100 },
        { subject: 'Contexto', chatgpt: 50, gemini: 100, fullMark: 100 },
        { subject: 'Fidelidad', chatgpt: 80, gemini: 80, fullMark: 100 },
        { subject: 'Extracción Datos', chatgpt: 60, gemini: 95, fullMark: 100 },
        { subject: 'Creatividad', chatgpt: 85, gemini: 75, fullMark: 100 },
    ];

    return (
        <div className="visual-card">
            <h4 className="visual-card__title">Perfil de Capacidades</h4>
            <div className="visual-card__content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '500px' }}>
                <ResponsiveContainer width="100%" height={500}>
                    <RadarChart cx="50%" cy="50%" outerRadius="85%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#4a4a4a', fontSize: 11 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />

                        <Radar
                            name="ChatGPT (Razonamiento)"
                            dataKey="chatgpt"
                            stroke="#4a7c94"
                            fill="#4a7c94"
                            fillOpacity={0.3}
                        />
                        <Radar
                            name="Gemini (Exploración)"
                            dataKey="gemini"
                            stroke="#e8c078"
                            fill="#e8c078"
                            fillOpacity={0.4}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ModelComparisonChart;
