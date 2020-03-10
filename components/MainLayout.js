import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Contact Book</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta name="Description" content="Quickly search through the contacts." />
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
