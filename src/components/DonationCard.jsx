import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import ClaimButton from "./ClaimButton";

export default function DonationCard({ donation, onClaim }) {
  return (
    <Card className="group relative overflow-hidden border border-white/20 bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      {/* Decorative gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
            🍽️ {donation.foodName}
          </CardTitle>
          <StatusBadge status={donation.status} />
        </div>
      </CardHeader>

      <CardContent className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-base">📦</span>
          <span><strong>Quantity:</strong> {donation.quantity}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base">📍</span>
          <span><strong>Pickup:</strong> {donation.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base">⏰</span>
          <span><strong>Expires:</strong> {donation.expiryTime}</span>
        </div>
      </CardContent>

      {onClaim && (
        <CardFooter className="pt-2">
          <ClaimButton
            donationId={donation.id}
            status={donation.status}
            onClaim={onClaim}
          />
        </CardFooter>
      )}
    </Card>
  );
}
