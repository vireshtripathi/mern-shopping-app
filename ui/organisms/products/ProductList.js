import { Fragment } from "react";
import { ProductCard } from "@/molecules";

const ProductList = ({ productList }) => (
  <Fragment>
    {productList.map((product, index) => (
      <ProductCard key={index} {...{ ...product }} />
    ))}
  </Fragment>
);

export default ProductList;
