'use client';
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../components/dummy-data';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function onSerach(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath, { scroll: false });
  }
  return (
    <>
      <EventsSearch onSearch={onSerach} />
      <EventList items={allEvents} />
    </>
  );
}
