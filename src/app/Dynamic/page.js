import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarProvider } from "../SidebarContext";
import { VideoProvider } from "../VideoContext";
import VideoPage from "./VideoPage";
import '../media-queries.css'
export default function Home() {
  return (
    <div>
      <VideoProvider>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <VideoPage />
        </SidebarProvider>
      </VideoProvider>
    </div>
  );
}
