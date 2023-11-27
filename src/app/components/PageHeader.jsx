"use client";
import { usePathname } from "next/navigation";

const PageHeader = () => {
  const pathname = usePathname();

  let title = "";

  if (pathname === "/") {
    title = "Special Order System";
  } else if (pathname === "/allOrders") {
    title = "All orders";
  } else if (pathname === "/todayOrder") {
    title = "Today's orders";
  } else if (pathname === "/todayDelivery") {
    title = "Today's deliveries";
  } else if (pathname === "/contact") {
    title = "Contact list";
  } else if (pathname === "/pickup") {
    title = "Ready for pickup";
  } else if (pathname === "/distributors") {
    title = "Distributors";
  }

  return <h1>{title}</h1>;
};

export default PageHeader;
