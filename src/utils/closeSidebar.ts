export const handleClickOutside = (
  event: MouseEvent,
  sidebarRef: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLElement>,
  clicked: boolean,
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    sidebarRef.current &&
    !sidebarRef.current.contains(event.target) &&
    buttonRef.current &&
    !buttonRef.current.contains(event.target)
  ) {
    setClicked(false); // Close sidebar if clicking outside
  }
  if (
    buttonRef.current &&
    buttonRef.current.contains(event.target) &&
    clicked
  ) {
    setClicked(false); // Close sidebar if clicking the button again while open
  }
  if (
    buttonRef.current &&
    buttonRef.current.contains(event.target) &&
    clicked
  ) {
    setClicked(true); // Open sidebar if clicking the button while closed
  }
};
