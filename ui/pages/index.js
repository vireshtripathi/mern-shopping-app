import DefaultLayout from "@/components/layouts/DefaultLayout";
import HomePageTemplate from "@/templates/HomePageTemplate";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/product.service";
import { viewCartItem } from "@/services/cart.service";

const HomePage = ({ productList }) => {
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const aaa = await viewCartItem();
    };
    fetchData();
    // console.log("products...", aaa);
  }, []);
  return (
    <DefaultLayout {...{ pageTitle: "Home" }}>
      <HomePageTemplate {...{ productList }} />
    </DefaultLayout>
  );
};

export default HomePage;

export async function getStaticProps({ params, locale }) {
  const products = await getProducts();
  return {
    props: {
      productList: products,
    },
  };
}
