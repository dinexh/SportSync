import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && user.role !== role) {
    // Redirect to appropriate dashboard based on user role
    const dashboardPaths = {
      coach: '/dashboard/coach',
      player: '/dashboard/player',
      user: '/dashboard/user'
    };
    return <Navigate to={dashboardPaths[user.role]} replace />;
  }

  return children;
};

export default ProtectedRoute; 