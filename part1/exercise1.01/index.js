const logCurrentDate = () => {
  const currDate = new Date();
  console.log(currDate);
};

setInterval(() => logCurrentDate(), 5000);
