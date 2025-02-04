import Header from "./Header/Header";
import { SidebarProvider } from "./SidebarContext";
import Main from "./Main/Main";
import './media-queries.css'
import { VideoProvider } from "./VideoContext";

export const metadata = {
  title: "LucasTube",
  description: "Youtube recriado",
};

export default function Home() {
  return (
    <div>
          <Main />
    </div>
  );
}
