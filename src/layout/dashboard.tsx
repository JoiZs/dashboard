import Sidenav from "../component/sidenav";
import Topnav from "../component/topnav";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import EachSite from "./eachSite";
import Viewcamp from "../pages/viewcamp";
import Createcamp from "../pages/createcamp";
import Shortcodes from "../pages/shortcodes";
import Pendings from "../pages/pendings";
import Closed from "../pages/closed";
import Dashboards from "../pages/dashboards";
import Campbyid from "../pages/campbyid";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="grid grid-rows-9 h-full">
      <div className="row-span-1 p-2 flex items-center">
        <Topnav />
      </div>
      <div className="grid row-start-2 row-end-[10] grid-cols-5 grid-flow-col h-full">
        <div className="col-span-1 h-full p-2">
          <Sidenav />
        </div>
        <div className="col-span-4 p-2">
          <Routes>
            <Route path="/" Component={() => <Landing />} />
            <Route
              path="viewcampaigns"
              Component={() => (
                <EachSite title="Campaigns">
                  <Viewcamp />
                </EachSite>
              )}
              children
            />
            <Route
              path="viewcampaigns/:id"
              Component={() => (
                <EachSite title="Campaign Details">
                  <Campbyid />
                </EachSite>
              )}
            />
            <Route
              path="createcampaign"
              Component={() => (
                <EachSite title="Campaign Setup">
                  <Createcamp />
                </EachSite>
              )}
            />
            <Route
              path="shortcodes"
              Component={() => (
                <EachSite title="shortcodes">
                  <Shortcodes />
                </EachSite>
              )}
            />
            <Route
              path="pending"
              Component={() => (
                <EachSite title="pendings">
                  <Pendings />
                </EachSite>
              )}
            />
            <Route
              path="closed"
              Component={() => (
                <EachSite title="closed">
                  <Closed />
                </EachSite>
              )}
            />
            <Route
              path="dashboards"
              Component={() => (
                <EachSite title="dashboards">
                  <Dashboards />
                </EachSite>
              )}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;