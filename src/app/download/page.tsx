import { DownloadSection } from "./components/download";
import { Recomended } from "./components/recomended";

export default function DownloadPage() {
  return (
    <main className="w-full min-h-dvh grid grid-cols-2 place-items-center px-20 py-16">
      <DownloadSection />
      <Recomended />
    </main>
  );
}
