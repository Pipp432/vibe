
import { SettingsNavigation } from "@/components/settings/SettingsNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

       <div className="flex flex-row">
        <SettingsNavigation />
          <div>
        {children}
          </div>
       </div> 
  );
}
