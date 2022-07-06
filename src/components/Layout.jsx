import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from './CustomLink';


const Layout = () => {
  const setActive = ({isActive}) => isActive ? 'current' : '';

  return (
    <>
      <header>
        <NavLink to="/" style={({isActive}) => ({color: isActive ? 'darkcyan' : 'white', transition: '0.6s'})}>Home</NavLink>
        <NavLink to="/posts" className={setActive}>Blog</NavLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer className="container">В разработке ...</footer>

    </>
  )
}

export { Layout }
