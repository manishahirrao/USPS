import { NextResponse } from 'next/server';

// Embedded article data
const ARTICLE_DATA = `URL : https://USPStrackingnumber.online/Does-USPS-Deliver-On-Sunday-?
Title : Does USPS Deliver On Sunday? 
Yes, USPS does offer limited Sunday delivery, but it's not available for all types of mail. Here's what you need to know:
________________________________________
✅ When Does USPS Deliver on Sundays?
1.	Priority Mail Express
2.	Amazon Packages
________________________________________
❌ When USPS Does Not Deliver on Sundays
•	First-Class Mail, USPS Ground Advantage, Media Mail, and standard Priority Mail (non-express) are not delivered on Sundays.

URL : https://uspstrackingnumber.online/ Does-USPS-Deliver-On-Saturday
Title : Does USPS Deliver On Saturday ?
Yes, USPS does deliver on Saturdays. In fact, Saturday delivery is a standard part of USPS operations, and most residential and commercial addresses in the U.S. receive mail six days a week—Monday through Saturday.
________________________________________
✅ What USPS Delivers on Saturdays
1.	First-Class Mail
2.	Priority Mail & Priority Mail Express
3.	USPS Ground Advantage
4.	Amazon Packages (via USPS)

URL : https://USPStrackingNumber.Online/what-time-does-USPS-deliver?
Title : What Time Does USPS Deliver ?
USPS delivery times can vary depending on the mail class, location, and delivery volume for that day. However, USPS typically delivers mail between 9:00 a.m. and 5:00 p.m., Monday through Saturday.
________________________________________
🕒 General USPS Delivery Hours
•	Residential Areas: 9:00 a.m. to 5:00 p.m.
•	Business Addresses: Usually by 3:00–4:00 p.m.
•	Sundays: 10:30 a.m. to 6:30 p.m. (limited services only)`;

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
