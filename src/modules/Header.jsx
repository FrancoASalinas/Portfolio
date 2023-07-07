import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import { LinkItem } from './LinkItem';

export default function Header() {
  const location = useLocation();

  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav((prev) => !prev);
  }

  return (
    <header className="bg-secondary items-center h-16 w-full flex justify-between text-2xl text-primary drop-shadow-lg fixed z-50 border-b border-[#333]">
      <h2 className="p-2">
        <Link to="/Portfolio/">
          {'< '}Franco Miño{' />'}
        </Link>
      </h2>
      <button className="h-16 w-16 md:hidden" onClick={handleClick}>
        <i className="fa-solid fa-bars "></i>
      </button>{' '}
      <Nav />
      <MobileNav nav={nav} onClick={handleClick} />
    </header>
  );
}

function Nav() {
  console.log(location);
  return (
    <nav className="hidden w-max h-full md:flex items-center text-xl">
      <ul className="flex divide-x divide-gray-700 items-end h-full">
        <LinkItem label={'Home'} location={location} to="/Portfolio/" />
        <LinkItem
          label={'Projects / works'}
          location={location}
          to="/Portfolio/works"
        />
        <LinkItem
          label={'About Me'}
          location={location}
          to="/Portfolio/about"
        />
        <li className="group relative cursor-pointer">
          <a className="w-full block py-4 px-2">
            Contact{' '}
            <i className=" fa-solid fa-caret-right group-hover:rotate-90 transition-all"></i>
          </a>
          <div className="absolute w-[10rem] border-details border right-0 h-max hidden group-hover:block shadow-outline">
            <ul className="divide-y-2 divide-details bg-secondary transition-all text-xl">
              <li className="">
                <a
                  href="https://github.com/FrancoASalinas"
                  target="_blank"
                  className="flex items-center justify-between w-full  py-4 px-2"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>Github</span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/franco-andres-salinas-mi%C3%B1o/"
                  target="_blank"
                  className="flex items-center justify-between w-full  py-4 px-2"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

function Tooltip() {
  const [hidden, setHidden] = useState(false);

  useEffect(setHidden(true), []);

  return (
    <div
      className={`absolute bg-white bg-opacity-50 top-0 left-0 z-50 transition-[opacity 3s] ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p>Copied 'frankow222@gmail.com' to clipboard!</p>
    </div>
  );
}
