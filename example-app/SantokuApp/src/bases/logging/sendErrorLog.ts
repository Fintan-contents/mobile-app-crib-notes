let sendErrorLog = (error: unknown) => console.log(String(error));

const setErrorSender = (e: (error: unknown) => void) => {
  sendErrorLog = e;
};

export {sendErrorLog, setErrorSender};
