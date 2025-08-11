# 💍 Digital Wedding Invitation

A modern, responsive wedding invitation web app built with React and Vite. It features a live countdown, an embedded YouTube video, soft background music, a dynamic photo gallery, an event schedule, an interactive map, and a sticky bottom navigation optimized for mobile.

## 🌐 Live Site
**https://jirawanjirayu-wedding.netlify.app**

## 📸 Preview
Add a screenshot to your repo and update the path below.
```md
![Preview](public/preview.png)
```

## ✨ Features
- Hero section with animated logo and Cloudinary background image
- Live countdown timer to the wedding date
- Embedded YouTube video with inline playback
- Background music that starts after user interaction
- Responsive photo gallery powered by Swiper
- Location section with Google Map embed and Directions button
- Add to Google Calendar button
- Sticky bottom navigation and smooth scrolling
- Mobile first layout and accessible semantic markup

## 🧰 Tech Stack
- React + Vite
- Swiper for the gallery
- Cloudinary for image hosting
- Google Fonts: Dancing Script and Sarabun
- YouTube IFrame API
- Netlify for deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or newer

### Local development
```bash
# 1. Clone the repository
git clone https://github.com/SkyJirayuDev/digital-wedding-invitation.git
cd digital-wedding-invitation

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# open http://localhost:5173
```

### Production build
```bash
npm run build
# preview the build locally
npm run preview
```

## 🔧 Configuration Notes
- Update the wedding date in `App.jsx` at `new Date("YYYY-MM-DDTHH:mm:ss")` for the countdown.
- Place background music in `public/music/` and set the `<audio src="/music/your-file.mp3" />` path. Ensure you have the rights to the audio.
- Replace Cloudinary image URLs in `App.jsx` and header background in `wedding.css` with your own images.
- Update SEO in `public/index.html` like `<title>`, meta description, and social preview tags.

## ✅ Accessibility and Performance
- Images include descriptive `alt` text
- `playsinline` is enabled for mobile video playback
- Use compressed images and Cloudinary transformations for faster loading

## 🙏 Acknowledgments
- Fonts from Google Fonts
- Images hosted on Cloudinary
- YouTube IFrame API for video embedding

## 👨‍💻 About the Developer
Created by **SkyJirayuDev**  
- [LinkedIn Profile](https://www.linkedin.com/in/skyjirayu)  

