import { Link, useLocation } from "react-router-dom";

type Props = {};

const Mobilenav = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to={"viewcampaigns"}
                className={`text-xl ${
                  pathname === "/viewcampaigns" && "active"
                }`}
              >
                View Campaigns
              </Link>
            </li>
            <li>
              <Link
                to={"createcampaign"}
                className={`text-xl ${
                  pathname === "/createcampaign" && "active"
                }`}
              >
                Create Campaign
              </Link>
            </li>
            <li>
              <Link
                to={"shortcodes"}
                className={`text-xl ${pathname === "/shortcodes" && "active"}`}
              >
                Shortcodes
              </Link>
            </li>
            <li>
              <Link
                to={"pending"}
                className={`text-xl ${pathname === "/pending" && "active"}`}
              >
                Pending
              </Link>
            </li>
            <li>
              <Link
                to={"closed"}
                className={`text-xl ${pathname === "/closed" && "active"}`}
              >
                Closed
              </Link>
            </li>
            <li>
              <Link
                to={"dashboards"}
                className={`text-xl ${pathname === "/dashboards" && "active"}`}
              >
                Dashboards
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Logo
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button title="Navbarenddd" className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown-content">
            <input
              title="Search"
              type="text"
              className="input input-md w-64 input-bordered "
              placeholder="Search"
            />
          </div>
        </div>
        <button title="Navbarenddd" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <i className="glyphicon glyphicon-off px-1" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Mobilenav;