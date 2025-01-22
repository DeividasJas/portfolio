export const handleResizeTransition = (elementSelector: string) => {
  const element = document.querySelector<HTMLElement>(elementSelector);
  let resizing = false;
  let timeoutId: ReturnType<typeof setTimeout>;

  const disableTransition = () => {
    if (element) {
      element.style.transition = "none";
    }
  };

  const enableTransition = () => {
    if (element) {
      element.style.transition = ""; // Restore the original transition style
    }
  };

  const handleResize = () => {
    if (!resizing) {
      disableTransition();
      resizing = true;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      enableTransition();
      resizing = false;
    }, 200); // Adjust delay as needed
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize); // Return a cleanup function
};
