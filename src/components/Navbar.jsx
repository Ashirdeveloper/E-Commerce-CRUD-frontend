import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/Slices/AuthSlice';
import Modal from './Modal';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logout())
        navigate('/login');
    }
  return (
    <>
    <div className="navbar px-8 bg-white text-black  shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost font-bold italic text-xl">Aylish</a>
  </div>
  <div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li data-modal-target="crud-modal" data-modal-toggle="crud-modal"><a>Add Products</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</>
  )
}

export default Navbar