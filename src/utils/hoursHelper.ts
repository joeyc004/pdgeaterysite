import { OPENING_HOURS } from '../data/eateryData';
import { DaySchedule } from '../types';

export interface CurrentStatus {
  isOpen: boolean;
  statusText: string;
  statusSubtext: string;
  todaySchedule: DaySchedule;
  nextChangeText: string;
  dayIndex: number;
}

export function getCurrentEateryStatus(date: Date = new Date()): CurrentStatus {
  // Day of week: 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const jsDay = date.getDay();
  // Map JS day (0=Sun, 1=Mon, ..., 6=Sat) to OPENING_HOURS index (Mon=0, Tue=1, ..., Sun=6)
  const scheduleIndex = jsDay === 0 ? 6 : jsDay - 1;
  const todaySchedule = OPENING_HOURS[scheduleIndex];

  if (todaySchedule.isClosed) {
    // Find next open day
    let nextDayIndex = (scheduleIndex + 1) % 7;
    while (OPENING_HOURS[nextDayIndex].isClosed) {
      nextDayIndex = (nextDayIndex + 1) % 7;
    }
    const nextOpenDay = OPENING_HOURS[nextDayIndex];
    return {
      isOpen: false,
      statusText: "Closed Today",
      statusSubtext: "Closed on Sundays",
      todaySchedule,
      nextChangeText: `Opens ${nextOpenDay.day} at 7:30 AM`,
      dayIndex: scheduleIndex
    };
  }

  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentTimeMinutes = currentHours * 60 + currentMinutes;

  const [openHour, openMin] = todaySchedule.openTime.split(':').map(Number);
  const [closeHour, closeMin] = todaySchedule.closeTime.split(':').map(Number);

  const openTimeMinutes = openHour * 60 + openMin;
  const closeTimeMinutes = closeHour * 60 + closeMin;

  const isOpen = currentTimeMinutes >= openTimeMinutes && currentTimeMinutes < closeTimeMinutes;

  if (isOpen) {
    const minutesLeft = closeTimeMinutes - currentTimeMinutes;

    let nextChangeText = '';
    if (minutesLeft <= 45) {
      nextChangeText = `Closing in ${minutesLeft} mins (Kitchen orders close at 3:00 PM)`;
    } else {
      nextChangeText = `Open today until ${todaySchedule.closeTime}`;
    }

    return {
      isOpen: true,
      statusText: "Open Now",
      statusSubtext: `Serving today until ${todaySchedule.closeTime}`,
      todaySchedule,
      nextChangeText,
      dayIndex: scheduleIndex
    };
  } else {
    let nextChangeText = '';
    if (currentTimeMinutes < openTimeMinutes) {
      nextChangeText = `Opens today at ${todaySchedule.openTime} AM`;
    } else {
      // after closing: look for next open day
      let nextDayIndex = (scheduleIndex + 1) % 7;
      while (OPENING_HOURS[nextDayIndex].isClosed) {
        nextDayIndex = (nextDayIndex + 1) % 7;
      }
      const nextOpenDay = OPENING_HOURS[nextDayIndex];
      const isTomorrow = nextDayIndex === (scheduleIndex + 1) % 7;
      nextChangeText = isTomorrow 
        ? `Opens tomorrow (${nextOpenDay.shortDay}) at 7:30 AM` 
        : `Opens ${nextOpenDay.day} at 7:30 AM`;
    }

    return {
      isOpen: false,
      statusText: "Closed Now",
      statusSubtext: `Regular hours: ${todaySchedule.displayHours}`,
      todaySchedule,
      nextChangeText,
      dayIndex: scheduleIndex
    };
  }
}
