import BellAlertIcon from "@heroicons/react/24/solid/BellAlertIcon";
import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon";

export default function JobAlertInput() {
  return (
    <section className="mt-4">
      <div className="grid gap-4 grid-cols-[auto_1fr] items-center border-[1.5px] border-primary rounded-xl py-4 px-7 bg-tertiary">
        <div>
          <BellAlertIcon className="h-6 w-6" />
        </div>

        <div className="relative">
          <button
            aria-label="submit email"
            className="absolute justify-center w-10 inset-y-0 right-0 flex items-center p-0 bg-primary rounded-[0.5rem]"
          >
            <PaperAirplaneIcon className="w-4 h-4 text-tertiary" />
          </button>
          <input
            type="email"
            id="job_alert_email"
            className="bg-tertiary border-[1.5px] border-primary text-primary text-sm rounded-lg block w-full pr-10 p-2.5 dark:placeholder-gray-400"
            placeholder="Enter email for job updates"
          />
        </div>
      </div>
    </section>
  );
}
