import { ProductCard } from "@/molecules";

const dummyProductList = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

const ProductList = () => (
  <div className="flex flex-wrap gap-4">
    {dummyProductList.map((index) => (
      <ProductCard key={index} />
    ))}
  </div>
);

export default ProductList;
