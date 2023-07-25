"use client";

import { useEffect } from "react";
import ContainedButton from "@/app/_components/ContainedButton";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("error.cause:", error.cause);
    console.error("error.stack:", error.stack);
  }, [error]);

  function handlePageReload() {
    reset();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-600 to-gray-900">
      <div className="grid grid-rows-[auto_auto_1fr] items-center gap-8">
        <h1 className="text-tertiary text-center text-4xl capitalize font-bold">
          {error?.name} - community guidelines could not be loaded.
        </h1>
        <p className="text-gray-300 text-sm text-center italic">
          {error?.message}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <ContainedButton
            buttonVariant="secondary"
            disabled={false}
            text="try again"
            fontSize="1"
            height="2.75"
            width="12.5"
            onClick={handlePageReload}
          />
          <Link href="/" rel="noreferrer noopener">
            <ContainedButton
              buttonVariant="secondary"
              disabled={false}
              text="homepage"
              fontSize="1"
              height="2.75"
              width="12.5"
            />
          </Link>
          <Link href="/jobs" rel="noreferrer noopener">
            <ContainedButton
              buttonVariant="secondary"
              disabled={false}
              text="job listings"
              fontSize="1"
              height="2.75"
              width="12.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
