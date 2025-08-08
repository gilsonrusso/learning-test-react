export const fetchUsername = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Gilson Russo');
    }, 1000);
  });
};