import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function ProtectedRoute() {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="auth-loading">
                <div className="auth-loading__spinner" />
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
