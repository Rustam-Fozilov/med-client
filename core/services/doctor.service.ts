interface workHoursType {
  begin: string,
  end: string,
}

const getDoctorsAvailableTimes = (workHours: workHoursType) => {
  const times = [];

  // Parse the begin and end times
  const endTime = workHours.end.split(':');

  // Create a Date object for the end time
  const endDate = new Date();
  endDate.setHours(parseInt(endTime[0], 10), parseInt(endTime[1], 10), 0, 0);

  // Create a Date object for the current time
  const currentDate = new Date();

  // Start from the next 30-minute interval
  currentDate.setMinutes(currentDate.getMinutes() + 30 - (currentDate.getMinutes() % 30));

  // Generate 30-minute intervals until the end time
  while (currentDate <= endDate) {
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    times.push(`${hours}:${minutes}`);

    // Increment by 30 minutes
    currentDate.setMinutes(currentDate.getMinutes() + 30);
  }

  return times;
}

export default getDoctorsAvailableTimes;