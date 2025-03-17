// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const user = useSelector((store) => store.user);
//   // console.log(user);

//     return (<div className="navbar bg-base-300 ">
//         <div className="flex-1">
//           <a className="btn btn-ghost text-xl">DevTinder</a>
//         </div>
//         {user && (
//           <div className="flex-none gap-2">
//             <div className="form-control">Welcome, {user.firstName}</div> 
//             <div className="dropdown dropdown-end mx-5 flex">
           
//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            
//               <div className="w-10 rounded-full p-1">
//                 <img
//                   alt="User Photo"
//                   src= {user.photoUrl} />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//               <li>
//                 <a className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </a>
//               </li>
//               <li><a>Settings</a></li>
//               <li><a>Logout</a></li>
//             </ul>
//           </div>
//         </div>)}
//       </div>
//       );
// };

// export default Navbar;



import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import {removeUser} from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    
    try{

      await axios.post(BASE_URL + "/logout", {},  { withCredentials : true});
      dispatch(removeUser());
      return navigate("/login");

    }catch(err){
      //Error Logic  
    }
  }

  return (
    <div className="navbar bg-base-300 px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold">DevTinder</Link>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium hidden sm:block">
            Welcome, {user.firstName}
          </span>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full border border-gray-300">
                <img
                  alt="User Profile"
                  src={user.photoUrl}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              role="menu"
              className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-50 mt-3 w-52 p-2 shadow-md"
            >
              <li>
                <Link to="/profile" className="flex justify-between">
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/requests">Requests</Link></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
      ) : (
        <a className="btn btn-primary">Login</a>
      )}
    </div>
  );
};

export default Navbar;
