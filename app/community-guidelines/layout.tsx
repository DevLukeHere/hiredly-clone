import { ReactNode } from "react";

export const metadata = {
  title: "Community Guidelines - Hiredly - Find Jobs in Malaysia",
  description:
    "Community Guidelines - Hiredly. Find full time, internship and work from home jobs in Malaysia. Upload your resume and let our headhunters find a job vacancy for you.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
