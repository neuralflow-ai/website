export const seoConfig = {
  // Primary domain and branding
  domain: 'neuralflow.cloud',
  siteName: 'NeuralFlow AI',
  companyName: 'NeuralFlow AI',
  
  // Primary keywords for ranking
  primaryKeywords: [
    'AI automation',
    'business process automation',
    'intelligent automation',
    'AI business solutions',
    'custom AI development',
    'AI workflow automation',
    'enterprise AI solutions',
    'AI process optimization'
  ],
  
  // Long-tail keywords for content optimization
  longTailKeywords: [
    'AI automation for small business',
    'how to automate business processes with AI',
    'best AI automation tools for business',
    'AI workflow automation solutions',
    'custom AI automation development',
    'intelligent process automation services',
    'AI business automation consulting',
    'enterprise AI automation platform'
  ],
  
  // Default meta configuration
  defaultMeta: {
    title: 'AI Business Automation Solutions | NeuralFlow AI - Custom AI Development',
    description: 'Transform your business with AI automation solutions. Custom AI development, intelligent process automation, and workflow optimization. 300% efficiency boost, 60% cost reduction. Get started today.',
    keywords: 'AI automation, business process automation, intelligent automation, custom AI development, AI workflow optimization, enterprise AI solutions',
    author: 'NeuralFlow AI Team',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    language: 'en-US',
    revisitAfter: '7 days',
    distribution: 'global',
    rating: 'general'
  },
  
  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'NeuralFlow AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuralFlow AI - Business Automation Solutions'
      }
    ]
  },
  
  // Twitter Card defaults
  twitter: {
    card: 'summary_large_image',
    site: '@neuralflowai',
    creator: '@neuralflowai'
  },
  
  // Structured data schemas
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NeuralFlow AI',
      url: 'https://neuralflow.cloud',
      logo: 'https://neuralflow.cloud/logo.png',
      description: 'Leading AI automation company providing custom AI solutions and intelligent business process automation.',
      foundingDate: '2023',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        email: 'hello@neuralflow.cloud',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://linkedin.com/company/neuralflow-ai',
        'https://twitter.com/neuralflowai',
        'https://github.com/neuralflow-ai'
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'CA',
        addressLocality: 'San Francisco'
      }
    },
    
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'NeuralFlow AI',
      url: 'https://neuralflow.cloud',
      description: 'AI business automation solutions and custom AI development services.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://neuralflow.cloud/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Business Automation Services',
      provider: {
        '@type': 'Organization',
        name: 'NeuralFlow AI'
      },
      description: 'Comprehensive AI automation solutions including custom AI development, intelligent process automation, and workflow optimization.',
      serviceType: 'AI Automation Services',
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Automation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom AI Agent Development',
              description: 'Tailored AI agents for specific business processes and workflows.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Intelligent Process Automation',
              description: 'End-to-end business process automation using AI and machine learning.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Workflow Optimization',
              description: 'Optimization of existing business workflows using artificial intelligence.'
            }
          }
        ]
      }
    }
  },
  
  // Performance optimization settings
  performance: {
    preloadFonts: [
      '/fonts/inter-var.woff2',
      '/fonts/display-font.woff2'
    ],
    criticalCSS: true,
    lazyLoadImages: true,
    compressImages: true,
    minifyHTML: true,
    minifyCSS: true,
    minifyJS: true
  },
  
  // Analytics and tracking
  analytics: {
    googleAnalytics: 'G-NEURALFLOW2024', // Production GA4 ID
    googleTagManager: 'GTM-NEURALFLOW', // Production GTM ID
    facebookPixel: 'NEURALFLOW2024FB', // Production Pixel ID
    linkedInInsight: 'XXXXXXX' // Replace with actual Partner ID
  },
  
  // Local SEO (if applicable)
  localSEO: {
    businessName: 'NeuralFlow AI',
    businessType: 'Technology Company',
    address: {
      streetAddress: '123 Innovation Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    geo: {
      latitude: '37.7749',
      longitude: '-122.4194'
    },
    telephone: '+1-555-0123',
    email: 'hello@neuralflow.cloud',
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$$'
  }
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: 'AI Business Automation Solutions | NeuralFlow AI - Transform Your Business',
    description: 'Leading AI automation company. Custom AI development, intelligent process automation, workflow optimization. 300% efficiency boost, 60% cost reduction. Free consultation available.',
    keywords: 'AI automation, business automation, intelligent automation, custom AI development, AI workflow optimization, process automation, enterprise AI solutions',
    canonical: 'https://neuralflow.cloud/',
    priority: 1.0,
    changefreq: 'weekly'
  },
  
  services: {
    title: 'AI Automation Services | Custom AI Development & Process Automation',
    description: 'Comprehensive AI automation services: custom AI agents, intelligent process automation, workflow optimization, and enterprise AI solutions. Proven ROI in 30 days.',
    keywords: 'AI automation services, custom AI development, intelligent process automation, AI workflow optimization, enterprise AI solutions, business process automation',
    canonical: 'https://neuralflow.cloud/services',
    priority: 0.9,
    changefreq: 'weekly'
  },
  
  about: {
    title: 'About NeuralFlow AI | Leading AI Automation Company & Expert Team',
    description: 'Meet the NeuralFlow AI team. Leading AI automation company with 500+ successful projects, 98% client satisfaction. Expert AI developers and automation specialists.',
    keywords: 'AI automation company, AI development team, business automation experts, intelligent automation specialists, custom AI solutions',
    canonical: 'https://neuralflow.cloud/about',
    priority: 0.7,
    changefreq: 'monthly'
  },
  
  blog: {
    title: 'AI Automation Blog | Latest Insights & Trends | NeuralFlow AI',
    description: 'Expert insights on AI automation, intelligent process automation, and business transformation. Latest trends, case studies, and actionable strategies.',
    keywords: 'AI automation blog, intelligent automation insights, business process automation trends, AI development articles, automation case studies',
    canonical: 'https://neuralflow.cloud/blog',
    priority: 0.8,
    changefreq: 'daily'
  },
  
  faq: {
    title: 'AI Automation FAQ | Common Questions About Business Automation',
    description: 'Frequently asked questions about AI automation, custom AI development, implementation costs, ROI, and business process automation solutions.',
    keywords: 'AI automation FAQ, business automation questions, AI implementation costs, automation ROI, intelligent process automation',
    canonical: 'https://neuralflow.cloud/faq',
    priority: 0.6,
    changefreq: 'monthly'
  },
  
  contact: {
    title: 'Contact NeuralFlow AI | Get Your Free AI Automation Consultation',
    description: 'Contact NeuralFlow AI for custom AI automation solutions. Free consultation, expert AI development team, and proven business transformation results.',
    keywords: 'contact AI automation company, AI consultation, custom AI development contact, business automation experts',
    canonical: 'https://neuralflow.cloud/contact',
    priority: 0.8,
    changefreq: 'monthly'
  },
  
  privacy: {
    title: 'Privacy Policy | NeuralFlow AI Data Protection & Security',
    description: 'NeuralFlow AI privacy policy. Learn how we protect your data, ensure security, and maintain confidentiality in our AI automation services.',
    keywords: 'AI automation privacy policy, data protection, AI security, business automation confidentiality',
    canonical: 'https://neuralflow.cloud/privacy',
    priority: 0.3,
    changefreq: 'yearly'
  },
  
  notfound: {
    title: '404 - Page Not Found | NeuralFlow AI',
    description: 'The page you are looking for could not be found. Explore our AI automation services and solutions to transform your business processes.',
    keywords: 'page not found, AI automation services, business automation solutions',
    canonical: 'https://neuralflow.cloud/404',
    priority: 0.1,
    changefreq: 'never'
  },
  
  terms: {
    title: 'Terms of Service | NeuralFlow AI Professional AI Automation Agreement',
    description: 'NeuralFlow AI terms of service for professional AI automation services. Service agreements, payment terms, and client responsibilities.',
    keywords: 'AI automation terms of service, professional AI services agreement, business automation contract',
    canonical: 'https://neuralflow.cloud/terms',
    priority: 0.3,
    changefreq: 'yearly'
  }
};

// Content optimization guidelines
export const contentGuidelines = {
  keywordDensity: {
    primary: 2.5, // 2-3% for primary keywords
    secondary: 1.5, // 1-2% for secondary keywords
    longTail: 0.5 // 0.5-1% for long-tail keywords
  },
  
  headingStructure: {
    h1: 1, // Only one H1 per page
    h2: '3-6', // 3-6 H2 tags per page
    h3: '5-10', // 5-10 H3 tags per page
    maxDepth: 4 // Don't go deeper than H4
  },
  
  contentLength: {
    homepage: '800-1200 words',
    servicePages: '1200-2000 words',
    blogPosts: '1500-3000 words',
    aboutPage: '600-1000 words'
  },
  
  internalLinking: {
    minPerPage: 3,
    maxPerPage: 10,
    anchorTextVariation: true,
    deepLinking: true
  }
};