import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-600 p-4 text-white">
      <div className="flex items-center justify-between">
        <img src="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/logo.png?raw=true" alt="Logo" className="h-10" />
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:underline transition duration-200"
            >
              Principal
            </Link>
          </li>
          <li>
            <Link
              to="/summary"
              className="hover:underline transition duration-200"
            >
              Resumen
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
