'use client'
import { usePathname } from 'next/navigation';
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const metadata = {
    title: "My App",
    description: "My First Next App",
  };

  const pathname = usePathname();
  const canonicalUrl = `https://yourwebsite.com${pathname}`; 
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
