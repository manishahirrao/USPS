import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Clock, Calendar, Share2, Printer, Package, Search } from 'lucide-react';
import { Metadata } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

interface Article {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  url: string;
}

// Helper function to get all articles
async function getAllArticles(): Promise<Article[]> {
  try {
    // Read article data directly from file (same as API route)
    const ARTICLE_DATA = readFileSync(join(process.cwd(), 'src/app/api/articles-full.txt'), 'utf-8');
    
    // Split the article data into individual articles
    const articleSections = ARTICLE_DATA.split(/_{5,}/);
    
    const articles: Article[] = [];
    
    for (const section of articleSections) {
      if (!section.trim()) continue;
      
      const urlMatch = section.match(/URL\s*:\s*(.+?)\s*\n/);
      const titleMatch = section.match(/Title\s*:\s*(.+?)\s*\n/);
      
      if (urlMatch && titleMatch) {
        const url = urlMatch[1].trim();
        const title = titleMatch[1].trim();
        const content = parseArticleContent(section);
        
        // Create a slug from the title
        const slug = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-+|-+$/g, '');
        
        // Create excerpt (first 150 characters of content, stripped of HTML/markdown)
        const plainText = content.replace(/<[^>]*>?/gm, '').replace(/[#*]/g, '').trim();
        const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
        
        // Estimate read time (assuming 200 words per minute)
        const wordCount = plainText.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);
        
        // Determine category based on title content
        let category = 'General';
        if (title.toLowerCase().includes('deliver')) category = 'Delivery';
        else if (title.toLowerCase().includes('track')) category = 'Tracking';
        else if (title.toLowerCase().includes('package')) category = 'Packages';
        else if (title.toLowerCase().includes('time')) category = 'Services';
        
        // Format content for display
        const formattedContent = formatArticleContent(content, title);
        
        articles.push({
          slug,
          title,
          excerpt,
          category,
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          readTime: `${readTime} min read`,
          url: `/articles/${slug}`,
          content: formattedContent
        });
      }
    }
    
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

// Helper function to get a single article by slug
async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find(article => article.slug === slug) || null;
}

// Generate dynamic metadata for each article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | USPS Tracking Number',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} | USPS Tracking Number`,
    description: article.excerpt,
    keywords: `${article.category}, USPS, ${article.title}, USPS tracking, USPS help, USPS information`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://uspstrackingnumber.online/articles/${slug}`,
      publishedTime: article.date,
      authors: ['USPS Tracking Number'],
      section: article.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles (improved logic)
  const allArticles = await getAllArticles();
  const relatedArticles = allArticles
    .filter(a => a.slug !== article.slug)
    .sort((a, b) => {
      // Prioritize same category, then show recent articles
      if (a.category === article.category && b.category !== article.category) return -1;
      if (a.category !== article.category && b.category === article.category) return 1;
      return 0;
    })
    .slice(0, 6); // Show up to 6 related articles

  // Article Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "url": `https://uspstrackingnumber.online/articles/${slug}`,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "USPS Tracking Number"
    },
    "publisher": {
      "@type": "Organization",
      "name": "USPS Tracking Number",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uspstrackingnumber.online/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://uspstrackingnumber.online/articles/${slug}`
    },
    "articleSection": article.category,
    "wordCount": article.content.split(' ').length,
    "keywords": `${article.category}, USPS, ${article.title}, USPS tracking, USPS help`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Matching website colors */}
      <div className="bg-gradient-to-br from-[#2E5288] via-[#1e3a6f] to-[#15223e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Animated background elements matching home page */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8 animate-fade-in-up">
            <Link 
              href="/articles" 
              className="inline-flex items-center text-[#a8d8e8] hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-in-up-delay-1">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30">
              {article.category}
            </span>
            <div className="flex items-center text-[#a8d8e8] text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in-up-delay-2">
            {article.title}
          </h1>
          
          <p className="text-xl text-[#a8d8e8] max-w-3xl animate-fade-in-up-delay-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 lg:p-12">
            <div 
              className="article-content text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
          
          {/* Article Actions */}
          <div className="border-t border-gray-200 bg-gray-50 px-8 lg:px-12 py-6">
            <div className="flex justify-end">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#2E5288] hover:bg-blue-50 rounded-lg transition-all duration-300 border border-gray-200 hover:border-[#2E5288]">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#2E5288] hover:bg-blue-50 rounded-lg transition-all duration-300 border border-gray-200 hover:border-[#2E5288]">
                  <Printer className="h-4 w-4" />
                  Print
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link 
                  key={related.slug}
                  href={`/articles/${related.slug}`} 
                  className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-[#2E5288] hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#2E5288]/10 text-[#2E5288] border border-[#2E5288]/20">
                        {related.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {related.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-[#2E5288] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-black text-sm line-clamp-3 leading-relaxed mb-4">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-medium text-[#2E5288] group-hover:text-[#1e3a6f] transition-colors">
                      Read more
                      <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-16 mb-8">
          <div className="bg-gradient-to-r from-[#2E5288] to-[#1e3a6f] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need to Track a Package?</h2>
            <p className="text-[#a8d8e8] mb-6 max-w-2xl mx-auto">
              Use our free USPS tracking tool to get real-time updates on your packages. Enter your tracking number and get instant delivery status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#2E5288] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Package className="h-5 w-5 mr-2" />
                Track Package Now
              </Link>
              <Link 
                href="/articles" 
                className="inline-flex items-center px-6 py-3 bg-[#2E5288]/20 text-white rounded-xl font-semibold hover:bg-[#2E5288]/30 transition-colors border border-white/30"
              >
                <Search className="h-5 w-5 mr-2" />
                Browse Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
}

function formatArticleContent(content: string, currentTitle: string): string {
  // Convert markdown-style headers to HTML
  let formatted = content
    .replace(/^#{1,6}\s+(.+)$/gm, (match, text) => {
      const level = match.match(/^#/g)?.length || 1;
      const sizeClass = level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : level === 3 ? 'text-xl' : 'text-lg';
      return `<h${level} class="font-bold mt-8 mb-4 ${sizeClass} text-gray-900">${text}</h${level}>`;
    });
  
  // Convert numbered lists to HTML
  formatted = formatted.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  formatted = formatted.replace(/(<li>.*<\/li>\n)+/g, (match) => {
    return `<ol class="list-decimal pl-6 my-4 space-y-2 text-gray-800">${match}</ol>\n`;
  });
  
  // Convert bullet points to HTML
  formatted = formatted.replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>');
  formatted = formatted.replace(/(<li>.*<\/li>\n)+/g, (match) => {
    return `<ul class="list-disc pl-6 my-4 space-y-2 text-gray-800">${match}</ul>\n`;
  });
  
  // Add keyword interlinking before converting paragraphs
  formatted = addKeywordInterlinking(formatted, currentTitle);
  
  // Convert paragraphs (text blocks separated by double newlines)
  const paragraphs = formatted.split('\n\n').map(para => {
    const trimmed = para.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h') || trimmed.startsWith('<ul>') || trimmed.startsWith('<ol>') || trimmed.startsWith('<li>')) {
      return trimmed; // Skip if already a heading or list
    }
    return `<p class="mb-4 leading-relaxed text-gray-800">${trimmed}</p>`;
  }).join('\n\n');
  
  return paragraphs;
}

function addKeywordInterlinking(content: string, currentTitle: string): string {
  // Define keyword mappings to articles and home page
  const keywordMappings = [
    // Home page links for common USPS terms
    { keyword: 'USPS tracking', url: '/', type: 'home' },
    { keyword: 'tracking number', url: '/', type: 'home' },
    { keyword: 'track package', url: '/', type: 'home' },
    { keyword: 'package tracking', url: '/', type: 'home' },
    
    // Article interlinks - these will be dynamically populated
    { keyword: 'deliver on sunday', url: '/articles/does-usps-deliver-on-sunday', type: 'article' },
    { keyword: 'deliver on saturday', url: '/articles/does-usps-deliver-on-saturday', type: 'article' },
    { keyword: 'delivery time', url: '/articles/what-time-does-usps-deliver', type: 'article' },
    { keyword: 'late delivery', url: '/articles/how-late-does-usps-deliver', type: 'article' },
    { keyword: 'change address', url: '/articles/how-to-change-address-usps', type: 'article' },
    
    // Service-related links to home page
    { keyword: 'priority mail', url: '/', type: 'home' },
    { keyword: 'first class mail', url: '/', type: 'home' },
    { keyword: 'informed delivery', url: '/', type: 'home' },
    { keyword: 'hold mail', url: '/', type: 'home' },
    { keyword: 'mail forwarding', url: '/', type: 'home' },
  ];
  
  let linkedContent = content;
  
  // Apply keyword linking (case-insensitive, whole word matching)
  keywordMappings.forEach(({ keyword, url, type }) => {
    // Skip if linking to the same article
    if (type === 'article' && currentTitle.toLowerCase().includes(keyword.toLowerCase())) {
      return;
    }
    
    // Create regex for case-insensitive whole word matching
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    
    // Replace keyword with linked version (limit to first occurrence to avoid over-linking)
    let replaced = false;
    linkedContent = linkedContent.replace(regex, (match) => {
      if (!replaced) {
        replaced = true;
        const linkClass = type === 'home' 
          ? 'text-[#2E5288] hover:text-[#1e3a6f] font-medium underline decoration-2 underline-offset-2 hover:decoration-[#2E5288] transition-colors'
          : 'text-[#2E5288] hover:text-[#1e3a6f] font-medium underline decoration-2 underline-offset-2 hover:decoration-[#2E5288] transition-colors';
        
        return `<a href="${url}" class="${linkClass}">${match}</a>`;
      }
      return match;
    });
  });
  
  return linkedContent;
}

function parseArticleContent(section: string): string {
  // Remove URL and Title lines
  let content = section
    .replace(/^URL\s*:\s*.+$/gm, '') // Remove URL lines
    .replace(/^Title\s*:\s*.+$/gm, '') // Remove Title lines
    .replace(/^_{5,}$/gm, '') // Remove separator lines
    .trim();
  
  // Clean up any remaining metadata patterns
  content = content
    .replace(/^URL\s*:/gm, '')
    .replace(/^Title\s*:/gm, '')
    .replace(/https?:\/\/[^\s]+/g, '') // Remove any remaining URLs
    .replace(/^•\s*$/gm, '') // Remove empty bullet points
    .replace(/^\d+\.\s*$/gm, '') // Remove empty numbered items
    .trim();
  
  // Split into paragraphs and filter out empty ones
  const paragraphs = content.split('\n').filter(p => p.trim().length > 0);
  
  // Join back with proper spacing
  return paragraphs.join('\n\n');
}
