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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#07c" />
      <meta name="msapplication-TileColor" content="#ff8906" />
      <meta name="theme-color" content="#07c"></meta>
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
