import Image from "next/image";

import { Button, Text } from "@/atoms";
import menu from "@/config/menu";
import Link from "next/link";
import CartSideBar from "@/molecules/common/CartSideBar";
import { useEffect, useState } from "react";
import { uiContext } from "@/context/ManagedUiContext";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  // const uiContext = useUIContext();
  const { cartCount } = uiContext();

  useEffect(() => {
    console.log("first");
  });
  const openCartSideBar = () => {
    setShowCart(true);
  };
  return (
    <div className="flex items-center justify-between w-full h-full mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="flex shrink-0">
        <a className="inline-block focus:outline-none max-w-[131px] w-full -mt-1">
          <Image
            alt="BoroBazar"
            loading="eager"
            width="131"
            height="30"
            decoding="async"
            src="/icons/logo.svg"
          />
        </a>
      </div>
      <nav className="headerMenu flex w-full relative">
        {menu.map(({ label, link }, index) => (
          <div
            key={index}
            className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4"
          >
            <Link href={link}>
              <Text
                {...{
                  content: label,
                  className:
                    "relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto",
                }}
              />
            </Link>
          </div>
        ))}
      </nav>
      <div className="flex shrink-0 -mx-2.5 xl:-mx-3.5">
        <button
          className="flex items-center justify-center gap-1 h-auto focus:outline-none transform lg:flex xl:mx-3.5 mx-2.5"
          aria-label="cart-button"
          onClick={openCartSideBar}
        >
          <div className="relative flex items-center">
            <Image width={20} height={20} src="/icons/cart.svg" alt="cart" />
            <Text
              {...{
                content: cartCount,
                HtmlTag: "span",
                className:
                  "min-w-[20px] min-h-[20px] p-0.5 rounded-[20px] flex items-center justify-center bg-brand text-brand-light absolute -top-2.5 ltr:left-2.5 rtl:right-2.5 text-[10px] font-bold",
              }}
            />
          </div>
          <Text
            {...{
              content: "Cart",
              HtmlTag: "span",
              className:
                "text-sm font-normal lg:text-15px text-brand-dark ltr:ml-2 rtl:mr-2",
            }}
          />
        </button>
        <div className="items-center hidden lg:flex gap-1 xl:mx-3.5 mx-2.5">
          <Image width={20} height={20} src="/icons/user-icon.svg" alt="cart" />
          <Button
            {...{
              children: "Sign In",
              className:
                "text-sm font-normal lg:text-15px text-brand-dark focus:outline-none ltr:ml-2 rtl:mr-2",
            }}
          />
        </div>
      </div>
      {showCart && <CartSideBar {...{ showCart, setShowCart }} />}
    </div>
  );
}

// export default Menu;
