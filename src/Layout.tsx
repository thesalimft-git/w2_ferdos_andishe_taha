import FaqSection from "./partials/FaqSection";
import { TopMenu } from "./partials/TopMenu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


export default function Layout({ children }: { children: any }) {
  return (
    <SidebarProvider>
      <TopMenu />
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
      <FaqSection />
    </SidebarProvider>
  );
}