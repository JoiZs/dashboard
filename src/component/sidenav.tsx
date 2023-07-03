import { Link, useLocation } from "react-router-dom";

type Props = {};

const Sidenav = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <ul className="menu menu-md gap-2 bg-base-200 rounded-box h-full w-full">
      <li>
        <Link
          to={"viewcampaigns"}
          className={`text-xl ${pathname === "/viewcampaigns" && "active"}`}
        >
          View Campaigns
        </Link>
      </li>
      <li>
        <Link
          to={"createcampaign"}
          className={`text-xl ${pathname === "/createcampaign" && "active"}`}
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
  );
};

export default Sidenav;
