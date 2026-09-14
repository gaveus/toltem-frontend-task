import React from "react";
import { Link as LinkAtom } from "../atoms/Link";interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}
export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  active = false,
  onClick,
  className,
}) => {
  return (
    <LinkAtom href={href} active={active} onClick={onClick} className={className}>
      {label}
    </LinkAtom>
  );
};

export default NavItem;
