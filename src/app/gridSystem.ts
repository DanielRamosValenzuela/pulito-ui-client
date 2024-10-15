import { cva } from 'class-variance-authority';

export const gridVariants = cva('grid gap-4', {
  variants: {
    columns: {
      header: 'grid-cols-1 md:grid-cols-3',
      main: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      footer: 'grid-cols-1',
    },
    spacing: {
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-6',
    },
  },
  defaultVariants: {
    columns: 'main',
    spacing: 'medium',
  },
});
