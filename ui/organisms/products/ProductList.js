import { Fragment } from "react";
import { ProductCard } from "@/molecules";

const dummyProductList = [{}, {}, {}, {}, {}, {}, {}];

const ProductList = () => (
  <Fragment>
    {dummyProductList.map((index) => (
      <ProductCard key={index} />
    ))}
  </Fragment>
);

export default ProductList;
