import { Link } from 'react-router-dom'
import '../../styles/course-map.css'

function CourseMapCard() {
    return (
        <Link to="/course-map" className="course-map-card">
            <span className="course-map-card__icon">📍</span>
            <div className="course-map-card__content">
                <h3 className="course-map-card__title">Mapa del Curso</h3>
                <p className="course-map-card__description">
                    7 bloques · 10 módulos · Tu recorrido formativo completo
                </p>
            </div>
            <span className="course-map-card__arrow">→</span>
        </Link>
    )
}

export default CourseMapCard
