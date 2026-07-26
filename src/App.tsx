import { Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import AdminLayout from './admin/components/AdminLayout'

// Lazy load admin pages to keep bundle size down for public visitors
const AdminLogin = lazy(() => import('./admin/pages/Login'));
const AdminDashboard = lazy(() => import('./admin/pages/Dashboard'));
const AdminProjectForm = lazy(() => import('./admin/pages/ProjectForm'));
const AdminProjectFiles = lazy(() => import('./admin/pages/ProjectFiles'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900"></div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/projects/new"
          element={
            <AdminLayout>
              <AdminProjectForm />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/projects/:id/edit"
          element={
            <AdminLayout>
              <AdminProjectForm />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/projects/:id/files"
          element={
            <AdminLayout>
              <AdminProjectFiles />
            </AdminLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}
