let handleErrorWithSnackbar = (error: unknown, message: string) => console.log(String(error));

const setHandleErrorWithSnackbar = (e: (error: unknown, message: string) => void) => {
  handleErrorWithSnackbar = e;
};

export {handleErrorWithSnackbar, setHandleErrorWithSnackbar};
