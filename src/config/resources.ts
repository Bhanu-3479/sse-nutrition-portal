/** Fallback image when nutrition/other images fail to load (healthy food) */
export const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop';

export const allResources = [
  {
    id: 'diet-plans',
    title: 'Diet Plans',
    description: 'Balanced meal plans tailored for students—weekly menus, portion guides, and calorie awareness.',
    link: '/diet-plans',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    icon: 'UtensilsCrossed',
    category: 'Nutrition',
  },
  {
    id: 'ask-nutritionist',
    title: 'Ask Nutritionist',
    description: 'Get expert answers on diet, supplements, and personalized nutrition advice from campus experts.',
    link: '/ask-nutritionist',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    icon: 'MessageCircle',
    category: 'Nutrition',
  },
  {
    id: 'exam-brain-foods',
    title: 'Exam Brain Foods',
    description: 'Foods that boost focus, memory, and energy—ideal for exam preparation and long study sessions.',
    link: '/exam-brain-foods',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
    icon: 'Brain',
    category: 'Nutrition',
  },
  {
    id: 'student-diet',
    title: 'Student Diet Guides',
    description: 'Hosteller and day scholar diet tips, mess hacks, and affordable healthy eating options.',
    link: '/student-diet',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    icon: 'GraduationCap',
    category: 'Nutrition',
  },
  {
    id: 'hostel',
    title: 'Hostel Mess Menu',
    description: 'Explore nutritious mess options, weekly menus, and how to make the best choices at the hostel.',
    link: '/hostel',
    image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=800&auto=format&fit=crop',
    icon: 'Home',
    category: 'Campus',
  },
  {
    id: 'health-center',
    title: 'Health Center',
    description: 'Book appointments with campus nutritionist and medical staff for personalized health support.',
    link: '/health-center',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop',
    icon: 'Heart',
    category: 'Campus',
  },
  {
    id: 'events',
    title: 'Events & Workshops',
    description: 'Fitness clubs, nutrition workshops, and wellness events to stay active and informed.',
    link: '/events',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    icon: 'Calendar',
    category: 'Campus',
  },
  {
    id: 'about',
    title: 'About Initiative',
    description: 'Our mission, approach to campus wellness, and how we support student nutrition and health.',
    link: '/about',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    icon: 'Info',
    category: 'Info',
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch for queries, feedback, or to schedule a one-on-one with our nutrition team.',
    link: '/contact',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=800&auto=format&fit=crop',
    icon: 'Mail',
    category: 'Info',
  },
  {
    id: 'home',
    title: 'Portal Home',
    description: 'Dashboard, quick links, and overview of all nutrition and wellness resources in one place.',
    link: '/',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    icon: 'LayoutDashboard',
    category: 'Main',
  },
] as const;

/** Data for "Recommended daily macros" pie chart (carbs, protein, fat) */
export const macrosPieData = [
  { label: 'Carbs', value: 50, color: '#ea580c' },
  { label: 'Protein', value: 20, color: '#1e40af' },
  { label: 'Fat', value: 30, color: '#138808' },
];

/** Data for "Resource categories" pie chart */
export const categoriesPieData = [
  { label: 'Nutrition', value: 40, color: '#ea580c' },
  { label: 'Campus', value: 30, color: '#1e40af' },
  { label: 'Info & Main', value: 30, color: '#1e3a8a' },
];
