import { Link, useLocation } from 'react-router-dom';

export const LinkItem = ({ to, label, onClick }) => {
  const location = useLocation()
  return(
  <li>
    <Link
      onClick={onClick}
      className={`w-full block py-4 px-2 lg:px-4 
      ${
        location.pathname === to ? 'underline decoration-[#aaa]' : ''
      }`}
      to={to}
    >
      {label}
    </Link>
  </li>
)};
