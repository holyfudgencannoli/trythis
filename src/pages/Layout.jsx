import { Link, Outlet } from 'react-router-dom';
import '../pages/Layout.css';
import Sidebar from '../components/sidebar/Sidebar';
import NavBar from '../components/navbar/NavBar';

export default function Layout() {
  return (
    <>
      <Sidebar />
      <NavBar />
      <main className='content'>
        <Outlet /> {/* This is where nested routes render */}
      </main>
    </>
  );
}
