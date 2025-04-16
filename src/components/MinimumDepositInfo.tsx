import { Info } from 'lucide-react';

export function MinimumDepositInfo() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-start">
        <Info className="w-5 h-5 text-blue-500 mt-0.5" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">Deposit Information</h3>
          <div className="mt-2 text-sm text-blue-700">
            <ul className="list-disc pl-5 space-y-1">
              <li>Minimum deposit required: $150</li>
              <li>Maximum deposit allowed: $500</li>
              <li>Deposit is required to secure your booking</li>
              <li>Remaining balance due according to rental agreement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}