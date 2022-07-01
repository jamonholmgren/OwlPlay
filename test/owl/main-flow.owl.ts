import { press, takeScreenshot } from "react-native-owl"

describe("app.tsx", () => {
  it("takes a screenshot of the first screen", async () => {
    const screen = await takeScreenshot("welcomescreen")

    expect(screen).toMatchBaseline()
  })
})

describe("app.tsx", () => {
  it("presses the continue button, then takes a screenshot", async () => {
    await press("next-screen-button")

    const screen = await takeScreenshot("demoscreen")

    expect(screen).toMatchBaseline()
  })
})
