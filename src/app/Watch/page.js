import { Suspense } from "react"; 
import VideoPage from "./Watch";

export default function ChannelPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <VideoPage />
    </Suspense>
  );
}
