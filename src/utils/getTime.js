export const getCurrentTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return { hours, minutes, format };
};

export const getTime = (input) => {
  let date = input;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return { hours, minutes, format };
};
