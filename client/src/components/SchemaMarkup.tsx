import { useEffect } from "react";

export default function SchemaMarkup() {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Teesside Driveways",
      "image": "https://res.cloudinary.com/dfvsaeiwl/image/upload/Teesside%20Driveways/Teesside_Driveways_Logo_350x180px_u43i1k.jpg",
      "@id": "https://lp.teessideresindriveways.co.uk",
      "url": "https://lp.teessideresindriveways.co.uk",
      "telephone": "",
      "priceRange": "££",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Varsity House, 2 Falcon Court, Preston Farm Industrial Estate",
        "addressLocality": "Stockton-on-Tees",
        "postalCode": "TS18 3TS",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 54.5588,
        "longitude": -1.3194
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [],
      "areaServed": [
        {
          "@type": "City",
          "name": "Middlesbrough"
        },
        {
          "@type": "City",
          "name": "Stockton-on-Tees"
        },
        {
          "@type": "City",
          "name": "Billingham"
        },
        {
          "@type": "City",
          "name": "Redcar"
        },
        {
          "@type": "City",
          "name": "Thornaby"
        },
        {
          "@type": "City",
          "name": "Yarm"
        },
        {
          "@type": "City",
          "name": "Eaglescliffe"
        },
        {
          "@type": "City",
          "name": "Ingleby Barwick"
        },
        {
          "@type": "City",
          "name": "Wynyard"
        }
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Teesside Driveways",
      "url": "https://lp.teessideresindriveways.co.uk",
      "logo": "https://res.cloudinary.com/dfvsaeiwl/image/upload/Teesside%20Driveways/Teesside_Driveways_Logo_350x180px_u43i1k.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "en"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Varsity House, 2 Falcon Court, Preston Farm Industrial Estate",
        "addressLocality": "Stockton-on-Tees",
        "postalCode": "TS18 3TS",
        "addressCountry": "GB"
      }
    };

    // Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Transform Your Driveway with Premium Resin Solutions in Teesside",
      "description": "Comprehensive guide to resin bound and bonded driveways in Teesside. Learn about the benefits, installation process, and why resin driveways are the perfect choice for your property.",
      "image": "https://res.cloudinary.com/dfvsaeiwl/image/upload/Teesside%20Driveways/Teesside_Driveways_Logo_350x180px_u43i1k.jpg",
      "author": {
        "@type": "Organization",
        "name": "Teesside Driveways"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Teesside Driveways",
        "logo": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/dfvsaeiwl/image/upload/Teesside%20Driveways/Teesside_Driveways_Logo_350x180px_u43i1k.jpg"
        }
      },
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-01"
    };

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between resin bound and resin bonded driveways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Resin bound driveways are created by mixing resin and aggregate together before trowelling onto a surface, resulting in a smooth, permeable finish. Resin bonded driveways involve applying resin first, then scattering aggregate on top, creating a textured surface. Resin bound is fully permeable and has a modern appearance, while resin bonded offers excellent grip and a more traditional look."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a resin driveway last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When installed correctly using quality materials, a resin bound driveway can last 15-25 years or more. The longevity depends on factors such as the quality of the base preparation, the resin and aggregate used, installation standards, and ongoing maintenance. UV-stable resins prevent discoloration and degradation over time."
          }
        },
        {
          "@type": "Question",
          "name": "Is a resin driveway permeable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Resin bound driveways are fully permeable, allowing water to drain through the surface naturally. This helps prevent puddles, reduces flood risk, and complies with sustainable drainage regulations (SuDS). Resin bonded surfaces are not permeable, so proper drainage must be in place."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a resin driveway cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost varies depending on the size of the area, the type of resin system (bound or bonded), the condition of the existing surface, and the aggregate chosen. Generally, resin driveways are competitively priced compared to other premium surfacing options. Contact us for a free, no-obligation quote tailored to your specific project."
          }
        },
        {
          "@type": "Question",
          "name": "Can a resin driveway be installed over my existing surface?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. Resin can be applied over existing concrete, tarmac, or block paving, provided the surface is structurally sound, stable, and properly prepared. This can save on groundwork costs. However, if the existing surface is severely damaged or unstable, a new base may be required."
          }
        },
        {
          "@type": "Question",
          "name": "How long does installation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential resin driveway installations are completed within 1-2 days, depending on the size and complexity of the project. The surface is typically ready for light foot traffic after 4-6 hours and vehicular use after 24 hours of curing time."
          }
        },
        {
          "@type": "Question",
          "name": "What maintenance does a resin driveway require?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Resin driveways are very low maintenance. Regular sweeping to remove debris and occasional washing with water (or a mild detergent for stubborn stains) is usually sufficient. Avoid using harsh chemicals or high-pressure washers that could damage the surface."
          }
        },
        {
          "@type": "Question",
          "name": "Will my resin driveway crack or fade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When installed with UV-stable resin and proper base preparation, resin driveways are highly resistant to cracking and fading. The flexibility of the resin allows it to accommodate minor ground movement, and UV stabilizers prevent color degradation from sunlight exposure."
          }
        },
        {
          "@type": "Question",
          "name": "Is a resin driveway slippery when wet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, resin driveways provide good grip even in wet conditions. The aggregate within the resin creates a textured surface that offers traction. Resin bonded surfaces are particularly slip-resistant due to their more pronounced texture."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need planning permission for a resin driveway?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, no planning permission is required for resin driveways, especially resin bound systems which are permeable. However, if your driveway is larger than 5 square meters and uses a non-permeable surface, you may need to ensure proper drainage to comply with regulations."
          }
        },
        {
          "@type": "Question",
          "name": "What colors and finishes are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Resin driveways offer a wide range of colors and aggregate options, from natural stone tones (greys, browns, golds) to more vibrant colors. You can also choose different aggregate sizes for varied textures."
          }
        },
        {
          "@type": "Question",
          "name": "Can resin driveways be repaired if damaged?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, resin driveways can be repaired. Small areas of damage can be patched by removing the affected section and applying new resin and aggregate. While repairs are possible, proper installation and quality materials minimize the need for future fixes."
          }
        },
        {
          "@type": "Question",
          "name": "Are resin driveways suitable for heavy vehicles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when installed with a properly prepared base, resin driveways can support regular car traffic and even heavier vehicles. The key is ensuring the sub-base is adequately compacted and of sufficient depth to distribute the load."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a quote for my resin driveway?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply contact us through our website. We'll arrange a free consultation to assess your property, discuss your preferences, and provide a detailed, no-obligation quote. We're available 24/7 to answer your questions and help you get started."
          }
        },
        {
          "@type": "Question",
          "name": "What areas in Teesside do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide resin driveway installation services throughout Teesside, including Middlesbrough, Stockton-on-Tees, Billingham, Redcar, Thornaby, Yarm, Eaglescliffe, Ingleby Barwick, and Wynyard."
          }
        }
      ]
    };

    // Add schema markup to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(localBusinessSchema, "local-business-schema");
    addSchema(organizationSchema, "organization-schema");
    addSchema(articleSchema, "article-schema");
    addSchema(faqSchema, "faq-schema");

    return () => {
      // Cleanup on unmount
      document.getElementById("local-business-schema")?.remove();
      document.getElementById("organization-schema")?.remove();
      document.getElementById("article-schema")?.remove();
      document.getElementById("faq-schema")?.remove();
    };
  }, []);

  return null;
}
