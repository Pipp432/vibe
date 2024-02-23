import "../../app/globals.css";
import NavigationTab from "@/components/navigation/NavigationTab";
import Profile from "@/components/profile/Profile"
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
            <div className="flex flex-row-reverse absolute w-[83vw]"><Profile/></div>
        {children}
          </div>
       </div> 
      </body>
    </html>
  );
}
