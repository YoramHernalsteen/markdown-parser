function parseMarkdown(markdown){
  //ul
  markdown = markdown.replace(/^\s*\n\*/gm, '<ul>\n*');
  markdown = markdown.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
  markdown = markdown.replace(/^\*(.+)/gm, '<li>$1</li>');
  
  //ol
  markdown = markdown.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  markdown = markdown.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  markdown = markdown.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  
  //blockquote
  markdown = markdown.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
  
  //h
  markdown = markdown.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
  markdown = markdown.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
  markdown = markdown.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
  markdown = markdown.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
  markdown = markdown.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
  markdown = markdown.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
  
  //alt h
  markdown = markdown.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
  markdown = markdown.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
  
  //images
  markdown = markdown.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  //links
  markdown = markdown.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
  
  //font styles
  markdown = markdown.replace(/[\*\_]{3}([^\*\_]+)[\*\_]{3}/g, '<em><strong>$1</strong></em>');
  markdown = markdown.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<strong>$1</strong>');
  markdown = markdown.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<em>$1</em>');
  markdown = markdown.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
  
  //pre
  markdown = markdown.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
  markdown = markdown.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
  
  //code
  markdown = markdown.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
  
  //p
  markdown = markdown.replace(/^\s*(\n)?(.+)/gm, function(m){
    return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
  });
  
  //strip p from pre
  markdown = markdown.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
  
  return markdown;
  
}

export {parseMarkdown};