"use client";
import "antd/dist/reset.css";
import "@ant-design/v5-patch-for-react-19";
import "@/app/styles/globals.css";
import { LayoutProps } from "@/types";

const DashboardAuthLayout = ({ children }: LayoutProps) => {
  return <main>{children}</main>;
};
export default DashboardAuthLayout;
