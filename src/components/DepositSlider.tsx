import { DollarSign } from "lucide-react";

interface DepositSliderProps {
  deposit: number;
  onDepositChange: (amount: number) => void;
}

export function DepositSlider({
  deposit,
  onDepositChange,
}: DepositSliderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          Deposit Amount
        </label>
        <div className="flex items-center">
          <DollarSign className="w-4 h-4 text-gray-400" />
          <span className="font-medium">{deposit}</span>
        </div>
      </div>
      <input
        type="range"
        min="400"
        max="500"
        step="50"
        value={deposit}
        onChange={(e) => onDepositChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>$400</span>
        <span>$500</span>
      </div>
    </div>
  );
}
