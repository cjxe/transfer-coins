import { HiMenu, HiX } from 'react-icons/hi';
import { useContext } from 'react';
import ButtonWithIcon from '@/components/core/Buttons/ButtonWithIcon';
import { NavbarContext } from '@/components/core/Navbar/NavbarContext/NavbarContext';

function NavbarToggle() {
  const [isOpen, setIsOpen] = useContext(NavbarContext);

  function expandNavbar() {
    if (isOpen === false) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <div className="lg:hidden">
      <ButtonWithIcon
        variant="secondary"
        size="base"
        Icon={isOpen ? HiX : HiMenu}
        onClick={() => {
          return expandNavbar();
        }}
        aria-label="hamburger menu"
      />
    </div>
  );
}

export default NavbarToggle;
