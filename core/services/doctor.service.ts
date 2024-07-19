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

const splitWorkHours = (workHours: workHoursType) => {
  // Parse the begin and end times
  let [beginHour, beginMinute] = workHours.begin.split(':').map(Number);
  let [endHour, endMinute] = workHours.end.split(':').map(Number);

  // Initialize the times array and the current time
  let times = [];
  let currentHour = beginHour;
  let currentMinute = beginMinute;

  // Loop until the current time is equal to or greater than the end time
  while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
    // Format the current time and add it to the times array
    let formattedTime = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;
    times.push(formattedTime);

    // Increment the current time by the interval
    currentMinute += 30;
    if (currentMinute >= 60) {
      currentMinute -= 60;
      currentHour += 1;
    }
  }

  return times;
}

export {
  getDoctorsAvailableTimes,
  splitWorkHours,
};
