import { cva, type VariantProps } from "class-variance-authority"
import type { AnchorHTMLAttributes } from "react"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "inline-flex",
    "items-center",
<<<<<<< Updated upstream
    "rounded-xl",
    "text-center",
    "border",
    "border-blue-400",
    "transition-colors",
    "delay-50",
=======
    "justify-center",
    "rounded-full",
    "border",
    "px-6",
    "py-3",
    "text-center",
    "font-semibold",
    "uppercase",
    "tracking-[0.24em]",
    "transition-colors",
    "duration-200",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-60",
>>>>>>> Stashed changes
  ],
  {
    variants: {
      intent: {
<<<<<<< Updated upstream
        primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-700"],
        secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
=======
        primary: [
          "border-[color:var(--color-accent)]",
          "bg-accent-soft",
          "text-heading",
          "shadow-soft",
          "hover:bg-[color:var(--color-accent)]/20",
          "hover:text-heading",
          "focus-visible:outline-[color:var(--color-accent)]",
        ],
        secondary: [
          "border-subtle",
          "bg-surface",
          "text-soft",
          "hover:border-strong",
          "hover:bg-surface-muted",
          "hover:text-heading",
          "focus-visible:outline-[color:var(--color-accent)]",
        ],
        quiet: [
          "border-transparent",
          "bg-transparent",
          "text-soft",
          "hover:bg-surface-muted",
          "hover:text-heading",
          "focus-visible:outline-[color:var(--color-accent)]",
        ],
      },
      size: {
        sm: ["min-w-20", "px-4", "py-2.5", "text-[0.68rem]"],
        lg: ["min-w-36", "py-3", "text-xs", "md:text-sm"],
>>>>>>> Stashed changes
      },
      underline: { true: ["underline", "underline-offset-4"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href: string
}

export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <a className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </a>
  )
}
