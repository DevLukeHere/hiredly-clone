"use client"

import ApplyJobButton from "@/app/_components/ApplyJobButton";
import BookmarkButton from "@/app/_components/BookmarkButton";
import ShareButton from "@/app/_components/ShareButton";

export default function JobHeader() {
  function handleClick() {
    //
  }
  
  return (
    <section>
      <ApplyJobButton disabled={false} text="apply now" onClick={handleClick} />
      <BookmarkButton disabled={false} />
      <ShareButton disabled={false} />
    </section>
  );
}
