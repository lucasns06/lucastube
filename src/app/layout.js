import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import "./globals.css";
import Header from "./Header/Header";
import LoadingBar from "./Loading/LoadingBar";
import { LoadingProvider } from "./LoadingContext";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarProvider } from "./SidebarContext";
import { VideoProvider } from './VideoContext';

export const metadata = {
  title: "LucasTube",
  description: "Youtube recriado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VideoProvider>
          <SidebarProvider>
            <LoadingProvider>
              <LoadingBar />
              <Sidebar />
              <Header />
              {children}
            </LoadingProvider>
          </SidebarProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
