import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

interface Article {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    const filePath = path.join(process.cwd(), '..', '..', 'article');
    const data = await readFile(filePath, 'utf8');
    
    // Split the file into individual articles
    const articleSections = data.split(/_{5,}/);
    
    const articles: Article[] = [];
    
    for (const section of articleSections) {
      if (!section.trim()) continue;
      
      const urlMatch = section.match(/URL\s*:\s*(.+?)\s*\n/);
      const titleMatch = section.match(/Title\s*:\s*(.+?)\s*\n/);
      
      if (urlMatch && titleMatch) {
        const url = urlMatch[1].trim();
        const title = titleMatch[1].trim();
        const content = section
          .replace(/^[\s\S]*?Title\s*:.*?\n/, '') // Remove URL and title lines
          .trim();
        
        // Create a slug from the title
        const slug = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
          .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
        
        // Estimate read time (assuming 200 words per minute)
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);
        
        articles.push({
          slug,
          title,
          content: formatArticleContent(content),
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          category: 'USPS Services', // Default category
          readTime: `${readTime} min read`
        });
      }
    }
    
    return articles;
  } catch (error) {
    console.error('Error reading article file:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find(article => article.slug === slug) || null;
}

function formatArticleContent(content: string): string {
  // Convert markdown-style headers to HTML
  let formatted = content
    .replace(/^(#+)\s*(.*?)$/gm, (_, hashes, text) => {
      const level = hashes.length;
      return `<h${level} class="text-${8 - level}xl font-bold mt-6 mb-4">${text}</h${level}>`;
    });
  
  // Convert markdown lists to HTML
  formatted = formatted.replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>');
  formatted = formatted.replace(/(<li>.*<\/li>\n)+/g, (match) => {
    return `<ul class="list-disc pl-6 my-4 space-y-2">\n${match}</ul>\n`;
  });
  
  // Convert markdown links to HTML
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
  
  // Convert paragraphs (text blocks separated by double newlines)
  formatted = formatted.split('\n\n').map(para => {
    if (!para.trim()) return '';
    if (para.trim().startsWith('<h') || para.trim().startsWith('<ul>') || para.trim().startsWith('<li>')) {
      return para; // Skip if already a heading or list
    }
    return `<p class="mb-4 leading-relaxed text-gray-700">${para}</p>`;
  }).join('\n\n');
  
  return formatted;
}

export async function getArticleCategories(): Promise<string[]> {
  const articles = await getAllArticles();
  const categories = new Set(articles.map(article => article.category));
  return ['All', ...Array.from(categories)];
}
