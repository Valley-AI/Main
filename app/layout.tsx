import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Alata, Roboto } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Valley AI - Smart Caregiving Solutions",
  description:
    "Transform everyday indoor cameras into privacy-first smart caregiving tools that detect and predict falls, sleep issues, UTIs, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${alata.variable} ${roboto.variable}`}>
      <body className="">
        {children}
        <Script id="cal-embed">
          {`
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "meeting-with-valley-ai", {origin:"https://app.cal.com"});
    Cal.ns["meeting-with-valley-ai"]("floatingButton", {"calLink":"annanya-panagala/meeting-with-valley-ai","config":{"layout":"month_view"},"buttonText":"Talk to us","buttonColor":"#1D1D1D","buttonTextColor":"#f6f5ec"});
    Cal.ns["meeting-with-valley-ai"]("ui", {
      "cssVarsPerTheme":{
        "light":{"cal-brand":"#1f09ff"},
        "dark":{"cal-brand":"#f6f5ec"}
      },
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  `}
        </Script>
      </body>
    </html>
  )
}
