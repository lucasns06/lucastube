import { Suspense } from "react"; 
import Channel from "./Channel";

export default function ChannelPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Channel />
    </Suspense>
  );
}
