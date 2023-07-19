import { ReactNode } from "react";

export const metadata = {
  title: "About Hiredly - Job Search Website in Malaysia",
  description:
    "About Hiredly. We are on an unwavering mission to be Asia’s most loved job discovery platform that helps people discover any job with any employer in the market.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
