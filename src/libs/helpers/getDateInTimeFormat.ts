export const getDataInTimeFormatFromIso = (isoString: string) => {
  const date = new Date(isoString);

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const formattedDate = date.toLocaleString('en-US', optionsDate);
  const formattedTime = date.toLocaleString('en-US', optionsTime);

  const result = `${formattedDate},${formattedTime}`;

  return result;
};
