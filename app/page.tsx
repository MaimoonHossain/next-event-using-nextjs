import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../components/dummy-data';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
}
