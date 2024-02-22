import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, title, price }) => (
  <article
    className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full border"
    title=""
  >
    <div className="relative shrink-0">
      <div className="overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative p-4">
        <Image
          width={170}
          height={170}
          src="/icons/placeholder.svg"
          alt="categories"
          className="rounded-full"
        />
      </div>
      <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
        <div className="block product-count-button-position">
          <Link
            href={`/products/${id}`}
            className="inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 text-brand-light focus:outline-none focus-visible:outline-none"
            aria-label="Count Button"
          >
            <Image
              width={10}
              height={10}
              src="/icons/view-icon.svg"
              alt="categories"
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
      <div className="mb-1 lg:mb-1.5 -mx-1">
        <span className="flex gap-1 mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
          <Image
            width={10}
            height={10}
            src="/icons/rupee.svg"
            alt="categories"
            className="rounded-full"
          />
          {price}
        </span>
      </div>
      <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
        {title}
      </h2>
    </div>
  </article>
);

export default ProductCard;
