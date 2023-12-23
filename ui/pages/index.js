import DefaultLayout from "@/components/layouts/DefaultLayout";
import HomePageTemplate from "@/templates/HomePageTemplate";

import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "@/services/connections.service";
import { getProducts } from "@/services/product.service";

const HomePage = ({ productList }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const aaa = await getProducts();
  //   };
  //   fetchData();
  // }, []);
  console.log("products...", productList);
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
