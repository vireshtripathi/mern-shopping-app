const Breadcrumb = () => (
  <div class="flex items-center borobazarBreadcrumb">
    <ol class="flex items-center w-full overflow-hidden">
      <li class="text-sm text-brand-muted px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-brand-dark">
        <a class="inline-flex items-center" href="/antique">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="ltr:mr-1.5 rtl:ml-1.5 text-brand-dark text-15px"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
            ></path>
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
            ></path>
          </svg>
          Home{" "}
        </a>
      </li>
      <li class="text-base text-brand-dark mt-[1px]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-brand-dark text-opacity-40 text-15px"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M184 112l144 144-144 144"
          ></path>
        </svg>
      </li>
      <li class="text-sm text-brand-muted px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-brand-dark">
        <a class="capitalize" href="/products">
          products
        </a>
      </li>
      <li class="text-base text-brand-dark mt-[1px]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-brand-dark text-opacity-40 text-15px"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M184 112l144 144-144 144"
          ></path>
        </svg>
      </li>
      <li class="text-sm text-brand-muted px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-brand-dark">
        <a
          class="capitalize"
          href="/products/tate's-bake-shop-cookies-chocolate-chip"
        >
          tate's bake shop cookies chocolate chip
        </a>
      </li>
    </ol>
  </div>
);

export default Breadcrumb;
