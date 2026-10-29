import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
      <h2>404 - Page Not Found</h2>
      <p className="muted">The page you were looking for doesn't exist.</p>
      <Link to="/" className="btn" style={{ display: 'inline-block', width: 'auto', marginTop: '1rem' }}>
        Back Home
      </Link>
    </div>
  ); //
}