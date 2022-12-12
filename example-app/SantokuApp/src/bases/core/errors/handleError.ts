let handleError = (error: unknown) => console.log(String(error));

const setHandleError = (e: (error: unknown) => void) => {
  handleError = e;
};

export {handleError, setHandleError};
