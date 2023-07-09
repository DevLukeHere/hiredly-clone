"use client";

import ApplyJobButton from "@/app/_components/ApplyJobButton";

export default function Job() {
  function handleClick() {
    console.log("job applied");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the job page</h1>
      <ApplyJobButton disabled={false} text="apply now" onClick={handleClick} />
    </main>
  );
}
