import localFont from "next/font/local";
import "./globals.css";

// Google Sans everywhere (variable weight).
const googleSans = localFont({
  src: "./fonts/google-sans.woff2",
  variable: "--f-google-sans",
  weight: "400 700",
  display: "swap",
});

// Hero headline only: Lavishly Yours.
const heroScript = localFont({
  src: "./fonts/lavishly-yours.woff2",
  variable: "--f-hero",
  weight: "400",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sasurieengg.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sasurie College of Engineering (Autonomous) | Create your future",
  description:
    "Sasurie College of Engineering (Autonomous), Vijayamangalam, Tiruppur — B.E. and B.Tech. programmes in eight departments, with postgraduate M.E. and MBA programmes, on a 10.61-acre campus off the Coimbatore Bypass (NH544).",
  keywords: [
    "Sasurie College of Engineering",
    "Sasurie",
    "engineering college Tiruppur",
    "autonomous engineering college Tamil Nadu",
    "TNEA",
    "Vijayamangalam",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sasurie College of Engineering",
    title: "Sasurie College of Engineering (Autonomous)",
    description:
      "Engineers are built in layers. Foundation, skills, industry, career — at Vijayamangalam, Tiruppur, since 2001.",
    images: [
      {
        url: "/brand/sasurie-og.png",
        width: 1200,
        height: 265,
        alt: "Sasurie College of Engineering (Autonomous)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasurie College of Engineering (Autonomous)",
    description:
      "Engineers are built in layers. Foundation, skills, industry, career — at Vijayamangalam, Tiruppur, since 2001.",
    images: ["/brand/sasurie-og.png"],
  },
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${googleSans.variable} ${heroScript.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);window.scrollTo(0,0);}catch(e){}",
          }}
        />
        <noscript>
          <style>{`.rv,.tw-rise,.line-in,.letter,.word-w>span,.hero-in{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}.loader{display:none!important}.nav{transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
