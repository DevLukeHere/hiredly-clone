// import { ImageResponse } from "next/server";
// import { useJob } from "@/app/_hooks/useJob";

// export const runtime = "edge";
// export const alt =
//   "New Jobs in Malaysia | Hiredly - Where good careers are built";
// export const size = {
//   width: 1200,
//   height: 630,
// };
// export const contentType = "image/png";

// export default function Image({ params }: { params: { id: string } }) {
//   const id = params?.id;
//   const { job, isLoading, isError } = useJob(id);

//   return new ImageResponse(
//     (
//       <div tw="relative flex w-full h-full items-center justify-center">
//         <div tw="absolute flex inset-0">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             // ? To check available CSS properties: https://github.com/vercel/satori#css
//             src={"https://" + job?.image + "&w=1200&h=630&auto=format&q=75"}
//             alt={job?.title + " image"}
//             tw="flex flex-1"
//           />
//           <div tw="absolute flex inset-0 bg-black bg-opacity-50 z-10"></div>
//         </div>
//       </div>
//     ),
//     size
//   );
// }
