import Patient from "./patient/page";
import Staff from "./staff/page";

export default function Home() {
  return (
    <div className="bg-white">
      <Patient />
      <Staff />
    </div>
  );
}
