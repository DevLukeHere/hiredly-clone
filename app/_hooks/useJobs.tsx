import useSWR from "swr";
import { request } from "graphql-request";

interface useJobsParam {
  query: string;
  first: string | null;
  last: string | null;
  startCursor: string | null;
  endCursor: string;
}

const fetcher = (query: string) =>
  request(
    "https://staging-wobbjobs.hiredly.com/api/job_seeker/v1/graphql",
    query
  );

export function useJobs(useJobsParams: useJobsParam) {
  const { data, error, isLoading } = useSWR(
    `{
      jobListsSearchResults(${useJobsParams.query}, last: ${useJobsParams.last}, first: ${useJobsParams.first}, before: ${useJobsParams.startCursor}, after: ${useJobsParams.endCursor}) {
        nodes {
          active
          activeAt
          bookmark
          boosted
          company {
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
            slug
            typeId
          }
          createdAt
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
          keywordHighlightText
          location
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
            id
            title
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
        totalPage
      }
    }`,
    fetcher
  );

  return {
    // @ts-ignore
    jobs: data?.jobListsSearchResults?.nodes,
    // @ts-ignore
    pageInfo: data?.jobListsSearchResults?.pageInfo,
    isLoading,
    isError: error,
  };
}
