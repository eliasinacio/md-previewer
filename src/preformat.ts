const preformat = 
`# Markdown Previewer 

## Some tips
### For text

Use * or _ to make a text *italic*. 

And use ** or __ to make the text **bold**. 

To make a text *__bold and italic__* use both.

And make the text with ~line through.~

### links and images

For a link put together a [link title] and (link url) [like this](https://freeCodeCamp.org/eliasinacio)

And use a ! before for get a image. In the [] you set a alternative text.

![like image](https://img.icons8.com/color/48/000000/facebook-like--v3.png)

To block Quotes use a >
> Like this

### Tables
 
head | head
--- | ---
body | body

### Lists

Unordered lists are made with - for the list items, and the indentation works here.

- You can
  - Use various
    - Indentation levels

Ordered lists are made with numbers.

1. The indentation works here too.
   1. You can use only 1s.
   1. Automatic index


### Code

\`For inline codes\` use \`

And for codes in multiple lines uses \`\`\`


\`\`\`javascript

// this is a multiple line code

const projectName = 'Markdown Previewer with React.js'
const message = 'Thank you for read this far :)'

window.alert(message);

// this code don't work
\`\`\`
`

export default preformat;