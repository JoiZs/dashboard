import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {};

const Sidenav = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <motion.ul
      variants={{
        open: {
          width: "18rem",
        },
        closed: {
          width: "6rem",
        },
      }}
      className="menu menu-lg gap-2 h-full w-full bg-white font-display ease-in-out"
    >
      <motion.li className="max-h-12 h-full">
        <Link
          to={"viewcampaigns"}
          className={`text-xl  hover:no-underline hover:text-blue-shop rounded-full border-2 border-white ${
            pathname === "/viewcampaigns" && "text-blue-shop border-base-200"
          }`}
        >
          <i className="bx text-xl bxs-dashboard" />
          <motion.span
            variants={{
              open: {
                display: "flex",
                opacity: 1,
                transition: { delay: 0.2, velocity: 0.4 },
              },
              closed: {
                display: "none",
                opacity: 0,
              },
            }}
          >
            View Campaigns
          </motion.span>
        </Link>
      </motion.li>
      <motion.li className="max-h-12 h-full">
        <Link
          to={"createcampaign"}
          className={`text-xl hover:no-underline  hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/createcampaign" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx text-xl bxs-wrench" />
          <motion.span
            variants={{
              open: {
                display: "flex",
                opacity: 1,
                transition: { delay: 0.2, velocity: 0.4 },
              },
              closed: {
                display: "none",
                opacity: 0,
              },
            }}
          >
            Create Campaign
          </motion.span>
        </Link>
      </motion.li>
      <motion.li className="max-h-12 h-full">
        <Link
          to={"shortcodes"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/shortcodes" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx text-xl bxs-doughnut-chart" />
          <motion.span
            variants={{
              open: {
                display: "flex",
                opacity: 1,
                transition: { delay: 0.2, velocity: 0.4 },
              },
              closed: {
                display: "none",
                opacity: 0,
              },
            }}
          >
            Shortcodes
          </motion.span>
        </Link>
      </motion.li>
      <motion.li className="max-h-12 h-full">
        <Link
          to={"pending"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/pending" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx text-xl bxs-message-dots" />
          <motion.span
            variants={{
              open: {
                display: "flex",
                opacity: 1,
                transition: { delay: 0.2, velocity: 0.4 },
              },
              closed: {
                display: "none",
                opacity: 0,
              },
            }}
          >
            Pending
          </motion.span>
        </Link>
      </motion.li>
      <motion.li className="max-h-12 h-full">
        <Link
          to={"closed"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/closed" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx text-xl bx-window-close"></i>
          <motion.span
            variants={{
              open: {
                display: "flex",
                opacity: 1,
                transition: { delay: 0.2, velocity: 0.4 },
              },
              closed: {
                display: "none",
                opacity: 0,
              },
            }}
          >
            Closed
          </motion.span>
        </Link>
      </motion.li>
      <motion.li className="max-h-12 h-full">
        <Link
          to={"dashboards"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/dashboards" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx text-xl bxs-cog"></i>
          <motion.span
            variants={{
              open: {
                display: "flex",
                opacity: 1,
                transition: { delay: 0.2, velocity: 0.4 },
              },
              closed: {
                display: "none",
                opacity: 0,
              },
            }}
          >
            Dashboard
          </motion.span>
        </Link>
      </motion.li>
      <motion.li className="max-h-12 h-full">
        <Link
          to={"/usermanagement"}
          className={`text-xl hover:no-underline hover:text-blue-shop rounded-full border-2 border-white  ${
            pathname === "/usermanagement" && "text-blue-shop border-base-200 "
          }`}
        >
          <i className="bx text-xl bx-user"></i>
          <motion.span
            variants={{
              open: {
                display: "flex",
                opacity: 1,
                transition: { delay: 0.2, velocity: 0.4 },
              },
              closed: {
                display: "none",
                opacity: 0,
              },
            }}
          >
            User Management
          </motion.span>
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default Sidenav;
