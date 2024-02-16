import { Demo } from "@/components/homepage/demo";
import { Introduction } from "@/components/homepage/introduction";

export default function Home() {
  return (
    <main className="h-full w-full grid place-items-center gap-4">
      <Introduction />
      <Demo />
    </main>
  );
}
