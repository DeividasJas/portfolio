export const handleClickOutside = (
  event: MouseEvent,
  sidebarRef: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLElement>,
  clicked: boolean,
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    sidebarRef.current &&
    !sidebarRef.current.contains(event.target as any) &&
    buttonRef.current &&
    !buttonRef.current.contains(event.target as any)
  ) {
    setClicked(false); // Close sidebar if clicking outside
  }
  if (
    buttonRef.current &&
    buttonRef.current.contains(event.target as any) &&
    clicked
  ) {
    setClicked(false); // Close sidebar if clicking the button again while open
  }
  if (
    buttonRef.current &&
    buttonRef.current.contains(event.target as any) &&
    clicked
  ) {
    setClicked(true); // Open sidebar if clicking the button while closed
  }
};