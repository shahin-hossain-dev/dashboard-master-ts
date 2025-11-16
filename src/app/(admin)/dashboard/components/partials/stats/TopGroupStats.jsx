import Image from "next/image";
import Card from "../../ui/Card";
const productIcon = "/images/icons/products.png";
const orderIcon = "/images/icons/order.png";
const usersIcon = "/images/icons/users.webp";
const salesIcon = "/images/icons/sales.png";

const stats = [
  {
    title: "Products",
    count: "$3,564",
    bg: "bg-[#E5F9FF] 	",
    text: "text-info-500",
    icon: productIcon,
  },
  {
    title: "Remaining Orders",
    count: "$564",
    bg: "bg-[#FFEDE6] 0	",
    text: "text-warning-500",
    icon: orderIcon,
  },
  {
    title: "Users",
    count: "$500",
    bg: "bg-[#EAE6FF] 	",
    text: "text-[#5743BE]",
    icon: usersIcon,
  },
  {
    title: "Sales",
    count: "$10,000",
    bg: "bg-[#EAE6FF] 	",
    text: "text-[#00EBFF]",
    icon: salesIcon,
  },
];

const TopGroupStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
      {stats?.map((stat, idx) => (
        <Card key={idx} className="!shadow">
          <div className="flex items-start gap-3 ">
            <div className={`${stat.bg} rounded-full p-2`}>
              <Image
                src={stat?.icon}
                width={30}
                height={30}
                alt={stat?.title}
                className="w-[3rem]"
              />
            </div>
            <div>
              <p className={`${stat?.text} font-semibold text-lg`}>
                {stat?.title}
              </p>
              <p className="font-semibold text-xl md:text-xl">{stat?.count}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TopGroupStats;
