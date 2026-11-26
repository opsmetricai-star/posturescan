import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight">
      <Image src="/logo.png" alt="" width={40} height={36} priority className={light ? "h-10 w-auto rounded-lg bg-white p-1" : "h-9 w-auto"} />
      <span className={light ? "text-white" : "text-[#1a2138]"}>PostureScan</span>
    </span>
  );
}
