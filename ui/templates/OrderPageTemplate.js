const OrderPageTemplate = () => (
  <div>
    <div class="border-t border-border-base "></div>
    <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div class="py-16 xl:px-32 2xl:px-44 3xl:px-56 lg:py-20">
        <div class="flex items-center justify-start px-4 py-4 mb-6 text-sm border rounded-md border-border-base bg-fill-secondary lg:px-5 text-brand-dark md:text-base lg:mb-8">
          <span class="flex items-center justify-center w-10 h-10 rounded-full ltr:mr-3 rtl:ml-3 lg:ltr:mr-4 lg:rtl:ml-4 bg-brand bg-opacity-20 shrink-0">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="w-5 h-5 text-brand"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
            </svg>
          </span>
          Thank you. Your order has been received.
        </div>
        <ul class="flex flex-col border rounded-md border-border-base bg-fill-secondary md:flex-row mb-7 lg:mb-8 xl:mb-10">
          <li class="px-4 py-4 text-base font-semibold border-b border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r border-border-two lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span class="block text-xs font-normal leading-5 uppercase text-brand-muted">
              Order number:
            </span>
            XRQ4567
          </li>
          <li class="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Date:
            </span>
            April 22, 2021
          </li>
          <li class="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Send Mail:
            </span>
            customer@demo.com
          </li>
          <li class="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Total:
            </span>
            $149.00
          </li>
          <li class="px-4 py-4 text-base font-semibold border-b border-gray-300 border-dashed text-brand-dark lg:text-lg md:border-b-0 md:border-r lg:px-6 xl:px-8 md:py-5 lg:py-6 last:border-0">
            <span class="uppercase text-[11px] block text-brand-muted font-normal leading-5">
              Payment method:
            </span>
            cash on delivery
          </li>
        </ul>
        <p class="mb-8 text-sm text-brand-dark md:text-base">
          Pay with cash upon delivery.
        </p>
        <div class="pt-10 lg:pt-12">
          <h2 class="text-brand-dark text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold font-manrope mb-6 xl:mb-7">
            Order details:
          </h2>
          <table class="w-full text-sm font-semibold text-brand-dark lg:text-base">
            <thead>
              <tr>
                <th class="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">
                  Product
                </th>
                <th class="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="font-normal border-b border-border-base last:border-b-0">
                <td class="p-4">Fresh Green Leaf Lettuce * 10</td>
                <td class="p-4">$50.00</td>
              </tr>
              <tr class="font-normal border-b border-border-base last:border-b-0">
                <td class="p-4">Leafy Romaine Mixed Lettuce * 10</td>
                <td class="p-4">$150.00</td>
              </tr>
              <tr class="font-normal border-b border-border-base last:border-b-0">
                <td class="p-4">Organic Girl Lettuce * 5</td>
                <td class="p-4">$125.00</td>
              </tr>
              <tr class="font-normal border-b border-border-base last:border-b-0">
                <td class="p-4">
                  Organic Firm Fresh White Lettuce - 36oz * 10
                </td>
                <td class="p-4">$350.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="odd:bg-fill-secondary">
                <td class="p-4 italic">Subtotal:</td>
                <td class="p-4">$132.00</td>
              </tr>
              <tr class="odd:bg-fill-secondary">
                <td class="p-4 italic">Shipping:</td>
                <td class="p-4">
                  $17.00
                  <span class="text-[13px] font-normal ltr:pl-1.5 rtl:pr-1.5 inline-block">
                    via Flat rate
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-fill-secondary">
                <td class="p-4 italic">Payment method:</td>
                <td class="p-4">cash on delivery</td>
              </tr>
              <tr class="odd:bg-fill-secondary">
                <td class="p-4 italic">Total:</td>
                <td class="p-4">$149.00</td>
              </tr>
              <tr class="odd:bg-fill-secondary">
                <td class="p-4 italic">Note:</td>
                <td class="p-4">new order</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default OrderPageTemplate;
