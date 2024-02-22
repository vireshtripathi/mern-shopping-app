import DefaultLayout from "@/components/layouts/DefaultLayout";
import { getProduct, getProducts } from "@/services/product.service";
import ProductPageTemplate from "@/templates/ProductPageTemplate";

const Products = ({ product, productList = [] }) => {
  return (
    <DefaultLayout {...{ pageTitle: "Home" }}>
      <ProductPageTemplate {...{ ...product, productList }} />
    </DefaultLayout>
  );
};

export default Products;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const product = await getProduct(slug);
  const productList = await getProducts();
  console.log(slug);
  return {
    props: {
      product,
      productList,
    },
  };
}

export const getStaticPaths = async () => {
  // Fetch the possible values for [slug] from your API
  const response = await getProducts();
  const products = response.data;
  console.log("products", products);

  // Map the product data to an array of paths
  const paths = [];
  console.log(paths);
  return { paths, fallback: true }; // Set fallback to true or false based on your requirements
};
