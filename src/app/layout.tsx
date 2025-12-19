import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Track USPS Packages by Tracking Number Online | Free USPS Tracking Tool",
  description: "Track your USPS package with your USPS Tracking Number or USPS Tracking Code. Get real-time delivery updates, shipment status, and instant notifications using our quick and accurate USPS tracking tool. Enter your tracking number to check package status, delivery date, location, and movement history — fast, reliable, and always up-to-date.",
  keywords: "USPS Tracking Number, USPS Tracking Code, Track USPS Packages by Tracking Number Online, USPS Tracking Code Lookup, Real-Time Package Updates, Enter USPS Tracking Number, Track Shipment Now, Free USPS Tracking Tool, Check Delivery Status, USPS Tracking Made Easy, Use Tracking Code Here, Track Your USPS Shipment, Instant Status Updates, Check USPS Package Status by Tracking Number",
  authors: [{ name: "USPS Tracking" }],
  creator: "USPS Tracking",
  publisher: "USPS Tracking",
  metadataBase: new URL("https://uspstracking.us"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Track USPS Packages by Tracking Number Online | Free USPS Tracking Tool",
    description: "Track your USPS package with your USPS Tracking Number or USPS Tracking Code. Get real-time delivery updates, shipment status, and instant notifications using our quick and accurate USPS tracking tool.",
    type: "website",
    url: "https://uspstracking.us",
    siteName: "USPS Tracking",
  },
  twitter: {
    card: "summary_large_image",
    title: "USPS Tracking - Free Package Tracking Tool",
    description: "Track your USPS packages with real-time updates and delivery status.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${roboto.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TF4JDJHS');
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TF4JDJHS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9TW3G3PRTP');
            `,
          }}
        />
      </body>
    </html>
  );
}
