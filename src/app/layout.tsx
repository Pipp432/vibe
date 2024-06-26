import type { Metadata } from "next";
import "./globals.css";
import "../../public/images/logo.png";
import { LoginProvider } from "./contexts/LoginContext";
export const metadata: Metadata = {
  title: "VIBE: Evaluation to Emotion",
  description: "A website for educators",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='../../public/images/logo.png'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <LoginProvider>
        <body className='bg-background'>{children}</body>
      </LoginProvider>
    </html>
  );
}
