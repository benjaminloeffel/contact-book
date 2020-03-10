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
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="Contact Book" />
      <meta name="application-name" content="Contact Book" />
      <meta name="msapplication-TileColor" content="#ff8906" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
