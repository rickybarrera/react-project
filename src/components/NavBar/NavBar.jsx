
import * as userService from '../../utilities/users-service';
import './NavBar.css';
import NavBarButton from './NavBarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
    return (
        <div className='nav-sidebar'>

        <nav>
        <span> Welcome, {user.name} </span>
        {/* <NavBarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} /> */}
        {/* <NavBarButton title="Trending" to="/trending" icon={<FaGripfire />} /> */}
        <NavBarButton title="Player" to="/player" icon={<FaPlay />} />
        <NavBarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <NavBarButton title="Library" to="/" icon={<IoLibrary />} />
        <NavBarButton title="LogOut" to="" onClick={ handleLogOut }> Logout </NavBarButton>
        </nav>
      </div> 
            /* <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <span> Welcome, {user.name} </span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        </div> */
    )}
    
    