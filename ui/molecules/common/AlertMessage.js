import Image from "next/image";

import { Text } from "@/atoms";

const AlertMessage = () => (
  <div className="bg-brand text-white text-center py-3 flex justify-center gap-2">
    <div className="flex self-center bg-white rounded-full p-1">
      <Image
        {...{
          src: "/icons/delivery-box.svg",
          width: "14",
          height: "14",
          alt: "delivery-box",
        }}
      />
    </div>
    <Text
      {...{
        content:
          "Claim your online FREE Delivery or Shipping today! Expires in",
        className: "text-sm",
      }}
    />
  </div>
);

export default AlertMessage;
