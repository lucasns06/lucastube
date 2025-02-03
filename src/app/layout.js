import "./globals.css";
import LoadingBar from "./Loading/LoadingBar";
import { LoadingProvider } from "./LoadingContext";

export const metadata = {
  title: "LucasTube",
  description: "Youtube recriado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          <LoadingBar />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
