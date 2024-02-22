const CheckoutPageTemplate = () => (
  <div class="py-10 2xl:py-12 checkout mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
    <div class="flex flex-col mx-auto xl:max-w-screen-xl">
      <div class="flex flex-col flex-wrap grid-cols-1 gap-x-7 xl:gap-x-8 lg:grid lg:grid-cols-12">
        <div class="w-full col-start-1 col-end-9">
          <div class="border rounded-md border-border-base text-brand-light">
            <div
              class="accordion__panel border-b border-border-base expanded
                   "
            >
              <div
                id="index_0"
                class="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
              >
                <span class="flex items-center justify-center font-semibold border-2 border-current rounded-full h-9 w-9 text-brand ltr:mr-3 rtl:ml-3">
                  1
                </span>
                <h3 class="text-brand-dark text-15px sm:text-base font-semibold">
                  Delivery Address
                </h3>
              </div>
              <div
                data-aria-label="index_0"
                class="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
              >
                <div class="mb-6">
                  <div class="flex flex-col justify-between h-full -mt-4 text-15px md:mt-0">
                    <div
                      class="space-y-4 md:grid md:grid-cols-2 md:gap-5 auto-rows-auto md:space-y-0"
                      id="headlessui-radiogroup-:r27:"
                      role="radiogroup"
                      aria-labelledby="headlessui-label-:r28:"
                    >
                      <label
                        class="sr-only"
                        id="headlessui-label-:r28:"
                        role="none"
                      >
                        address
                      </label>
                      <div
                        class="border-brand
                                  border-2 relative focus:outline-none rounded-md p-5 block cursor-pointer min-h-[112px] h-full group address__box"
                        id="headlessui-radiogroup-option-:r29:"
                        role="radio"
                        aria-checked="true"
                        tabindex="0"
                        data-headlessui-state="checked"
                        aria-labelledby="headlessui-label-:r2a:"
                        aria-describedby="headlessui-description-:r2b:"
                      >
                        <h3
                          class="mb-2 -mt-1 font-semibold text-brand-dark "
                          id="headlessui-label-:r2a:"
                        >
                          Home
                        </h3>
                        <div
                          class="leading-6 text-brand-muted"
                          id="headlessui-description-:r2b:"
                        >
                          Wolfson Institute of Preventive Medicine, London EC1M
                          7BA, UK
                        </div>
                        <div class="absolute z-10 flex transition-all ltr:right-3 rtl:left-3 top-3 lg:opacity-0 address__actions">
                          <button class="flex items-center justify-center w-6 h-6 text-base rounded-full bg-brand text-brand-light text-opacity-80">
                            <span class="sr-only">Home</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              version="1.2"
                              baseProfile="tiny"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        class="border-border-base
                                  border-2 relative focus:outline-none rounded-md p-5 block cursor-pointer min-h-[112px] h-full group address__box"
                        id="headlessui-radiogroup-option-:r2c:"
                        role="radio"
                        aria-checked="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-:r2d:"
                        aria-describedby="headlessui-description-:r2e:"
                      >
                        <h3
                          class="mb-2 -mt-1 font-semibold text-brand-dark "
                          id="headlessui-label-:r2d:"
                        >
                          Office
                        </h3>
                        <div
                          class="leading-6 text-brand-muted"
                          id="headlessui-description-:r2e:"
                        >
                          80 Windsor Park Rd, Singapore 574175
                        </div>
                        <div class="absolute z-10 flex transition-all ltr:right-3 rtl:left-3 top-3 lg:opacity-0 address__actions">
                          <button class="flex items-center justify-center w-6 h-6 text-base rounded-full bg-brand text-brand-light text-opacity-80">
                            <span class="sr-only">Office</span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              version="1.2"
                              baseProfile="tiny"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button
                        class="w-full border-2 transition-all border-border-base rounded font-semibold p-5 px-10 cursor-pointer text-brand flex justify-start hover:border-brand items-center min-h-[112px] h-full"
                        role="none"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          class="ltr:mr-2 rtl:ml-2"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          role="none"
                        >
                          <path
                            d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"
                            role="none"
                          ></path>
                          <path
                            d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"
                            role="none"
                          ></path>
                        </svg>
                        Add Address
                      </button>
                    </div>
                    <div class="flex mt-5 sm:justify-end md:mt-10 lg:mt-20 save-change-button">
                      <button
                        data-variant="primary"
                        class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 w-full sm:w-auto"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
                <div class="ltr:text-right rtl:text-left">
                  <button
                    data-variant="formButton"
                    class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                  >
                    Next Steps
                  </button>
                </div>
              </div>
            </div>
            <div
              class="accordion__panel border-b border-border-base collapsed
                   "
            >
              <div
                id="index_1"
                class="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
              >
                <span class="flex items-center justify-center font-semibold border-2 border-current rounded-full h-9 w-9 text-brand ltr:mr-3 rtl:ml-3">
                  2
                </span>
                <h3 class="text-brand-dark text-15px sm:text-base font-semibold">
                  Delivery Schedule
                </h3>
              </div>
              <div
                data-aria-label="index_1"
                class="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
              >
                <div class="mb-6">
                  <div class="w-full">
                    <div class="w-full mx-auto">
                      <div
                        id="headlessui-radiogroup-:r2f:"
                        role="radiogroup"
                        aria-labelledby="headlessui-label-:r2g:"
                      >
                        <label
                          class="sr-only"
                          id="headlessui-label-:r2g:"
                          role="none"
                        >
                          Delivery Schedule
                        </label>
                        <div
                          class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6"
                          role="none"
                        >
                          <div
                            class="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-brand text-brand-light"
                            id="headlessui-radiogroup-option-:r2h:"
                            role="radio"
                            aria-checked="true"
                            tabindex="0"
                            data-headlessui-state="checked"
                            aria-labelledby="headlessui-label-:r2i:"
                            aria-describedby="headlessui-description-:r2j:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-brand-light"
                                id="headlessui-label-:r2i:"
                              >
                                Sat
                              </p>
                              <span
                                class="text-15px text-brand-light"
                                id="headlessui-description-:r2j:"
                              >
                                {" "}
                                Jul 03
                              </span>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r2k:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r2l:"
                            aria-describedby="headlessui-description-:r2m:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-gray-900"
                                id="headlessui-label-:r2l:"
                              >
                                Sun
                              </p>
                              <span
                                class="text-15px text-gray-500"
                                id="headlessui-description-:r2m:"
                              >
                                {" "}
                                Jul 04
                              </span>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r2n:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r2o:"
                            aria-describedby="headlessui-description-:r2p:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-gray-900"
                                id="headlessui-label-:r2o:"
                              >
                                Mon
                              </p>
                              <span
                                class="text-15px text-gray-500"
                                id="headlessui-description-:r2p:"
                              >
                                {" "}
                                Jul 05
                              </span>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r2q:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r2r:"
                            aria-describedby="headlessui-description-:r2s:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-gray-900"
                                id="headlessui-label-:r2r:"
                              >
                                Tus
                              </p>
                              <span
                                class="text-15px text-gray-500"
                                id="headlessui-description-:r2s:"
                              >
                                {" "}
                                Jul 06
                              </span>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r2t:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r2u:"
                            aria-describedby="headlessui-description-:r2v:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-gray-900"
                                id="headlessui-label-:r2u:"
                              >
                                Wed
                              </p>
                              <span
                                class="text-15px text-gray-500"
                                id="headlessui-description-:r2v:"
                              >
                                {" "}
                                Jul 07{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="mt-10"
                        id="headlessui-radiogroup-:r30:"
                        role="radiogroup"
                        aria-labelledby="headlessui-label-:r31:"
                      >
                        <label
                          class="sr-only"
                          id="headlessui-label-:r31:"
                          role="none"
                        >
                          Delivery Schedule
                        </label>
                        <div
                          class="flex flex-wrap justify-between grid-cols-2 gap-4 lg:grid sm:grid-cols-3 lg:grid-cols-5"
                          role="none"
                        >
                          <div
                            class="cursor-pointer focus:outline-none"
                            id="headlessui-radiogroup-option-:r32:"
                            role="radio"
                            aria-checked="true"
                            tabindex="0"
                            data-headlessui-state="checked"
                            aria-labelledby="headlessui-label-:r33:"
                          >
                            <div class="flex items-center">
                              <span class="flex w-6 h-6 rounded-full border-[6px] border-brand"></span>
                              <p
                                class="text-sm text-black ltr:ml-2 rtl:mr-2"
                                id="headlessui-label-:r33:"
                              >
                                9am to 10am
                              </p>
                            </div>
                          </div>
                          <div
                            class="cursor-pointer focus:outline-none"
                            id="headlessui-radiogroup-option-:r34:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r35:"
                          >
                            <div class="flex items-center">
                              <span class="flex w-6 h-6 rounded-full border-2 border-gray-200"></span>
                              <p
                                class="text-sm text-black ltr:ml-2 rtl:mr-2"
                                id="headlessui-label-:r35:"
                              >
                                3pm to 5pm
                              </p>
                            </div>
                          </div>
                          <div
                            class="cursor-pointer focus:outline-none"
                            id="headlessui-radiogroup-option-:r36:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r37:"
                          >
                            <div class="flex items-center">
                              <span class="flex w-6 h-6 rounded-full border-2 border-gray-200"></span>
                              <p
                                class="text-sm text-black ltr:ml-2 rtl:mr-2"
                                id="headlessui-label-:r37:"
                              >
                                6pm to 8pm
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ltr:text-right rtl:text-left">
                  <button
                    data-variant="formButton"
                    class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                  >
                    Next Steps
                  </button>
                </div>
              </div>
            </div>
            <div
              class="accordion__panel border-b border-border-base collapsed
                   "
            >
              <div
                id="index_2"
                class="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
              >
                <span class="flex items-center justify-center font-semibold border-2 border-current rounded-full h-9 w-9 text-brand ltr:mr-3 rtl:ml-3">
                  3
                </span>
                <h3 class="text-brand-dark text-15px sm:text-base font-semibold">
                  Contact Number
                </h3>
              </div>
              <div
                data-aria-label="index_2"
                class="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
              >
                <div class="mb-6">
                  <div class="w-full max-w-[1300px] mx-auto">
                    <div class="flex flex-wrap">
                      <div class="w-full">
                        <div class="text-[15px] text-brand-dark ">
                          <div
                            class="grid grid-cols-1 gap-5 md:grid-cols-2 auto-rows-auto"
                            id="headlessui-radiogroup-:r38:"
                            role="radiogroup"
                            aria-labelledby="headlessui-label-:r39:"
                          >
                            <label
                              class="sr-only"
                              id="headlessui-label-:r39:"
                              role="none"
                            >
                              Default
                            </label>
                            <div
                              class="border-border-base
                                           border-brand
                                           border-2 relative focus:outline-none rounded p-5 block cursor-pointer min-h-[112px] h-full group address__box"
                              id="headlessui-radiogroup-option-:r3a:"
                              role="radio"
                              aria-checked="true"
                              tabindex="0"
                              data-headlessui-state="checked"
                              aria-labelledby="headlessui-label-:r3b:"
                              aria-describedby="headlessui-description-:r3c:"
                            >
                              <h2
                                class="mb-2 font-semibold"
                                id="headlessui-label-:r3b:"
                              >
                                Primary Number
                              </h2>
                              <div
                                class="opacity-70"
                                id="headlessui-description-:r3c:"
                              >
                                (202) 555-0191
                              </div>
                              <div class="absolute z-30 flex transition-all ltr:right-3 rtl:left-3 top-3 lg:opacity-0 address__actions">
                                <button class="flex items-center justify-center w-6 h-6 text-base rounded-full bg-brand text-brand-light text-opacity-80">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    version="1.2"
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div
                              class="border-border-base
                                           border-border-base
                                           border-2 relative focus:outline-none rounded p-5 block cursor-pointer min-h-[112px] h-full group address__box"
                              id="headlessui-radiogroup-option-:r3d:"
                              role="radio"
                              aria-checked="false"
                              tabindex="-1"
                              data-headlessui-state=""
                              aria-labelledby="headlessui-label-:r3e:"
                              aria-describedby="headlessui-description-:r3f:"
                            >
                              <h2
                                class="mb-2 font-semibold"
                                id="headlessui-label-:r3e:"
                              >
                                Secondary Number
                              </h2>
                              <div
                                class="opacity-70"
                                id="headlessui-description-:r3f:"
                              >
                                (202) 555-0701
                              </div>
                              <div class="absolute z-30 flex transition-all ltr:right-3 rtl:left-3 top-3 lg:opacity-0 address__actions">
                                <button class="flex items-center justify-center w-6 h-6 text-base rounded-full bg-brand text-brand-light text-opacity-80">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    version="1.2"
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <button
                              class="border-2 transition-all border-border-base rounded font-semibold p-5 px-10 cursor-pointer text-brand flex justify-start hover:border-brand items-center min-h-[112px] h-full"
                              role="none"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 1024 1024"
                                class="ltr:mr-2 rtl:ml-2"
                                height="18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                                role="none"
                              >
                                <path
                                  d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"
                                  role="none"
                                ></path>
                                <path
                                  d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"
                                  role="none"
                                ></path>
                              </svg>
                              Add Phone Number
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ltr:text-right rtl:text-left">
                  <button
                    data-variant="formButton"
                    class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                  >
                    Next Steps
                  </button>
                </div>
              </div>
            </div>
            <div
              class="accordion__panel border-b border-border-base collapsed
                   "
            >
              <div
                id="index_3"
                class="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
              >
                <span class="flex items-center justify-center font-semibold border-2 border-current rounded-full h-9 w-9 text-brand ltr:mr-3 rtl:ml-3">
                  4
                </span>
                <h3 class="text-brand-dark text-15px sm:text-base font-semibold">
                  Payment Option
                </h3>
              </div>
              <div
                data-aria-label="index_3"
                class="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
              >
                <div class="mb-6">
                  <div class="w-full bg-white rounded-xl xl:w-[500px]">
                    <h3 class="text-brand-dark opacity-60 mb-3">
                      Enter card info
                    </h3>
                    <div class="StripeElement StripeElement--empty">
                      <div class="__PrivateStripeElement">
                        <iframe
                          name="__privateStripeFrame83712"
                          frameborder="0"
                          allowtransparency="true"
                          scrolling="no"
                          role="presentation"
                          allow="payment *"
                          src="https://js.stripe.com/v3/elements-inner-card-544f854ea5c303d66684e5fe097cf46a.html#wait=false&amp;mids[guid]=47788e56-d0d8-4442-85ee-b39d45a6e94d7aab64&amp;mids[muid]=d0a53eb8-e79a-4a08-92e3-883fb49e0909cd9a83&amp;mids[sid]=d580250e-d33d-4fbe-9b7b-273d0d1fbbbcd871e0&amp;rtl=false&amp;componentName=card&amp;keyMode=unknown&amp;apiKey=Put+your+stripe+public+key+here&amp;referrer=https%3A%2F%2Fborobazar.vercel.app%2Fantique%2Fcheckout&amp;controllerId=__privateStripeController8371"
                          title="Secure card payment input frame"
                        ></iframe>
                        <input
                          class="__PrivateStripeElement-input"
                          aria-hidden="true"
                          aria-label=" "
                          autocomplete="false"
                          maxlength="1"
                        />
                      </div>
                    </div>
                    <button
                      data-variant="formButton"
                      class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 h-11 md:h-12  mt-5"
                      type="button"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
                <div class="ltr:text-right rtl:text-left">
                  <button
                    data-variant="formButton"
                    class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                  >
                    Next Steps
                  </button>
                </div>
              </div>
            </div>
            <div
              class="accordion__panel border-b border-border-base collapsed
                   "
            >
              <div
                id="index_4"
                class="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
              >
                <span class="flex items-center justify-center font-semibold border-2 border-current rounded-full h-9 w-9 text-brand ltr:mr-3 rtl:ml-3">
                  5
                </span>
                <h3 class="text-brand-dark text-15px sm:text-base font-semibold">
                  Delivery Instructions (optional)
                </h3>
              </div>
              <div
                data-aria-label="index_4"
                class="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
              >
                <div class="mb-6">
                  <div class="w-full">
                    <div class="w-full mx-auto">
                      <form novalidate="">
                        <div class="mb-6">
                          <div>
                            <label
                              for="instructionNote"
                              class="block text-brand-dark opacity-70 font-normal text-13px lg:text-sm leading-none mb-3 cursor-pointer"
                            >
                              Delivery Instructions Note
                            </label>
                            <textarea
                              id="instructionNote"
                              name="instructionNote"
                              class="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-brand-dark text-13px lg:text-sm focus:outline-none focus:ring-0 placeholder-[#B3B3B3] bg-white border border-border-two focus:shadow focus:outline-none focus:border-heading focus:border-2 focus:outline-none focus:border-brand"
                              autocomplete="off"
                              spellcheck="false"
                              rows="4"
                              placeholder=""
                            ></textarea>
                          </div>
                        </div>
                        <div class="mb-6">
                          <input
                            id="default-type"
                            class="w-5 h-5 transition duration-500 ease-in-out border border-gray-300 rounded cursor-pointer form-checkbox focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none focus:checked:bg-brand hover:checked:bg-brand checked:bg-brand"
                            type="checkbox"
                            name="default"
                          />
                          <label
                            for="default-type"
                            class="font-medium align-middle ltr:ml-3 rtl:mr-3 text-brand-dark text-15px"
                          >
                            Leave at my door if I am not around
                          </label>
                          <p class="text-brand-muted text-sm leading-7 lg:leading-[1.85em] ltr:ml-8 rtl:mr-8 pt-2.5">
                            By selecting this option you accept full
                            responsibility for your order after it has been
                            delivered unattended, including any loss due to
                            theft or damage due to temperature sensitivity.
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="ltr:text-right rtl:text-left">
                  <button
                    data-variant="formButton"
                    class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 px-4 py-3 text-sm font-semibold rounded bg-brand text-brand-light"
                  >
                    Next Steps
                  </button>
                </div>
              </div>
            </div>
            <div
              class="accordion__panel  collapsed
                   "
            >
              <div
                id="index_5"
                class="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button"
              >
                <span class="flex items-center justify-center font-semibold border-2 border-current rounded-full h-9 w-9 text-brand ltr:mr-3 rtl:ml-3">
                  6
                </span>
                <h3 class="text-brand-dark text-15px sm:text-base font-semibold">
                  Delivery Tip
                </h3>
              </div>
              <div
                data-aria-label="index_5"
                class="pb-6 ltr:pl-5 rtl:pr-5 sm:ltr:pl-9 sm:rtl:pr-9 lg:ltr:pl-20 lg:rtl:pr-20 sm:ltr:pr-9 sm:rtl:pl-9 ltr:pr-5 rtl:pl-5 accordion__content"
              >
                <div class="mb-6">
                  <div class="w-full">
                    <div class="w-full mx-auto">
                      <div
                        id="headlessui-radiogroup-:r3g:"
                        role="radiogroup"
                        aria-labelledby="headlessui-label-:r3h:"
                      >
                        <label
                          class="sr-only"
                          id="headlessui-label-:r3h:"
                          role="none"
                        >
                          Delivery Tip
                        </label>
                        <div
                          class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6"
                          role="none"
                        >
                          <div
                            class="relative rounded-lg px-5 py-4 cursor-pointer focus:outline-none bg-brand text-white"
                            id="headlessui-radiogroup-option-:r3i:"
                            role="radio"
                            aria-checked="true"
                            tabindex="0"
                            data-headlessui-state="checked"
                            aria-labelledby="headlessui-label-:r3j:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-brand-light"
                                id="headlessui-label-:r3j:"
                              >
                                $5
                              </p>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-4 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r3k:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r3l:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-brand-dark"
                                id="headlessui-label-:r3l:"
                              >
                                $10
                              </p>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-4 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r3m:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r3n:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-brand-dark"
                                id="headlessui-label-:r3n:"
                              >
                                $15
                              </p>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-4 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r3o:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r3p:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-brand-dark"
                                id="headlessui-label-:r3p:"
                              >
                                $20
                              </p>
                            </div>
                          </div>
                          <div
                            class="relative rounded-lg px-5 py-4 cursor-pointer focus:outline-none bg-gray-100"
                            id="headlessui-radiogroup-option-:r3q:"
                            role="radio"
                            aria-checked="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-label-:r3r:"
                          >
                            <div class="text-center">
                              <p
                                class="text-base font-semibold  text-brand-dark"
                                id="headlessui-label-:r3r:"
                              >
                                $25
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full col-start-9 col-end-13 mt-7 lg:mt-0">
          <div class="px-4 pt-4 border rounded-md border-border-base text-brand-light xl:py-6 xl:px-7">
            <div class="flex pb-2 text-sm font-semibold rounded-md text-heading">
              <span class="font-medium text-15px text-brand-dark">Product</span>
              <span class="font-medium ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
                Subtotal
              </span>
            </div>
            <div class="flex items-center py-4 border-b border-border-base ">
              <div class="flex w-16 h-16 border rounded-md border-border-base shrink-0">
                <img
                  alt="item image"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  class="rounded-md ltr:mr-5 rtl:ml-5"
                  srcset="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=128&amp;q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=128&amp;q=75"
                />
              </div>
              <h6 class="font-normal text-15px text-brand-dark ltr:pl-3 rtl:pr-3">
                Organic Spring Mix
              </h6>
              <div class="flex font-normal ltr:ml-auto rtl:mr-auto text-15px text-brand-dark ltr:pl-2 rtl:pr-2 shrink-0">
                $7.80
              </div>
            </div>
            <div class="flex items-center py-4 border-b border-border-base ">
              <div class="flex w-16 h-16 border rounded-md border-border-base shrink-0">
                <img
                  alt="item image"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  class="rounded-md ltr:mr-5 rtl:ml-5"
                  srcset="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=128&amp;q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&amp;w=128&amp;q=75"
                />
              </div>
              <h6 class="font-normal text-15px text-brand-dark ltr:pl-3 rtl:pr-3">
                Leafy Romaine Mixed Lettuce
              </h6>
              <div class="flex font-normal ltr:ml-auto rtl:mr-auto text-15px text-brand-dark ltr:pl-2 rtl:pr-2 shrink-0">
                $10.00
              </div>
            </div>
            <div class="flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px text-brand-dark last:border-b-0 last:text-base last:pb-0">
              Subtotal
              <span class="font-normal ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
                $17.80
              </span>
            </div>
            <div class="flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px text-brand-dark last:border-b-0 last:text-base last:pb-0">
              Shipping
              <span class="font-normal ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
                $0
              </span>
            </div>
            <div class="flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px text-brand-dark last:border-b-0 last:text-base last:pb-0">
              Total
              <span class="font-normal ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
                $17.80
              </span>
            </div>
            <button
              data-variant="formButton"
              class="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 w-full mt-8 mb-5 rounded font-semibold px-4 py-3 transition-all !bg-brand !text-brand-light"
            >
              Order Now
            </button>
          </div>
          <p class="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px mt-8">
            By placing your order, you agree to be bound by the BoroBazar{" "}
            <a class="font-medium underline text-brand" href="/antique/terms">
              Terms of Service{" "}
            </a>
            and{" "}
            <a class="font-medium underline text-brand" href="/antique/privacy">
              Privacy
            </a>
            . Your credit/debit card data will not saved.
          </p>
          <p class="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px mt-4">
            A bag fee may be added to your final total if required by law or the
            retailer. The fee will be visible on your receipt after delivery.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CheckoutPageTemplate;
