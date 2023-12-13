import { Text } from "@/atoms";
import { AlertMessage, Banner, Categories, Footer, Menu } from "@/molecules";
import { ProductList } from "@/organisms";

const HomePageTemplate = () => (
  <div>
    <AlertMessage />
    <Menu />
    <Banner />
    <div className="text-center">
      <Text
        {...{
          content: "What product you love to order",
          className: "text-2xl font-semibold",
        }}
      />
      <Text
        {...{
          content: "Here order your favorite product from different categories",
          className: "text-xl text-dim-gray py-2",
        }}
      />
    </div>
    <div className="container my-10">
      <Categories />
    </div>
    <div className="text-center">
      <Text
        {...{
          content: "Best seller products near you",
          className: "text-2xl font-semibold",
        }}
      />
      <Text
        {...{
          content: "We provide best quality items near your location",
          className: "text-xl text-dim-gray py-2",
        }}
      />
    </div>
    <div className="container my-10">
      <ProductList />
    </div>
    <Footer />
  </div>
);

export default HomePageTemplate;
