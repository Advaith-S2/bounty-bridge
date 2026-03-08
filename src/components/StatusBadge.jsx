import { Badge } from "@/components/ui/badge";

export default function StatusBadge({ status }) {
  const variants = {
    available: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    claimed: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100",
  };

  return (
    <Badge
      variant="outline"
      className={`${variants[status] || ""} text-xs font-semibold px-3 py-1 rounded-full capitalize`}
    >
      {status}
    </Badge>
  );
}
