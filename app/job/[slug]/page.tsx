import JobAlertInput from "@/app/_components/JobAlertInput";
import JobHeader from "@/app/_components/JobHeader";
import JobInfo from "@/app/_components/JobInfo";

export default function Job() {
  return (
    <section className="min-h-screen p-4 laptop:p-14">
      <JobHeader />
      <JobInfo />
      <JobAlertInput />
    </section>
  );
}
