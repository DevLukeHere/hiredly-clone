import JobHeader from "@/app/_components/JobHeader";
import JobInfo from "@/app/_components/JobInfo";

export default function Job() {
  return (
    <main className="min-h-screen p-4 laptop:p-14">
      <JobHeader />
      <JobInfo />
    </main>
  );
}
