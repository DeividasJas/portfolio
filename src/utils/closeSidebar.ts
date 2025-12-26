export const handleClickOutside = (
  event: MouseEvent,
  sidebarRef: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLElement>,
  setClicked: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const clickedOutside =
    sidebarRef.current &&
    !sidebarRef.current.contains(event.target as Node) &&
    buttonRef.current &&
    !buttonRef.current.contains(event.target as Node);

  if (clickedOutside) {
    setClicked(false);
  }
};
