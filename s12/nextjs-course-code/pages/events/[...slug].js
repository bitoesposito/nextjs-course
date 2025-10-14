import { Fragment } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { getFilteredEvents } from "/dummy-data";

import EventList from "/components/events/event-list";
import Button from "/components/ui/button";
import ResultsTitle from "/components/events/results-title";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const filteredEvents = getFilteredEvents({
    year: +filteredYear,
    month: +filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>No events found for the chosen filter</p>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  return (
    <Fragment>
        <ResultsTitle date={new Date(filteredYear, filteredMonth - 1)}/>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
