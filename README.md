# Dynamic Island Portfolio with Custom Fonts

A unique, modern portfolio featuring a **dynamic island navigation bar** (inspired by iOS), **custom fonts** (Yapari, Coolvetica, Drowner), and **dark mode toggle**. Built with React, Tailwind CSS, and Framer Motion.

## 🌟 Unique Features

### 🏝️ Dynamic Island Navigation
- **Expandable/collapsible** floating navigation bar
- **Active section indicator** shows current page section
- **Smooth animations** with spring physics
- **Responsive** - adapts to mobile with full-screen menu
- **Glowing effects** when expanded

### 🎨 Custom Fonts
- **Yapari** - Bold display font for large titles
- **Coolvetica** - Clean body font for readable text
- **Drowner** - Modern mono font for UI elements

### 🌓 Dark/Light Mode
- Toggle button in top-right corner
- Remembers preference (localStorage)
- Smooth color transitions
- System preference detection

### 📸 Replaceable Project Photos
- Easy-to-update project images
- Automatic fallback placeholders
- Image optimization ready

## 📂 Project Structure

```
brutalist-portfolio/
├── public/
│   ├── fonts/              # 👈 ADD YOUR FONTS HERE
│   │   ├── Yapari.ttf
│   │   ├── Coolvetica.ttf
│   │   ├── Drowner.ttf
│   │   └── README.md       # Font installation guide
│   ├── projects/           # 👈 ADD PROJECT IMAGES HERE
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   └── README.md       # Image guide
│   └── profile-picture.jpg # Your profile photo
├── src/
│   ├── components/
│   │   ├── Navigation.jsx  # 🏝️ Dynamic Island
│   │   ├── DarkModeToggle.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Featured.jsx    # With replaceable images
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js # 👈 EDIT YOUR CONTENT
│   └── ...
└── ...
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Custom Fonts

**Required fonts:**
- Yapari
- Coolvetica
- Drowner

**Download sources:**
- Search "Yapari font download"
- Search "Coolvetica font download" (widely available)
- Search "Drowner font download"

**Place fonts in `/public/fonts/`:**
```
/public/fonts/
├── Yapari.ttf
├── Coolvetica.ttf
└── Drowner.ttf
```

**Don't have the fonts?** See `/public/fonts/README.md` for:
- Alternative font sources
- How to use fallback fonts
- Free Google Fonts alternatives

### 3. Add Project Images

Place your project photos in `/public/projects/`:
```
/public/projects/
├── project-1.jpg  # First featured project
├── project-2.jpg  # Second featured project
└── project-3.jpg  # Third featured project
```

**Image specs:**
- Aspect ratio: 4:3
- Recommended: 1600x1200px
- Format: JPG, PNG, or WebP
- Size: Under 500KB

**No images yet?** The portfolio will show stylish placeholders automatically!

See `/public/projects/README.md` for detailed image guidelines.

### 4. Add Profile Picture

```
/public/profile-picture.jpg  (square, 1000x1000px recommended)
```

### 5. Customize Content

Edit `src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "YOUR NAME",
    role: "YOUR ROLE",
    tagline: "Your unique tagline",
    email: "your@email.com",
    // ... more fields
  },
  // ... update projects, featured work, etc.
}
```

### 6. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173`

## 🎨 Dynamic Island Features

### Collapsed State
- Shows logo and active section
- Compact floating design
- Expand button on right

### Expanded State
- Full navigation menu
- Icon + text for each section
- Active section highlighted in red
- Close button with rotation animation

### Active Section Tracking
- Automatically detects which section is visible
- Updates indicator in real-time
- Smooth transitions between sections

### Responsive Behavior
- **Desktop**: Horizontal expanded menu
- **Tablet**: Compact menu with icons
- **Mobile**: Full-screen overlay menu

## 🎯 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brutal: {
    red: '#ff0000',        // Change main accent color
    'red-dark': '#cc0000',
    'red-light': '#ff3333',
  }
}
```

### Use Different Fonts

**Option 1: Replace with other fonts**
Download different fonts and update names in `/public/fonts/`

**Option 2: Use Google Fonts**
Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap');

@font-face {
  font-family: 'Yapari';
  src: local('Anton');
}
```

### Adjust Dynamic Island

Edit `src/components/Navigation.jsx`:

```javascript
// Change collapsed width
width: isExpanded ? '700px' : '320px',  // Adjust 320px

// Change expand speed
transition={{ type: "spring", stiffness: 400 }}  // Higher = faster
```

### Replace Project Images

Simply add/replace images in `/public/projects/` with the same naming convention:
- `project-1.jpg`
- `project-2.jpg`
- etc.

Or update the image path in `src/components/Featured.jsx`.

## 📧 Email Setup

The contact form currently simulates email sending. For production:

### Using EmailJS (Recommended)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `src/utils/emailService.js`:

```javascript
import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    return { success: true, message: 'Email sent!' };
  } catch (error) {
    throw new Error('Failed to send email');
  }
};
```

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Auto-deploys ✅

### Deploy to Netlify
1. Run `npm run build`
2. Upload `dist/` folder
3. Deploy ✅

## 🔧 Troubleshooting

### Fonts Not Showing?
1. **Check files exist** in `/public/fonts/`
2. **Verify file names** match exactly (case-sensitive)
3. **Restart dev server** after adding fonts
4. **Check browser console** for font loading errors
5. **Use fallback fonts** - See `/public/fonts/README.md`

### Project Images Not Showing?
1. **Check files exist** in `/public/projects/`
2. **Verify naming** - Must be `project-1.jpg`, `project-2.jpg`, etc.
3. **Check file format** - Use .jpg, .png, or .webp
4. **Hard refresh** browser (Ctrl+F5 / Cmd+Shift+R)
5. Don't worry - **placeholders look great** if images are missing!

### Dark Mode Issues?
1. Clear browser cache
2. Check localStorage in dev tools
3. Ensure toggle button is visible (top-right)

### Dynamic Island Not Responsive?
1. Test on actual devices (not just browser resize)
2. Check console for JavaScript errors
3. Clear cache and hard refresh

## 📱 Responsive Design

- **Mobile** (< 640px): Full-screen menu on expand, compact island
- **Tablet** (640px - 1024px): Medium island with icon navigation
- **Desktop** (> 1024px): Full island with text labels

## 🎨 Font Usage in Design

- **Yapari**: Large hero titles, section headings, display numbers
- **Coolvetica**: Body text, descriptions, readable content
- **Drowner**: UI elements, buttons, navigation items, meta info

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Free for personal and commercial use!

## 🙏 Credits

Built with:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

**Fonts**: Yapari, Coolvetica, Drowner (ensure you have proper licenses)

---

**Made with precision and a floating island** 🏝️✨
