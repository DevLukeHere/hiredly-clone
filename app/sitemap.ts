export default async function sitemap() {
  const baseUrl = "http://localhost:3000";

  // Get all jobs from backend to generate dynamic links

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/community-guidelines`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
  ];
}
