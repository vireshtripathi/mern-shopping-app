import { Fragment } from "react";
import Image from "next/image";
import { uiContext } from "@/context/ManagedUiContext";

import { Text } from "@/atoms";

const CartSideBar = ({ showCart, setShowCart }) => {
  const { cart, text } = uiContext();
  const closeCartSideBar = () => {
    setShowCart(false);
  };
  return (
    <Fragment>
      <div className="bg-black bg-opacity-70 fixed w-full h-screen overflow-auto top-0 left-0 z-20 transition-opacity"></div>
      {text}
      <div className="w-96 bg-white bg-opacity-90 fixed right-0 top-0 min-h-screen z-20">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="relative flex items-center justify-between w-full border-b ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 border-border-base">
            <h3 className="text-brand-dark font-semibold text-brand-dark text-xl">
              Shopping Cart
            </h3>
            <div className="flex items-center">
              <button
                className="flex flex-shrink items-center text-15px transition duration-150 ease-in focus:outline-none text-brand-dark opacity-50 hover:opacity-100 ltr:-mr-1.5 rtl:-ml-1.5"
                aria-label="Clear All"
              >
                <Image
                  src="/icons/delete.svg"
                  width={15}
                  height={15}
                  alt="delete"
                />
                <Text
                  {...{ content: "Clear All", className: "flex self-center" }}
                />
              </button>
              <button
                className="flex items-center justify-center px-4 py-6 text-2xl transition-opacity md:px-6 lg:py-7 focus:outline-none text-brand-dark hover:opacity-60"
                aria-label="close"
                onClick={closeCartSideBar}
              >
                <Image
                  src="/icons/close.svg"
                  width={15}
                  height={15}
                  alt="close"
                />
              </button>
            </div>
          </div>
          <div className="w-full px-5 md:px-7 h-[calc(100vh_-_300px)] overflow-auto">
            {cart.map(({ Product, id }, index) => (
              <div
                key={index}
                className="group w-full h-auto flex gap-2 justify-start items-center text-brand-light py-4 md:py-2 border-b border-border-one border-opacity-70 relative last:border-b-0"
                title={Product.ProductMedia?.name}
                id={id}
              >
                <div className="relative flex rounded overflow-hidden shrink-0 cursor-pointer w-[90px] md:w-[50px] h-[90px] md:h-[50px]">
                  <Image
                    alt={Product.ProductMedia.name}
                    src={`/product/${
                      Product.ProductMedia[0]?.source
                        ? Product.ProductMedia[0]?.source
                        : "placeholder.svg"
                    }`}
                    width="50"
                    height="50"
                    className="object-cover bg-fill-thumbnail"
                  />

                  <div
                    className="absolute top-0 flex items-center justify-center w-full h-full transition duration-200 ease-in-out bg-black ltr:left-0 rtl:right-0 bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30"
                    role="button"
                  >
                    <div className="relative text-2xl text-white transition duration-300 ease-in-out transform md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100">
                      <Image
                        src="/icons/close-white.svg"
                        width="15"
                        height="15"
                        alt="close icon"
                      />
                    </div>
                  </div>
                </div>
                <Text {...{ content: Product.title }} />
              </div>
            ))}
          </div>
          <div className="px-5 pt-5 pb-5 border-t border-border-base md:px-7 md:pt-6 md:pb-6">
            <div className="flex pb-5 md:pb-7">
              <div className="ltr:pr-3 rtl:pl-3">
                <h3 className="text-brand-dark text-15px sm:text-base font-semibold mb-2.5">
                  Subtotal:
                </h3>
                <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px leading-6">
                  Final price and discounts will be determined at the time of
                  payment processing.
                </p>
              </div>
              <div className="shrink-0 font-semibold text-base md:text-lg text-brand-dark -mt-0.5 min-w-[80px] ltr:text-right rtl:text-left">
                $10.80
              </div>
            </div>
            <div className="flex flex-col">
              <a
                className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-brand-light bg-brand focus:outline-none transition duration-300 hover:bg-opacity-90"
                href="/antique/checkout"
              >
                <span className="py-0.5">Proceed To Checkout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartSideBar;
