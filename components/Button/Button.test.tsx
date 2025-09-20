import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "./Button"

describe("Button", () => {
  it("renders with children", () => {
    render(<Button href="/test">Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies secondary styling tokens", () => {
    const { container } = render(
      <Button href="/test" intent="secondary">
        Secondary
      </Button>
    )
    const link = container.querySelector("a")
    expect(link).not.toBeNull()
    const className = link?.className ?? ""
    expect(className).toContain("bg-surface")
    expect(className).toContain("border-subtle")
  })

  it("applies correct size classes", () => {
    const { container } = render(
      <Button href="/test" size="sm">
        Small
      </Button>
    )
    const link = container.querySelector("a")
    expect(link).not.toBeNull()
    const className = link?.className ?? ""
    expect(className).toContain("min-w-20")
    expect(className).toContain("text-[0.68rem]")
  })
})

