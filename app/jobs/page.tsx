"use client";

import { useJobs } from "../_hooks/useJobs";

export default function Jobs() {
  const useJobsParams = {
    query: "",
    first: null,
    last: null,
    startCursor: null,
    endCursor: "",
  };
  const { jobs, pageInfo, isLoading, isError } = useJobs(useJobsParams);

  // console.log("jobs:", jobs);
  // console.log("pageInfo:", pageInfo);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the job listing page</h1>
    </section>
  );
}
