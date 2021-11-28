interface Props {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export default function SlideNav({ isMenuOpen, closeMenu }: Props) {
  return (
    <div className={`slidenav ${isMenuOpen ? "open" : ""}`}>
      <div role="button" className="slidenav__close-button" onClick={closeMenu}>
        <i role="button" className="gg-close" />
      </div>
    </div>
  );
}
