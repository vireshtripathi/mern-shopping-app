import DefaultLayout from "@/components/layouts/DefaultLayout";
import HomePageTemplate from "@/templates/HomePageTemplate";

const HomePage = () => {
  return (
    <DefaultLayout {...{ pageTitle: "Home" }}>
      <HomePageTemplate />
    </DefaultLayout>
  );
};

export default HomePage;
