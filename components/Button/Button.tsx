import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-full",
    "border",
    "border-orange-300/70",
    "px-6",
    "py-3",
    "text-center",
    "font-semibold",
    "uppercase",
    "tracking-[0.25em]",
    "transition-all",
    "duration-300",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "focus-visible:outline-[#f97316]/60",
    "shadow-lg",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-gradient-to-r",
          "from-[#f97316]",
          "via-[#fb7185]",
          "to-[#facc15]",
          "text-[#2c190a]",
          "shadow-[#f97316]/40",
          "enabled:hover:scale-[1.02]",
          "hover:brightness-105",
        ],
        secondary: [
          "bg-white/70",
          "text-[#b6662b]",
          "shadow-none",
          "hover:bg-gradient-to-r",
          "hover:from-[#ffe7c2]",
          "hover:via-[#ffdfe4]",
          "hover:to-[#dff2ff]",
          "hover:text-[#2c190a]",
          "enabled:hover:shadow-[0_20px_45px_-25px_rgba(249,115,22,0.45)]",
        ],
      },
      size: {
        sm: ["min-w-24", "py-2.5", "text-xs"],
        lg: ["min-w-36", "py-3.5", "text-sm", "md:text-base"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
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
