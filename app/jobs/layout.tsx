import { ReactNode } from "react";

export const metadata = {
  title:
    "New Job Vacancies in Malaysia - Search By Location, Specialisation & Job Type | Hiredly",
  description:
    "Easy and fast job search on one of Malaysia's leading job portal. Find remote and work-from-home job vacancies for full-time and internship career opportunities in Malaysia.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
