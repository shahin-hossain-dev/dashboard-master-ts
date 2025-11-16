"use client";
import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  const handleCounter = () => {
    console.log("Hello ant Design");
  };

  return (
    <div>
      <h2>Next Boiler Plate</h2>
      <Link href={"/dashboard"}>
        <Button onClick={handleCounter} type="primary">
          Go Dashboard
        </Button>
      </Link>
    </div>
  );
}
