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
       <div className="h-[100vh] flex flex-row">
        <NavigationTab />
          <div>
        {children}
          </div>
       </div> 
      </body>
    </html>
  );
}
