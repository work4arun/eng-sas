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

export const metadata = {
  title: "Sasurie College of Engineering | Create your future",
  description:
    "Sasurie College of Engineering (Autonomous), Vijayamangalam, Tiruppur. Engineering programmes built in four layers: foundation, skills, industry and career.",
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${googleSans.variable} ${heroScript.variable}`}>
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
