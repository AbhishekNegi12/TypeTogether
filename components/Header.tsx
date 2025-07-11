import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header ", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo1.svg"
          alt="Logo with name"
          width={60}
          height={12}
          className="hidden md:block"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
