import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DonationForm({ addDonation }) {
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    location: "",
    expiryTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.foodName || !formData.quantity || !formData.location || !formData.expiryTime) {
      return;
    }
    addDonation(formData);
    setFormData({ foodName: "", quantity: "", location: "", expiryTime: "" });
  };

  return (
    <Card className="border border-white/20 bg-white/70 backdrop-blur-md shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-2xl">🎁</span> Post a Food Donation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="foodName" className="text-gray-700 font-medium">
              Food Name
            </Label>
            <Input
              id="foodName"
              name="foodName"
              placeholder="e.g. Sandwiches, Rice, Pasta"
              value={formData.foodName}
              onChange={handleChange}
              className="bg-white/80 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-gray-700 font-medium">
              Quantity
            </Label>
            <Input
              id="quantity"
              name="quantity"
              placeholder="e.g. 20 servings, 5 kg"
              value={formData.quantity}
              onChange={handleChange}
              className="bg-white/80 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-700 font-medium">
              Pickup Location
            </Label>
            <Input
              id="location"
              name="location"
              placeholder="e.g. 123 Main St, Restaurant ABC"
              value={formData.location}
              onChange={handleChange}
              className="bg-white/80 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expiryTime" className="text-gray-700 font-medium">
              Expiry Time
            </Label>
            <Input
              id="expiryTime"
              name="expiryTime"
              placeholder="e.g. Today 6:00 PM, 2 hours"
              value={formData.expiryTime}
              onChange={handleChange}
              className="bg-white/80 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base cursor-pointer"
          >
            ✨ Submit Donation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
