# Project Images Directory

## Add Your Project Photos Here

This folder contains images for your featured projects in the portfolio.

## Required Images

Based on your portfolio data, you need images for each featured project:

```
/public/projects/
├── project-1.jpg  (or .png, .webp)
├── project-2.jpg
├── project-3.jpg
└── ... (add more as needed)
```

## Image Requirements

### Recommended Specifications:
- **Aspect Ratio**: 4:3 (e.g., 1600x1200px or 1200x900px)
- **Format**: JPG, PNG, or WebP
- **File Size**: Under 500KB (compressed)
- **Quality**: High resolution but optimized for web

### Image Naming:
Files must be named exactly as: `project-1.jpg`, `project-2.jpg`, etc.
- The number corresponds to the project ID in `src/data/portfolioData.js`
- Use lowercase
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## How to Add Images

### Option 1: Use Your Own Photos
1. Prepare your project screenshots/photos
2. Resize to recommended dimensions (1600x1200px)
3. Compress using:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)
4. Rename to `project-1.jpg`, `project-2.jpg`, etc.
5. Place in this `/public/projects/` folder

### Option 2: Use Placeholder Images
For testing, you can use free stock photos:

**Free image sources:**
- [Unsplash](https://unsplash.com/) - High quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images

### Option 3: Update Image Paths
If you want to use different filenames or formats, edit:

`src/components/Featured.jsx`:

```jsx
<img 
  src={`/projects/your-custom-name-${project.id}.png`}
  alt={project.title}
  // ...
/>
```

## What Happens Without Images?

Don't worry! If images are missing, the portfolio will show:
- A stylish placeholder with the project number
- Instructions on where to add the image
- No broken image icons

The portfolio looks professional even without images!

## Different Formats

You can mix formats:
```
project-1.jpg
project-2.png
project-3.webp
```

Just update the file extension in `Featured.jsx` if you use different formats for different projects.

## Image Optimization Tips

1. **Compress images** before uploading (aim for under 200KB per image)
2. **Use WebP format** for better compression and quality
3. **Resize to exact dimensions** needed (don't upload 4000x3000px images)
4. **Use descriptive alt text** in the code for accessibility

## Quick Start Command

If you have images ready in another folder:

```bash
# Copy all project images to this folder
cp ~/Downloads/project-*.jpg ./public/projects/

# Or on Windows
copy C:\Downloads\project-*.jpg public\projects\
```

## Example Setup

```
/public/projects/
├── project-1.jpg     # "NEON DREAMS" project image
├── project-2.jpg     # "REVOLT STUDIO" project image  
├── project-3.jpg     # "CHAOS ENGINE" project image
└── README.md         # This file
```

## Need Help?

If you're having issues with images:
1. Check the browser console for errors
2. Verify file names match exactly (including case)
3. Ensure files are in the correct `/public/projects/` directory
4. Try refreshing the page (Ctrl+F5 / Cmd+Shift+R)

Happy showcasing! 🎨
