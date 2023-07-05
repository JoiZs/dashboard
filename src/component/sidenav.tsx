import { Link, useLocation } from "react-router-dom";

type Props = {};

const Sidenav = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <ul className="menu menu-lg gap-2 h-full w-full bg-white font-display">
      <li>
        <Link
          to={"viewcampaigns"}
          className={`text-xl  hover:no-underline hover:text-blue-shop rounded-full border-2 border-white ${
            pathname === "/viewcampaigns" && "text-blue-shop border-base-200"
          }`}
        >
          <i className="bx bxs-dashboard" />
          <span className="max-md:hidden">View Campaigns</span>
        </Link>
      </li>
      <li>
        <Link
          to={"createcampaign"}
          className={`text-xl hover:no-underline  hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/createcampaign" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx bxs-wrench" />
          <span className="max-md:hidden">Create Campaign</span>
        </Link>
      </li>
      <li>
        <Link
          to={"shortcodes"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/shortcodes" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx bxs-doughnut-chart" />
          <span className="max-md:hidden">Shortcodes</span>
        </Link>
      </li>
      <li>
        <Link
          to={"pending"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/pending" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx bxs-message-dots" />
          <span className="max-md:hidden">Pending</span>
        </Link>
      </li>
      <li>
        <Link
          to={"closed"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/closed" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx bx-window-close"></i>
          <span className="max-md:hidden">Closed</span>
        </Link>
      </li>
      <li>
        <Link
          to={"dashboards"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/dashboards" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx bxs-cog"></i>
          <span className="max-md:hidden">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to={"/usermanagement"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/usermanagement" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx bx-user"></i>
          <span className="max-md:hidden">User Management</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidenav;
