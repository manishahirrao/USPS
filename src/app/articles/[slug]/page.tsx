import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Clock, Calendar, Share2, Printer, Package, Search } from 'lucide-react';
import { Metadata } from 'next';

interface Article {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
}

// Helper function to get all articles
async function getAllArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/articles`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    return await response.json();
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

  // Get related articles (in a real app, you'd implement proper related articles logic)
  const allArticles = await getAllArticles();
  const relatedArticles = allArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

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
