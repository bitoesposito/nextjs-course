import { 
  getAllEvents as getDummyEvents, 
  getFeaturedEvents as getDummyFeaturedEvents, 
  getEventById as getDummyEventById, 
  getFilteredEvents as getDummyFilteredEvents 
} from '../dummy-data';

export async function getAllEvents() {
  // Usa i dati locali invece di Firebase per evitare errori di rete
  return getDummyEvents();
}

export async function getFeaturedEvents() {
  // Usa i dati locali invece di Firebase
  return getDummyFeaturedEvents();
}

export async function getEventById(id) {
  // Usa i dati locali invece di Firebase
  return getDummyEventById(id);
}

export async function getFilteredEvents(dateFilter) {
  // Usa i dati locali invece di Firebase
  return getDummyFilteredEvents(dateFilter);
}