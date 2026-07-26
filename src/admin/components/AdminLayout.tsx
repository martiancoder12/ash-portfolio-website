import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import {
  LayoutDashboard,
  FolderOpen,
  Plus,
  LogOut,
  Menu,
  X,
  User,
  Newspaper,
  SquarePen,
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { user, signOut } = useAuth();
  const location = useLocation();

  const navItems = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/projects/new', icon: Plus, label: 'New Project' },
    { to: '/admin/posts', icon: Newspaper, label: 'Blog Posts' },
    { to: '/admin/posts/new', icon: SquarePen, label: 'New Post' },
  ];

  const isActive = (path: string) => {
    if (path === '/admin/dashboard') return location.pathname === '/admin/dashboard';
    if (path === '/admin/posts') return location.pathname === '/admin/posts';
    if (path === '/admin/posts/new') return location.pathname === '/admin/posts/new';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-neutral-200 transform transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-neutral-900 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                A
              </span>
              <span className="font-semibold text-neutral-900">Admin</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 hover:bg-neutral-100 rounded-lg"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.to)
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </NavLink>
            ))}

            {/* Back to site */}
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors mt-4"
            >
              <FolderOpen size={18} />
              View Site
            </a>
          </nav>

          {/* User section */}
          <div className="border-t border-neutral-100 p-3">
            <div className="flex items-center gap-3 px-3 py-2 mb-2">
              <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-neutral-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-900 truncate">
                  {user?.email || 'Admin'}
                </p>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    window.location.href = '/admin/login';
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Mobile header */}
      <header className="lg:hidden bg-white border-b border-neutral-200 px-4 py-3 sticky top-0 z-30">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-neutral-100 rounded-lg"
          >
            <Menu size={20} />
          </button>
          <span className="font-semibold text-neutral-900">Admin Dashboard</span>
          <div className="w-8" />
        </div>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
