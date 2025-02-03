import "./globals.css";
import Header from "./Header/Header";
import LoadingBar from "./Loading/LoadingBar";
import { LoadingProvider } from "./LoadingContext";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarProvider } from "./SidebarContext";

export const metadata = {
  title: "LucasTube",
  description: "Youtube recriado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <LoadingProvider>
            <LoadingBar />
            <Sidebar />
            <Header />
            {children}
          </LoadingProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
