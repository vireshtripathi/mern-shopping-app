import { AlertMessage, Footer, Menu } from "@/molecules";
import Head from "next/head";

const DefaultLayout = ({
  children,
  heading,
  isFooder = true,
  isHeader = true,
  pageMetaTitle,
  pageTitle,
}) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageMetaTitle} key="title" />
      </Head>
      <AlertMessage />
      <Menu />
      <main className="mx-10 my-10">{children}</main>

      {isFooder && <Footer />}
    </div>
  );
};

export default DefaultLayout;
