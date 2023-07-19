import { ReactNode } from "react";

export const metadata = {
  title: "New Jobs in Malaysia | Hiredly - Where good careers are built",
  description: "Apply now on Hiredly Malaysia. Find the right job fo you.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
