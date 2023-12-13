import Link from "next/link";
import Image from "next/image";

import { Text } from "@/atoms";
import { categoryList } from "@/config/categories";

const Categories = () => (
  <div className="flex flex-wrap justify-center gap-10">
    {categoryList.map(({ label }, index) => (
      <Link key={index} href={""}>
        <div className="w-36 flex flex-col gap-4 cursor-pointer hover:underline">
          <Image
            width={140}
            height={140}
            src="/icons/placeholder.svg"
            alt="categories"
            className="rounded-full"
          />
          <Text
            {...{
              content: label,
              className: "text-base font-medium text-center",
            }}
          />
        </div>
      </Link>
    ))}
  </div>
);

export default Categories;
