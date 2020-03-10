import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>My Contacts</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
