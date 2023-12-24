import { Fragment } from "react";
import Image from "next/image";
import { uiContext } from "@/context/ManagedUiContext";

import { Text } from "@/atoms";

const CartSideBar = ({ showCart, setShowCart }) => {
  //   const uiContext = useUIContext();
  const { cart, text } = uiContext();
  console.log("content=>Cart", cart);
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
          <div
            data-overlayscrollbars-initialize=""
            data-overlayscrollbars="host"
          >
            <div className="os-size-observer">
              <div className="os-size-observer-listener ltr"></div>
            </div>
            <div
              data-overlayscrollbars-contents=""
              data-overlayscrollbars-viewport="scrollbarHidden"
            >
              <div className="w-full px-5 md:px-7 h-[calc(100vh_-_300px)]">
                {text}
                {cart.map((item) => {
                  "Hello";
                })}
                <div
                  className="group w-full h-auto flex justify-start items-center text-brand-light py-4 md:py-7 border-b border-border-one border-opacity-70 relative last:border-b-0"
                  title="Organic Girl Lettuce"
                >
                  <div className="relative flex rounded overflow-hidden shrink-0 cursor-pointer w-[90px] md:w-[100px] h-[90px] md:h-[100px]">
                    <img
                      alt="Organic Girl Lettuce"
                      loading="eager"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="object-cover bg-fill-thumbnail"
                      srcset="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=256&amp;q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=256&amp;q=75"
                    />
                    <div
                      className="absolute top-0 flex items-center justify-center w-full h-full transition duration-200 ease-in-out bg-black ltr:left-0 rtl:right-0 bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30"
                      role="button"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="relative text-2xl text-white transition duration-300 ease-in-out transform md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                ;
              </div>
            </div>
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
