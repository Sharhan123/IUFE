export const siteConfig = {
  name: "IUFA Accounts Academy",
  description: "IUFA Accounts Academy: practical accounting courses for students, graduates & professionals. Live classes, industry mentors, placement support. Apply today.",
  url: "https://iufa-academy.com",
  ogImage: "/og-image.jpg",
  keywords: "accounting courses, Tally course, CA foundation coaching, GST training, accounting institute",
  author: "IUFA Accounts Academy",
  creator: "IUFA Team"
};

export const generateMetadata = (page = {}) => {
  const title = page.title 
    ? `${page.title} | ${siteConfig.name}`
    : `${siteConfig.name} — Accounting Courses & CA Foundation`;
    
  const description = page.description || siteConfig.description;
  const url = page.url ? `${siteConfig.url}${page.url}` : siteConfig.url;
  const image = page.image || siteConfig.ogImage;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@iufa_academy",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
};

export const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "IUFA Accounts Academy",
      "url": "https://iufa-academy.com",
      "logo": "https://iufa-academy.com/logo.png",
      "sameAs": [
        "https://facebook.com/iufa",
        "https://linkedin.com/company/iufa",
        "https://instagram.com/iufa_academy"
      ]
    },
    {
      "@type": "WebSite",
      "url": "https://iufa-academy.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://iufa-academy.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "IUFA Accounts Academy",
      "description": "Practical accounting courses for students, graduates and working professionals.",
      "url": "https://iufa-academy.com",
      "sameAs": ["https://iufa-academy.com/about"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business District",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98765-43210",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  ]
};
