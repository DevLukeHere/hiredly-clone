import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";

export default function JobInfo() {
  return (
    <section className="mt-4">
      <div className="grid gap-5 grid-rows-3 border-[1.5px] border-primary rounded-xl py-4 px-7 bg-tertiary">
        <div className="flex gap-4">
          <CurrencyDollarIcon className="w-6 h-6" />
          <p>RM1000 - RM2000</p>
        </div>
        <div className="flex gap-4">
          <MapPinIcon className="w-6 h-6" />
          <p>Gerik</p>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="bg-indigo-200 rounded py-1 px-2 w-fit">
            <p className="text-secondary font-bold text-sm">Full-Time</p>
          </div>
          <p>1 week ago</p>
        </div>
      </div>
    </section>
  );
}
