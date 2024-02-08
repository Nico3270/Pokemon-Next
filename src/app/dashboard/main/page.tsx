import { SimpleWidget } from "@/app/components/dashboard/SimpleWidget";
import { WidgetsGrid } from "@/app/components/dashboard/WidgetsGrid";

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <WidgetsGrid />
    </div>
  );
}