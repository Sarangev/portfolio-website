import { Helmet } from 'react-helmet-async';
import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import { profile } from '@/data/portfolio';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>{profile.name} | Developer Portfolio</title>
        <meta name="description" content={profile.bio} />
        <meta property="og:title" content={`${profile.name} | Developer Portfolio`} />
        <meta property="og:description" content={profile.tagline} />
        <meta property="og:image" content={profile.avatar} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} | Developer Portfolio`} />
        <meta name="twitter:description" content={profile.tagline} />
        <link rel="canonical" href="https://sarangev.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <PortfolioHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
