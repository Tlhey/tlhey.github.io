const katex = require('katex');
hexo.extend.filter.register('marked:extensions', function(extensions) {
  extensions.push({
    name: 'blockMath',
    level: 'block',
    tokenizer(src) {
      const cap = /^\$\$((?:[^\n]|\n[^\n])+?)\$\$/.exec(src);
      if (cap) {
        return { type: 'blockMath', raw: cap[0], math: cap[1] };
      }
    },
    renderer(token) {
      return `<p>${katex.renderToString(token.math, { displayMode: true })}</p>`;
    }
  });
});
