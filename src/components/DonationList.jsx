import DonationCard from "./DonationCard";

export default function DonationList({ donations, onClaim, emptyMessage = "No donations yet." }) {
  if (donations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <span className="text-6xl mb-4">📭</span>
        <p className="text-lg font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donations.map((donation) => (
        <DonationCard
          key={donation.id}
          donation={donation}
          onClaim={onClaim}
        />
      ))}
    </div>
  );
}
