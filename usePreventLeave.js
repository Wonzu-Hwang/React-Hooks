export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeUnload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeUnload", listener);
  return { enablePrevent, disablePrevent };
};
