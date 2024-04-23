import "../../app/globals.css";
import NavigationTab from "@/components/navigation/NavigationTab";
import Profile from "@/components/profile/Profile"
import Head from 'next/head'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/Images/favicon.ico" sizes="any" />

      </head>
      <body className='bg-background'>
        <div className="h-[100vh] flex flex-row">
          <NavigationTab />
          <div>
            <div className="flex flex-row-reverse absolute w-[83vw]"><Profile /></div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
