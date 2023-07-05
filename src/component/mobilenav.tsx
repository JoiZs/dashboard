import { Link } from "react-router-dom";

type Props = {
  setSideToggleHandler: () => void;
};

const Mobilenav = (props: Props) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* <div className="dropdown">
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
            <li>
              <Link
                to={"usermanagement"}
                className={`text-xl ${
                  pathname === "/usermanagement" && "active"
                }`}
              >
                User Management
              </Link>
            </li>
          </ul>
        </div> */}

        <i
          onClick={props.setSideToggleHandler}
          className="glyphicon glyphicon-menu-hamburger p-2 btn btn-square btn-link no-underline hover:no-underline text-xl"
        />
      </div>
      <div className="navbar-center">
        <Link
          to={"/"}
          className="btn btn-link no-underline hover:no-underline normal-case text-xl"
        >
          <div className="text-3xl text-blue-shop flex items-center">
            <i className="bx bxs-smile " />
            <span>Shoprite</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button
            title="Navbarenddd"
            className="btn btn-ghost btn-circle btn-primary text-primary"
          >
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
        <button
          title="Navbarenddd"
          className="btn btn-ghost btn-circle btn-primary"
        >
          <div className="indicator">
            <i className="glyphicon glyphicon-off px-1 text-primary" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Mobilenav;
