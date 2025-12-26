# Portfolio Website

A modern, responsive portfolio website showcasing projects in AI, machine learning, and full-stack development. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Featured projects with detailed descriptions and tech stacks
- **Contact Integration**: Easy-to-use contact forms and social links
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Icons**: Lucide React
- **State Management**: React Query for data fetching
- **Form Handling**: React Hook Form with validation
- **Deployment**: Ready for static hosting (Vercel, Netlify, etc.)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sarangev/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Shadcn/ui components
│   │   └── portfolio/     # Portfolio-specific components
│   ├── data/              # Static data (projects, profile)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   └── ...
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Personal Information
Update your profile information in `src/data/portfolio.ts`:
- Name, location, bio
- Social media links
- Skills and technologies

### Projects
Add or modify projects in the `projects` array in `src/data/portfolio.ts`:
- Project name and description
- Technologies used
- GitHub repository links
- Featured status and categories

### Styling
- Colors and themes can be customized in `tailwind.config.ts`
- Component styles are in their respective `.tsx` files
- Global styles in `src/index.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy the `dist` folder

### Manual Deployment
```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**E V Sarang**
- GitHub: [@Sarangev](https://github.com/Sarangev)
- LinkedIn: [E V Sarang](https://www.linkedin.com/in/e-v-sarang-51282a247)
- Location: Kannur, Kerala, India

---

Built with ❤️ using React, TypeScript, and modern web technologies.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7410f81b-8218-4f2d-bb32-1ba1f84eabb2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
