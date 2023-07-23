"use client";

import ApplyJobButton from "@/app/_components/ApplyJobButton";
import BookmarkButton from "@/app/_components/BookmarkButton";
import SocialShareButton from "@/app/_components/SocialShareButton";
import Image from "next/image";
import Link from "next/link";
import { useJob } from "@/app/_hooks/useJob";

export default function JobHeader() {
  const { job, isLoading, isError } = useJob(
    "e7fa3646-ed88-4b2d-ab27-52cd40a31b59"
  );

  console.log("job:", job);

  function handleClick() {
    //
  }

  return (
    <section>
      {isLoading ? (
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-rows-2 gap-4 items-center justify-items-center laptop:grid-cols-[1fr_auto] laptop:gap-5 laptop:grid-rows-none laptop:justify-items-start">
          <div className="flex items-center gap-2">
            <Image
              alt="company logo"
              src={`https:${job?.company?.logo}`}
              width={70}
              height={70}
              loading="eager"
              className="shadow-2xl rounded-lg"
            />

            <div>
              <h1 className="font-bold text-2xl">{job?.title}</h1>
              <Link
                className="text-secondary underline"
                href="/"
                rel="noopener noreferrer"
              >
                {job?.company?.name}
              </Link>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            <ApplyJobButton
              disabled={false}
              text="apply now"
              onClick={handleClick}
            />
            <BookmarkButton disabled={false} />
            <SocialShareButton disabled={false} />
          </div>
        </div>
      )}
    </section>
  );
}
