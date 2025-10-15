// Importa le funzioni dai dati dummy invece di Firebase
import { getAllEvents as getDummyEvents, getFeaturedEvents as getDummyFeaturedEvents, getEventById as getDummyEventById, getFilteredEvents as getDummyFilteredEvents } from '../dummy-data';

export async function getAllEvents() {
  // Usa i dati dummy invece di Firebase
  return getDummyEvents();
}

export async function getFeaturedEvents() {
  // Usa i dati dummy invece di filtrare tutti gli eventi
  return getDummyFeaturedEvents();
}

export async function getEventById(id) {
  // Usa i dati dummy invece di cercare in tutti gli eventi
  return getDummyEventById(id);
}

export async function getFilteredEvents(dateFilter) {
  // Usa i dati dummy invece di filtrare tutti gli eventi
  return getDummyFilteredEvents(dateFilter);
}