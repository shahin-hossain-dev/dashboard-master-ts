"use client";

import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import Drawer from "../components/ui/Drawer";
import PageTopBar from "../components/partials/header/PageTopBar";
import CreateBlog from "../blog/_components/CreateBlog";
import CreateInvoice from "./_components/CreateInvoice";
import Input from "../components/ui/Input";

const InvoicePage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();

  return (
    <div>
      <Drawer
        title={"Invoice"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={"!bg-main-background"}
      >
        <div>
          <CreateInvoice />
        </div>
      </Drawer>
      <PageTopBar buttonTitle={"Create Invoice"} onClick={handleDrawerOpen} />
    </div>
  );
};

export default InvoicePage;
