"use client";
import "antd/dist/reset.css";
import "@ant-design/v5-patch-for-react-19";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import { LayoutProps } from "@/types";
const DashboardRoot = dynamic(
  () => import("./dashboard/components/partials/DashboardRoot"),
  { ssr: false }
);

const DashboardLayout = ({ children }: LayoutProps) => {
  return <DashboardRoot>{children}</DashboardRoot>;
};
export default DashboardLayout;
