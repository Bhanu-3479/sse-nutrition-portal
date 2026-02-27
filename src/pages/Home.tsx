import Hero from '../components/Hero';
import DashboardSection from '../components/DashboardSection';
import FeaturedResources from '../components/FeaturedResources';
import TrendingTopics from '../components/TrendingTopics';
import ResourceAudiences from '../components/ResourceAudiences';
import LandingPagesTabs from '../components/LandingPagesTabs';

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardSection />
      <FeaturedResources />
      <TrendingTopics />
      <ResourceAudiences />
      <LandingPagesTabs />
    </>
  );
}
