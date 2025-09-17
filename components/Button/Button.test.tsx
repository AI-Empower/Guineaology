import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "./Button"

describe("Button", () => {
  it("renders with children", () => {
    render(<Button href="/test">Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies creamy secondary styling", () => {
    const { container } = render(
      <Button href="/test" intent="secondary">
        Secondary
      </Button>,
    )
    const link = container.querySelector("a")
    expect(link).not.toBeNull()
    const className = link?.className ?? ""
    expect(className).toContain("bg-white/70")
    expect(className).toContain("text-[#b6662b]")
  })

  it("applies compact size classes", () => {
    const { container } = render(
      <Button href="/test" size="sm">
        Small
      </Button>,
    )
    const link = container.querySelector("a")
    expect(link).not.toBeNull()
    const className = link?.className ?? ""
    expect(className).toContain("text-xs")
    expect(className).toContain("min-w-24")
  })
})
