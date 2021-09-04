export const getFormattedDate = date => {
  const dateSplit = date.split(' ');
  const newDate = new Date(`${dateSplit[0]}T${dateSplit[1]}`);
  const options = {year: 'numeric', month: 'short', day: 'numeric'};

  return newDate.toLocaleDateString('id-ID', options);
};

export default {
  getFormattedDate
};
