import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signInWithMagicLink, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signInWithMagicLink(email);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-neutral-900">Admin Login</h1>
            <p className="text-neutral-500 mt-2">Sign in with a magic link</p>
          </div>

          {sent ? (
            <div className="text-center py-4">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-lg font-medium text-neutral-900">Check your email</h2>
              <p className="text-neutral-500 mt-2">
                We've sent a magic link to <strong>{email}</strong>. Click the link to sign in.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-colors"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white py-2.5 rounded-lg font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Magic Link
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
