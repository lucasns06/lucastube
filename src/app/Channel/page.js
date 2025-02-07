import { Suspense } from "react";
import Channel from "./Channel";

export default function ChannelPage() {
  return (
    <Suspense fallback={
      <div className="error z-50">
        <h1 className='text-3xl'>Carregando...</h1> <br />
      </div>
    }>
      <Channel />
    </Suspense>
  );
}
