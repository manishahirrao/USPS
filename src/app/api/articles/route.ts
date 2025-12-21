import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the article file from the correct path
    const filePath = 'C:/Users/manis/OneDrive/Desktop/USPS/article';
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Article file not found' }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, 'utf8');
    
    // Split the file into individual articles
    const articleSections = data.split(/_{5,}/);
    
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
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
          .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
        
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
        else if (title.toLowerCase().includes('holiday')) category = 'Holidays';
        else if (title.toLowerCase().includes('price') || title.toLowerCase().includes('cost')) category = 'Pricing';
        else if (title.toLowerCase().includes('address') || title.toLowerCase().includes('change')) category = 'Services';
        
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
    console.error('Error reading article file:', error);
    return NextResponse.json({ error: 'Failed to read articles' }, { status: 500 });
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
  
  // Add comprehensive interlinking - link to home page for key terms
  const homePageLinks = [
    { term: 'USPS tracking', link: '/', anchor: 'USPS tracking tool' },
    { term: 'tracking number', link: '/', anchor: 'track your package' },
    { term: 'package tracking', link: '/', anchor: 'package tracking' },
    { term: 'delivery status', link: '/', anchor: 'check delivery status' },
    { term: 'shipment status', link: '/', anchor: 'shipment status' },
    { term: 'real-time tracking', link: '/', anchor: 'real-time tracking' },
    { term: 'track package', link: '/', anchor: 'track your package' },
    { term: 'USPS near me', link: '/', anchor: 'find USPS locations' },
    { term: 'post office', link: '/', anchor: 'USPS services' },
    { term: 'mail delivery', link: '/', anchor: 'mail tracking' }
  ];
  
  // Apply home page links
  homePageLinks.forEach(({ term, link, anchor }) => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    formatted = formatted.replace(regex, `<a href="${link}" class="text-[#1a365d] underline decoration-2 underline-offset-2 font-medium hover:text-[#15223e] transition-colors" title="${anchor}">${term}</a>`);
  });
  
  // Add contextual links to common USPS services
  const serviceLinks = {
    'Priority Mail': '/articles/priority-mail-tracking',
    'First-Class Mail': '/articles/first-class-mail-tracking',
    'Package Services': '/articles/usps-package-services',
    'Mail Forwarding': '/articles/usps-mail-forwarding',
    'PO Box': '/articles/usps-po-box-services',
    'International Shipping': '/articles/usps-international-shipping',
    'Sunday delivery': '/articles/does-usps-deliver-on-sunday',
    'Saturday delivery': '/articles/does-usps-deliver-on-saturday',
    'delivery times': '/articles/what-time-does-usps-deliver',
    'USPS hours': '/articles/is-usps-open-today',
    'holiday delivery': '/articles/usps-holiday-delivery-schedule',
    'package hold': '/articles/usps-package-hold',
    'change of address': '/articles/usps-change-of-address',
    'tracking updates': '/articles/usps-tracking-updates',
    'lost package': '/articles/usps-lost-package',
    'damaged package': '/articles/usps-damaged-package',
    'return to sender': '/articles/usps-return-to-sender'
  };
  
  Object.entries(serviceLinks).forEach(([service, link]) => {
    const regex = new RegExp(`\\b${service}\\b`, 'gi');
    formatted = formatted.replace(regex, `<a href="${link}" class="text-[#1a365d] underline decoration-2 underline-offset-2 font-medium hover:text-[#15223e] transition-colors" title="Learn more about ${service}">${service}</a>`);
  });
  
  // Add article cross-references based on common topics
  const topicLinks = [
    { keywords: ['delivery', 'deliver'], article: '/articles/what-time-does-usps-deliver', title: 'USPS delivery times' },
    { keywords: ['weekend', 'saturday', 'sunday'], article: '/articles/does-usps-deliver-on-sunday', title: 'Weekend delivery' },
    { keywords: ['holiday', 'christmas', 'thanksgiving'], article: '/articles/usps-holiday-delivery-schedule', title: 'Holiday delivery' },
    { keywords: ['open', 'hours', 'location'], article: '/articles/is-usps-open-today', title: 'USPS hours' },
    { keywords: ['track', 'tracking', 'status'], article: '/', title: 'Track your package' },
    { keywords: ['package', 'parcel'], article: '/articles/usps-package-services', title: 'Package services' },
    { keywords: ['mail', 'letter'], article: '/articles/usps-mail-services', title: 'Mail services' },
    { keywords: ['international', 'global'], article: '/articles/usps-international-shipping', title: 'International shipping' },
    { keywords: ['forward', 'redirect'], article: '/articles/usps-mail-forwarding', title: 'Mail forwarding' },
    { keywords: ['address', 'move', 'relocation'], article: '/articles/usps-change-of-address', title: 'Change of address' }
  ];
  
  // Apply topic-based interlinking
  topicLinks.forEach(({ keywords, article, title }) => {
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      formatted = formatted.replace(regex, `<a href="${article}" class="text-[#1a365d] underline decoration-2 underline-offset-2 font-medium hover:text-[#15223e] transition-colors" title="${title}">${keyword}</a>`);
    });
  });
  
  // Convert markdown links to HTML
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#1a365d] underline decoration-2 underline-offset-2 font-medium hover:text-[#15223e] transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
  
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

function parseArticleContent(section: string): string {
  // Remove URL and Title lines
  let content = section
    .replace(/^URL\s*:\s*.+$/gm, '') // Remove URL lines
    .replace(/^Title\s*:\s*.+$/gm, '') // Remove Title lines
    .replace(/^________________________________________$/gm, '') // Remove separator lines
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
