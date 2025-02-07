import { Suspense } from "react";
import VideoPage from "./Watch";

export default function ChannelPage() {
  return (
    <Suspense fallback={
      <div className="error z-50">
        <h1 className='text-3xl'>Carregando...</h1> <br />
      </div>
    }>
      <VideoPage />
    </Suspense>
  );
}
