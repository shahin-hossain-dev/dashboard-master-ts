import React from "react";
import TopGroupStats from "./components/partials/stats/TopGroupStats";
import OrderGroupStats from "./components/partials/stats/OrderGroupStats";
import HomeGroupChart from "./components/partials/charts/HomeGroupChart";
import RecentOrderTable from "./components/partials/tables/RecentOrderTable";

const DashboardHome = () => {
  return (
    <div>
      <TopGroupStats />
      <OrderGroupStats />
      <HomeGroupChart />
      <RecentOrderTable />
    </div>
  );
};

export default DashboardHome;
