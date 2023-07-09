import useSWR from "swr";
import { request } from "graphql-request";

// interface dataType {
//   job: {
//     gptSummary: string;
//   }
// }

const fetcher = (query: string) =>
  request(
    "https://staging-wobbjobs.hiredly.com/api/job_seeker/v1/graphql",
    query,
  );

export function useJob(id: string) {
  const { data, error, isLoading } = useSWR(
    `{
      job(id: "${id}") {
        active
        activeAt
        bookmark
        boosted
        company {
          benefits {
            description
            iconCode
            title
          }
          bookmark
          coverImage
          coverImageThumb
          id
          industry
          jobCount
          lastActiveAt
          logo
          name
          registerName
          shortDescription
          sizeId
          slug
          typeId
        }
        description
        expired
        externalJobUrl
        gptSummary
        haveApplied
        haveRejected
        id
        image
        imageMobile
        imagePosition
        imageSize
        imageThumb
        jobType
        keywordHighlight
        location
        maxYearsExperience
        minYearsExperience
        requirements
        salary
        scraped
        secondaryCompanyId
        shortDescription
        skills
        slug
        spotlight
        stateRegion
        structuredJobData
        title
        trackId
        tracks {
          title
          id
        }
      }
    }`,
    fetcher,
  );
  
  return {
    // TODO: Declare type for job response
    // @ts-ignore
    job: data?.job,
    isLoading,
    isError: error,
  };
}
