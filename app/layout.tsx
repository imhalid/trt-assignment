import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const trtFont = localFont({
  src: [
    {
      path: "/fonts/TRTRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/TRTMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/TRTBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--trt",
});

const NotoSerif = localFont({
  src: [
    {
      path: "/fonts/NotoSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/NotoSerif-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--noto-serif",
});

export const metadata: Metadata = {
  title: "TRT World (Demo)",
  description: "TRT World (Demo)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={trtFont.variable + " " + NotoSerif.variable}>
        {children}
      </body>
    </html>
  );
}
