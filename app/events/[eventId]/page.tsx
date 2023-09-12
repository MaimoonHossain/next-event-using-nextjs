'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { getEventById } from '../../../components/dummy-data';

import EventSummary from '../../../components/event-detail/event-summary';
import EventLogistics from '../../../components/event-detail/event-logistics';
import EventContent from '../../../components/event-detail/event-content';
import ErrorAlert from '../../../components/ui/ErrorAlert';

export default function EventDetailPage() {
  const router = useParams();

  const eventId = router.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
