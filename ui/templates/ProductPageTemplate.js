// import ReactDOM from 'react-dom';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ProductList } from "@/organisms";
import { addItemToCart } from "@/services/cart.service";
import { toast } from "react-toastify";
import { useState } from "react";
import Link from "next/link";

const CustomToastWithLink = () => (
  <div>
    Item added to the cart!{" "}
    <Link href="/checkout" className="text-brand">
      Checkout
    </Link>
  </div>
);

const ProductPageTemplate = ({
  title,
  id,
  price,
  description,
  productList = [],
}) => {
  const [qty, setQty] = useState(1);
  const addToCart = (id) => {
    const cartItem = addItemToCart(id, {
      user_id: null,
      prod_id: id,
      qty: qty,
    });
    console.log(cartItem);
    toast.success(CustomToastWithLink);
  };

  const updateQty = (type) => {
    if (type === "plus") {
      setQty(qty + 1);
    }
    if (type === "minus") {
      if (qty > 1) {
        setQty(qty - 1);
      }
    }
  };

  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="pt-6 pb-2 md:pt-7">
        <div className="grid-cols-10 lg:grid gap-7 2xl:gap-8">
          <div className="col-span-4 mb-6 overflow-hidden xl:col-span-5 md:mb-8 lg:mb-0">
            <div className="w-full">
              <div className="w-full  mb-2.5 md:mb-3 overflow-hidden rounded-md relative xl:w-[700px] 2xl:w-[900px]">
                <Carousel showArrows={true}>
                  <div>
                    <img src="/icons/placeholder.svg" />
                    <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img src="/icons/placeholder.svg" />
                    <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img src="/icons/placeholder.svg" />
                    <p className="legend">Legend 3</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-5 shrink-0 xl:col-span-4 xl:ltr:pl-2 xl:rtl:pr-2">
            <div class="pb-3 lg:pb-5">
              <div class="md:mb-2.5 block -mt-1.5">
                <h2 class="text-lg font-medium transition-colors duration-300 text-brand-dark md:text-xl xl:text-2xl">
                  {title}
                </h2>
              </div>
              <div class="flex items-center mt-5">
                <div class="flex gap-1 text-brand-dark font-bold text-base md:text-xl xl:text-[22px]">
                  <Image
                    width={13}
                    height={13}
                    src="/icons/rupee.svg"
                    alt="categories"
                    className="rounded-full"
                  />
                  {price}
                </div>
              </div>
            </div>
            <div class="mb-2 pt-0.5">
              <h4 class="mb-3 font-normal capitalize text-15px text-brand-dark text-opacity-70">
                available in:
              </h4>
              <ul class="flex flex-wrap ltr:-mr-2 rtl:-ml-2">
                <li class="cursor-pointer rounded border h-9 md:h-10 p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 flex justify-center items-center font-medium text-sm md:text-15px text-brand-dark transition duration-200 ease-in-out hover:text-brand hover:border-brand px-3">
                  12oz
                </li>
                <li class="cursor-pointer rounded border h-9 md:h-10 p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 flex justify-center items-center font-medium text-sm md:text-15px text-brand-dark transition duration-200 ease-in-out hover:text-brand hover:border-brand px-3">
                  24oz
                </li>
                <li class="cursor-pointer rounded border h-9 md:h-10 p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 flex justify-center items-center font-medium text-sm md:text-15px text-brand-dark transition duration-200 ease-in-out hover:text-brand hover:border-brand px-3 border-brand text-brand">
                  36oz
                </li>
              </ul>
            </div>
            <div class="pb-2">
              <span class="text-sm font-medium text-yellow">
                Only 25 item left!
              </span>
            </div>
            <div class="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
              <div class="flex items-center justify-between rounded overflow-hidden shrink-0 p-1 h-11 md:h-14 bg-[#f3f5f9]">
                <button
                  onClick={() => {
                    updateQty("minus");
                  }}
                  class="flex items-center justify-center shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none !w-10 !h-10 rounded-full transform scale-80 lg:scale-100 text-brand-dark hover:bg-fill-four ltr:ml-auto rtl:mr-auto"
                >
                  <span class="sr-only">button-minus</span>
                  <svg
                    class="transition-all"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        d="M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0.5"
                      ></path>
                    </g>
                  </svg>
                </button>
                <span class="font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-base md:text-[17px] w-12 md:w-20 xl:w-28 ">
                  {qty}
                </span>
                <button
                  onClick={() => {
                    updateQty("plus");
                  }}
                  class="group flex items-center justify-center h-full shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none pr-2 !w-10 !h-10 rounded-full scale-80 lg:scale-100 text-heading hover:bg-fill-four ltr:mr-auto rtl:ml-auto !pr-0 justify-center"
                  title=""
                >
                  <span class="sr-only">button-plus</span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0.5"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <button
                onClick={() => {
                  addToCart(id);
                }}
                data-variant="primary"
                class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 w-full px-1.5"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ltr:mr-3 rtl:ml-3"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                      fill="#ffffff"
                      stroke="#ffffff"
                      stroke-width="0.1"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="22" height="22" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Add to Cart
              </button>
              <div class="grid grid-cols-2 gap-2.5">
                <button
                  data-variant="border"
                  class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand-light text-brand-dark border border-border-four tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 group hover:text-brand false"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"></path>
                  </svg>
                  Wishlist
                </button>
                <div class="relative group">
                  <button
                    data-variant="border"
                    class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand-light text-brand-dark border border-border-four tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full hover:text-brand false"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
                      ></path>
                    </svg>
                    Share
                  </button>
                  <div class="shadow-card bg-brand-light rounded-md p-4 md:p-6 lg:p-7 absolute z-10 ltr:right-0 rtl:left-0 w-[300px] md:min-w-[400px] transition-all duration-300 opacity-0 invisible top-[130%]">
                    <h3 class="text-brand-dark text-15px sm:text-base font-semibold mb-2">
                      Share in social network
                    </h3>
                    <p class="text-brand-muted text-sm leading-7 lg:leading-[1.85em]">
                      To reach the highest traffic view share this product
                    </p>
                    <div class="flex flex-wrap items-center mb-4 -mx-1">
                      <button
                        aria-label="facebook"
                        class="react-share__ShareButton mx-1"
                      >
                        <svg
                          viewBox="0 0 64 64"
                          width="40"
                          height="40"
                          class="transition-all hover:opacity-90"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="31"
                            fill="#3b5998"
                          ></circle>
                          <path
                            d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                            fill="white"
                          ></path>
                        </svg>
                      </button>
                      <button
                        aria-label="twitter"
                        class="react-share__ShareButton mx-1"
                      >
                        <svg
                          viewBox="0 0 64 64"
                          width="40"
                          height="40"
                          class="transition-all hover:opacity-90"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="31"
                            fill="#00aced"
                          ></circle>
                          <path
                            d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                            fill="white"
                          ></path>
                        </svg>
                      </button>
                      <button
                        aria-label="whatsapp"
                        class="react-share__ShareButton mx-1"
                      >
                        <svg
                          viewBox="0 0 64 64"
                          width="40"
                          height="40"
                          class="transition-all hover:opacity-90"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="31"
                            fill="#25D366"
                          ></circle>
                          <path
                            d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                            fill="white"
                          ></path>
                        </svg>
                      </button>
                      <button
                        aria-label="linkedin"
                        class="react-share__ShareButton mx-1"
                      >
                        <svg
                          viewBox="0 0 64 64"
                          width="40"
                          height="40"
                          class="transition-all hover:opacity-90"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="31"
                            fill="#007fb1"
                          ></circle>
                          <path
                            d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                            fill="white"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <p class="text-brand-muted text-sm leading-7 lg:leading-[1.85em]">
                      or copy link
                    </p>
                    <form novalidate="" class="space-y-5">
                      <div class="relative mt-2.5 mb-1.5">
                        <div class="w-full">
                          <input
                            id="shareLink"
                            placeholder=""
                            class="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark focus:ring-0 text-brand-dark border-border-two focus:border-2 focus:outline-none focus:border-brand h-11 md:h-12 px-4 border-border-base rounded-md focus:outline focus:border-brand"
                            autocomplete="off"
                            spellcheck="false"
                            aria-invalid="false"
                            type="link"
                            value="https://borobazar.vercel.app/products/tate's-bake-shop-cookies-chocolate-chip"
                            name="shareLink"
                          />
                        </div>
                        <span
                          class="absolute ltr:right-0.5 rtl:left-0.5 top-[6%] h-[90%] px-2 text-brand text-sm uppercase font-bold flex items-center bg-brand-light cursor-pointer"
                          role="button"
                        >
                          copy
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <p className="py-6 text-gray-500">{description}</p>
          </div>
        </div>

        <div class="w-full xl:px-2 py-11 lg:py-14 xl:py-16 sm:px-0">
          <div
            class="block border-b border-border-base"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              class="relative inline-block transition-all text-15px lg:text-17px leading-5 text-brand-dark focus:outline-none pb-3 lg:pb-5 hover:text-brand ltr:mr-8 rtl:ml-8 font-semibold after:absolute after:w-full after:h-0.5 after:bottom-0 after:translate-y-[1px] after:ltr:left-0 after:rtl:right-0 after:bg-brand"
              id="headlessui-tabs-tab-:r5:"
              role="tab"
              type="button"
              aria-selected="true"
              tabindex="0"
              data-headlessui-state="selected"
              aria-controls="headlessui-tabs-panel-:r7:"
            >
              Product Details
            </button>
            <button
              class="relative inline-block transition-all text-15px lg:text-17px leading-5 text-brand-dark focus:outline-none pb-3 lg:pb-5 hover:text-brand ltr:mr-8 rtl:ml-8"
              id="headlessui-tabs-tab-:r6:"
              role="tab"
              type="button"
              aria-selected="false"
              tabindex="-1"
              data-headlessui-state=""
              aria-controls="headlessui-tabs-panel-:r8:"
            >
              Review Rating
            </button>
          </div>
          <div class="mt-6 lg:mt-9">
            <div
              class="lg:flex"
              id="headlessui-tabs-panel-:r7:"
              role="tabpanel"
              aria-labelledby="headlessui-tabs-tab-:r5:"
              tabindex="0"
              data-headlessui-state="selected"
            >
              <div class="text-sm sm:text-15px text-brand-muted leading-[2em] space-y-4 lg:space-y-5 xl:space-y-7">
                <p>
                  Go sporty this summer with this vintage navy and white striped
                  v-neck t-shirt from the Abercrombie &amp; Fitch. Perfect for
                  pairing with denim and white kicks for a stylish sporty vibe.
                  Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
                </p>
                <p>
                  Typography is the work of typesetters, compositors,
                  typographers, graphic designers, art directors, manga artists,
                  comic book artists, graffiti artists, and now—anyone who
                  arranges words, letters, numbers, and symbols for publication,
                  display, or distribution—from clerical workers and newsletter
                  writers to anyone self-publishing materials.
                </p>
                <p>
                  Hit your next boxing workout with a combination it’s never
                  seen before in the Combat Drop Arm Tank, including a
                  freedom-instilling regular fit and dropped armhole to allow
                  you to throw jabs and hooks at the punching bag with ease. A
                  lightweight material keeps you fighting fit, and fresh.
                </p>
                <p>
                  Go sporty this summer with this vintage navy and white striped
                  v-neck t-shirt from the Abercrombie &amp; Fitch. Perfect for
                  pairing with denim and white kicks for a stylish sporty vibe.
                  Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
                </p>
              </div>
              <div class="shrink-0 lg:w-[400px] xl:w-[480px] 2xl:w-[550px] 3xl:w-[680px] lg:ltr:pl-10 lg:rtl:pr-10 xl:ltr:pl-14 xl:rtl:pr-14 2xl:ltr:pl-20 2xl:rtl:pr-20 pt-5 lg:pt-0">
                <h3 class="text-brand-dark text-base lg:text-[17px] lg:leading-7 font-medium xl:text-lg mb-4 pt-0.5">
                  Nutrition Facts
                </h3>
                <div class="border rounded border-border-four">
                  <table class="w-full text-brand-dark text-15px">
                    <thead>
                      <tr class="border-b border-border-four">
                        <th class="px-4 pt-3 pb-4 text-sm font-medium lg:px-5 xl:px-6 lg:pb-6 ltr:text-left rtl:text-right lg:text-15px xl:text-base">
                          Amount per serving
                          <span class="block font-semibold text-lg lg:text-xl xl:text-2xl pt-0.5">
                            Calories
                          </span>
                        </th>
                        <th class="border-s border-border-four px-4 lg:px-5 xl:px-6 pt-3 pb-5 ltr:text-right rtl:text-left w-24 lg:w-28 xl:w-36 font-semibold text-2xl lg:text-3xl xl:text-[36px]">
                          70
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="font-normal border-b border-border-four last:border-b-0">
                        <td class="px-4 py-3 lg:px-5 xl:px-6">Total Fat 5g</td>
                        <td class="w-24 px-4 py-3 border-s border-border-four lg:px-5 xl:px-6 ltr:text-right rtl:text-left lg:w-28 xl:w-36">
                          6%
                        </td>
                      </tr>
                      <tr class="font-normal border-b border-border-four last:border-b-0">
                        <td class="px-4 py-3 lg:px-5 xl:px-6">
                          Cholesterol 185mg
                        </td>
                        <td class="w-24 px-4 py-3 border-s border-border-four lg:px-5 xl:px-6 ltr:text-right rtl:text-left lg:w-28 xl:w-36">
                          62%
                        </td>
                      </tr>
                      <tr class="font-normal border-b border-border-four last:border-b-0">
                        <td class="px-4 py-3 lg:px-5 xl:px-6">Sodium 70mg</td>
                        <td class="w-24 px-4 py-3 border-s border-border-four lg:px-5 xl:px-6 ltr:text-right rtl:text-left lg:w-28 xl:w-36">
                          49%
                        </td>
                      </tr>
                      <tr class="font-normal border-b border-border-four last:border-b-0">
                        <td class="px-4 py-3 lg:px-5 xl:px-6">
                          Total Carbohydrate 0g
                        </td>
                        <td class="w-24 px-4 py-3 border-s border-border-four lg:px-5 xl:px-6 ltr:text-right rtl:text-left lg:w-28 xl:w-36">
                          18%
                        </td>
                      </tr>
                      <tr class="font-normal border-b border-border-four last:border-b-0">
                        <td class="px-4 py-3 lg:px-5 xl:px-6">Protein 6g</td>
                        <td class="w-24 px-4 py-3 border-s border-border-four lg:px-5 xl:px-6 ltr:text-right rtl:text-left lg:w-28 xl:w-36">
                          35%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <span
              id="headlessui-tabs-panel-:r8:"
              role="tabpanel"
              aria-labelledby="headlessui-tabs-tab-:r6:"
              tabindex="-1"
            ></span>
          </div>
          <div class="flex flex-wrap items-center justify-between mb-5 md:mb-6">
            <div class="-mt-1.5 mb-0">
              <h2 class="text-brand-dark text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold font-manrope">
                Related products
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <ProductList {...{ productList }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPageTemplate;
