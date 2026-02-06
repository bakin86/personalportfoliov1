# Fonts Directory

## Required Fonts

This portfolio uses three custom fonts:

1. **Yapari** - Display font for large titles
2. **Coolvetica** - Body font for regular text
3. **Drowner** - Mono font for UI elements

## Installation Instructions

### Step 1: Download the Fonts

You need to obtain these fonts and place them in this directory.

**Where to find them:**
- **Yapari**: Search "Yapari font download" or check font websites like DaFont, FontSquirrel
- **Coolvetica**: Search "Coolvetica font download" - widely available
- **Drowner**: Search "Drowner font download" or check designer font sites

### Step 2: Convert Fonts (if needed)

For best web compatibility, you should have these formats:
- `.ttf` (TrueType Font) - Required
- `.woff2` (Web Open Font Format 2) - Recommended
- `.woff` (Web Open Font Format) - Optional

**Free font converters:**
- https://transfonter.org/
- https://www.fontsquirrel.com/tools/webfont-generator

### Step 3: Place Font Files Here

Your font files should be named exactly as follows:

```
/public/fonts/
├── Yapari.ttf
├── Yapari.woff2
├── Yapari.woff
├── Coolvetica.ttf
├── Coolvetica.woff2
├── Coolvetica.woff
├── Drowner.ttf
├── Drowner.woff2
└── Drowner.woff
```

**Minimum required:** Just the `.ttf` files will work, but `.woff2` is recommended for better performance.

### Step 4: Fallback Fonts

If you can't obtain these specific fonts, you can use alternatives:

Edit `src/index.css` and update the font-face declarations:

```css
@font-face {
  font-family: 'Yapari';
  /* Use a fallback like Anton, Bebas Neue, or Impact */
  src: local('Anton'), local('Bebas Neue');
}

@font-face {
  font-family: 'Coolvetica';
  /* Use a fallback like Helvetica or Arial */
  src: local('Helvetica'), local('Arial');
}

@font-face {
  font-family: 'Drowner';
  /* Use a fallback like Roboto Mono or Courier */
  src: local('Roboto Mono'), local('Courier');
}
```

Or use Google Fonts as alternatives:

```css
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;700&family=Roboto+Mono&display=swap');

/* Then update font families */
font-family: 'Anton', sans-serif;      /* Instead of Yapari */
font-family: 'Roboto', sans-serif;      /* Instead of Coolvetica */
font-family: 'Roboto Mono', monospace;  /* Instead of Drowner */
```

## Testing

After adding fonts, restart your dev server:

```bash
npm run dev
```

Check the browser console for any font loading errors.

## Legal Notice

⚠️ **Important:** Make sure you have the proper license to use these fonts for your project. Some fonts are free for personal use but require a license for commercial use.

Always check the font license before using it in your portfolio.
