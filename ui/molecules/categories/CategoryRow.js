import Link from "next/link";
import Image from "next/image";

import { Text } from "@/atoms";
import { categoryList } from "@/config/categories";

const CategoryRow = () => (
  <div className="flex flex-col">
    {categoryList.map(({ label }, index) => (
      <Link key={index} href={""}>
        <div className="flex gap-4 cursor-pointer border-b py-3 hover:bg-slate-100 px-4">
          <Image
            width={28}
            height={28}
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

export default CategoryRow;
