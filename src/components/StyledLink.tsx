import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have cn in this path
import Link from "next/link";

export const StyledLink = ({
  children,
  href,
  type = "primary", // Default to primary
  className, // Allow additional classNames
  ...props // Spread other props
}) => {
  const commonClasses =
    "md:px-6 md:py-3 p-3 rounded-full flex items-center gap-2 transition-colors";

  const primaryClasses = cn(
    commonClasses,
    "bg-brand-primary text-white",
    "hover:bg-brand-secondary hover:text-black",
  );
  const secondaryClasses = cn(
    commonClasses,
    "bg-brand-secondary text-black",
    "hover:bg-brand-primary hover:text-white",
  );

  const baseClasses = type === "primary" ? primaryClasses : secondaryClasses;
  const combinedClasses = cn(baseClasses, className);

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {children}
    </Link>
  );
};
