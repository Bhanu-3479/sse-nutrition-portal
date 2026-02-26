import Hero from '../components/Hero';
import TrendingTopics from '../components/TrendingTopics';
import ResourceAudiences from '../components/ResourceAudiences';
import FeaturedResources from '../components/FeaturedResources';

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingTopics />
      <ResourceAudiences />
      <FeaturedResources />
    </>
  );
}
