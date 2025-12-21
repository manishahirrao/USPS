import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Read article data from file
const ARTICLE_DATA = readFileSync(join(process.cwd(), 'src/app/api/articles-full.txt'), 'utf-8');

export async function GET() {
  try {
    // Split the article data into individual articles
    const articleSections = ARTICLE_DATA.split(/_{5,}/);
    
    const articles: any[] = [];
    
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
    
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error processing articles:', error);
    return NextResponse.json({ error: 'Failed to process articles' }, { status: 500 });
  }
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
    
    // Article interlinks
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