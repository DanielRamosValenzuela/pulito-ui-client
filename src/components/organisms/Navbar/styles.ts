import { cva } from "class-variance-authority";

export const navbarStyles = cva('flex items-center justify-between p-4 w-full max-w-screen-xl mx-auto', {
  variants: {
    variant: {
      primary: 'bg-navyBlue text-white',
      transparent: 'bg-transparent text-navyBlue',
    },
  },
  defaultVariants: {
    variant: 'transparent',
  },
});

export const logoStyles = cva('text-xl font-bold');

export const navLinksContainer = cva('hidden md:flex items-center space-x-8');

export const navLink = cva('hover:text-skyBlue transition');

export const userContainer = cva('flex items-center space-x-4');

export const menuButton = cva('md:hidden p-2 bg-sky-blue rounded');

export const userDetails = cva('hidden md:flex items-center space-x-4');

export const userName = cva('text-darkGray p-2 rounded-full font-semibold');

export const userLanguage = cva('text-navyBlue font-medium');
