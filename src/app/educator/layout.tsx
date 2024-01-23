import "../../app/globals.css";
import NavigationTab from "@/components/navigation/NavigationTab";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>

      <body className='bg-background'>
        <NavigationTab />
        {children}
      </body>
    </html>
  );
}
