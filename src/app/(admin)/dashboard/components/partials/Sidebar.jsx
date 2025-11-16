"use client";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi2";
import { MdEditAttributes } from "react-icons/md";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { MdAddShoppingCart } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import { FaCartPlus, FaRegCircle } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { RiCoupon3Line } from "react-icons/ri";
import { FaRegHeart, FaGift, FaBlogger, FaUserCog } from "react-icons/fa";
import { MdPhotoLibrary, MdRateReview } from "react-icons/md";
import { BiSlideshow } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

const Sidebar = () => {
  const router = useRouter();

  const handleNavigateRoutes = (e) => {
    const ROUTES = {
      dashboard: "/dashboard",
      products: "/dashboard/products/product",
      attributeOption: "/dashboard/products/attribute-option",
      attribute: "/dashboard/products/attribute",
      category: "/dashboard/products/category",

      orders: "/dashboard/orders/order",
      wishlist: "/dashboard/orders/wishlist",
      cart: "/dashboard/orders/cart",
      coupon: "/dashboard/orders/coupon",
      giftCard: "/dashboard/orders/gift-card",

      blog: "/dashboard/blog",
      gallery: "/dashboard/gallery",
      review: "/dashboard/review",
      slider: "/dashboard/slider",
      user: "/dashboard/user",
      accountSetting: "/dashboard/account-setting",
      globalSetting: "/dashboard/global-setting",
      invoice: "/dashboard/invoice",
    };

    const routes = {
      1: ROUTES.dashboard,
      2: ROUTES.products,
      3: ROUTES.attributeOption,
      4: ROUTES.attribute,
      5: ROUTES.category,
      6: ROUTES.orders,
      7: ROUTES.wishlist,
      8: ROUTES.cart,
      9: ROUTES.coupon,
      10: ROUTES.giftCard,
      11: ROUTES.blog,
      12: ROUTES.gallery,
      13: ROUTES.review,
      14: ROUTES.slider,
      15: ROUTES.user,
      16: ROUTES.accountSetting,
      17: ROUTES.globalSetting,
      18: ROUTES.invoice,
    };

    router.push(routes[e.key] || "/");
  };

  const items = [
    {
      key: "1",
      label: "Dashboard",
      icon: <RiDashboardHorizontalFill className="text-icon" />,
    },
    {
      key: "sub1",
      label: "Products",
      icon: <AiFillProduct className="text-icon" />,

      children: [
        {
          key: "2",
          label: "Product",
          icon: <MdAddShoppingCart className="text-icon" />,
        },
        {
          key: "5",
          label: "Category",
          icon: <MdOutlineCategory className="text-icon" />,
        },
        {
          key: "4",
          label: "Attribute",
          icon: <MdEditAttributes className="text-icon" />,
        },
        {
          key: "3",
          label: "Attribute Option",
          icon: <LuDot className="-ml-4 text-icon" />,
        },
      ],
    },
    {
      key: "sub2",
      label: "Orders",
      icon: <HiShoppingCart className="text-icon" />,
      children: [
        {
          key: "6",
          label: "Order",
          icon: <FaCartPlus className="text-icon" />,
        },
        {
          key: "7",
          label: "Wishlist",
          icon: <FaRegHeart className="text-icon" />,
        },
        {
          key: "8",
          label: "Cart",
          icon: <BsCartCheck className="text-icon" />,
        },
        {
          key: "9",
          label: "Coupon",
          icon: <RiCoupon3Line className="text-icon" />,
        },
        {
          key: "10",
          label: "Gift Card",
          icon: <FaGift className="text-icon" />,
        },
      ],
    },
    { key: "11", label: "Blog", icon: <FaBlogger className="text-icon" /> },
    {
      key: "12",
      label: "Gallery",
      icon: <MdPhotoLibrary className="text-icon" />,
    },
    {
      key: "13",
      label: "Review",
      icon: <MdRateReview className="text-icon" />,
    },
    { key: "14", label: "Slider", icon: <BiSlideshow className="text-icon" /> },
    { key: "15", label: "User", icon: <CgUserList className="text-icon" /> },
    {
      key: "16",
      label: "Account Setting",
      icon: <FaUserCog className="text-icon" />,
    },
    {
      key: "17",
      label: "Global Setting",
      icon: <FiSettings className="text-icon" />,
    },
    {
      key: "18",
      label: "Invoice",
      icon: <IoDocumentTextOutline className="text-icon" />,
      // children: [
      //   {
      //     key: "19",
      //     label: "List",
      //     icon: <FaRegCircle />,
      //   },
      //   {
      //     key: "20",
      //     label: "Add",
      //     icon: <FaRegCircle />,
      //   },
      // ],
    },
  ];

  return (
    <div
      className="sidebar sticky top-0 z-50"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Sider
        breakpoint="lg"
        width={250}
        style={{
          minHeight: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
          scrollbarWidth: "none",
        }}
        className="!absolute !top-0 !left-0 !h-full  lg:!sticky !z-50 lg:!overflow-y-scroll "
        theme="dark"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div>
          <h2 className="demo-logo-vertical text-white font-bold text-lg md:text-xl lg:text-2xl px-2 py-2 text-center">
            Dash Logo
          </h2>
        </div>

        <Menu
          onClick={handleNavigateRoutes}
          theme="dark"
          style={{ backgroundColor: "#2F3349" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          className="!text-[1rem]"
        />
      </Sider>
    </div>
  );
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default Sidebar;
