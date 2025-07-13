import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apex-pain.vercel.app' 

  // Static pages - add all your main pages here
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/doctors/dr-vishal-patel`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/doctors/dr-ammar-mahmoud`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/doctors/dr-mansoor-aman`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/awareness`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
     ]

  // If you have dynamic pages (like blog posts, treatment pages, etc.)
  // You can fetch them here and add to the sitemap
  // Example:
  // const treatments = await fetch(`${baseUrl}/api/treatments`).then(res => res.json())
  // const treatmentPages = treatments.map((treatment: any) => ({
  //   url: `${baseUrl}/treatments/${treatment.slug}`,
  //   lastModified: new Date(treatment.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [
    ...staticPages,
    // ...treatmentPages, // Uncomment if you have dynamic pages
  ]
}