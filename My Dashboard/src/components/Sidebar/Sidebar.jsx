import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg"
import LogoWhite from "../../assets/images/logo_white.svg"
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { sidebarContext } from "../../Context/SidebarContext";


const Sidebar = () => {

  const { theme } = useContext(ThemeContext);
  const {isSidebarOpen , closeSidebar} = useContext(sidebarContext);
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    
  }


  return (
    <nav className={'sidebar'}>
      {/* Sidebar Top */}
      <div className='sidebar-top'>
        <div className='sidebar-brand'>
          <img src = {theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt = ""/>
         <span className="sidebar-brand-text">Dashboard</span>
        </div>
        <button className="sidebar-close-btn">
          <MdOutlineClose size={24}/>
        </button>
      </div>

{/* Sidebar Content */}
<div className="sidebar-body">
<div className="sidebar-menu">
          <ul className="menu-list">

            {/* Dashboard */}
            
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>

            {/* Statistics */}

            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>

            {/* Payment */}
          
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Payment</span>
              </Link>
            </li>

            {/* Transactions */}

            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Transactions</span>
              </Link>
            </li>
            
            {/* Products */}

            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Products</span>
              </Link>
            </li>

            {/* customers */}

            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Customer</span>
              </Link>
            </li>

            {/* Messages */}

            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Messages</span>
              </Link>
            </li>
          </ul>
        </div>
</div>
    
<div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>



    </nav>
  );
};

export default Sidebar; 