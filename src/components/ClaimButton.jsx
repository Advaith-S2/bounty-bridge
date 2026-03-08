import { Button } from "@/components/ui/button";

export default function ClaimButton({ donationId, status, onClaim }) {
  if (status !== "available") return null;

  return (
    <Button
      onClick={() => onClaim(donationId)}
      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      🤝 Claim Donation
    </Button>
  );
}
