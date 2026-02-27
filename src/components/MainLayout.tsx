import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';

export default function MainLayout() {
  const { user } = useAuth();

  return (
    <div className="flex flex-1 min-w-0">
      {user && (
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      )}
      <div className="flex-1 min-w-0 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
