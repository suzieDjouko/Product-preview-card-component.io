# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
:root{
  --color-cream:hsl(30, 38%, 92%);
  --color-Darkcyan:hsl(143, 45%, 20%);
  --color-Darkcyan:hsl(158, 36%, 37%);
  --color-grayishblue:hsl(228, 12%, 48%);
  --color-white:hsl(0, 0%, 100%);
  --color-darkblue: hsl(212, 21%, 14%);
}

.img{
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            width: 100%;
            height: 385px;
            background-image: url("images/image-product-desktop.jpg");
            
        }
```
```js
const image = document.querySelector('img');

window.addEventListener('resize', function() {
  if (window.innerWidth >= 1400) {
    image.src = 'images/image-product-desktop.jpg';
   
  } else {
    image.src = 'images/image-product-mobile.jpg';
  }
});

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Useful resources

- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me  underatanding how Flexbox work. I really liked this pattern and will use it going forward.
- [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - This is an amazing article which helped me finally understand the Grid. I'd recommend it to anyone still learning this concept.



## Author
- Frontend Mentor - [@suzieDjouko](https://www.frontendmentor.io/profile/suzieDjouko)


