'use client'

import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function PrimaryButton({ 
  children,
  className,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button className={twMerge(
    'rounded-full bg-white px-5 py-[0.65rem] cursor-pointer', 
    className)}
    {...rest}>
      {children}
    </button>
  )
}