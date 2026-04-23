import { Outlet, Link, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { Package, ShoppingBag, LayoutDashboard, LogOut } from 'lucide-react';
import { useEffect } from 'react';

export function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user?.isAdmin) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="w-6 h-6" />
              <span className="text-xl font-bold">Admin Panel</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white text-sm">
                Back to Store
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-gray-300 hover:text-white"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64">
            <nav className="bg-white rounded-lg shadow-md p-4 space-y-2">
              <Link
                to="/admin/products"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Package className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Products</span>
              </Link>
              <Link
                to="/admin/orders"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Orders</span>
              </Link>
            </nav>
          </aside>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
