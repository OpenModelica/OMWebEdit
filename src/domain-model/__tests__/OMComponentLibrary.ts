import { OMComponentLibrary } from "../OMComponentLibrary";
import libraryNodes from "./library-nodes.json";

let componentLibrary;

beforeAll(() => {
  componentLibrary = new OMComponentLibrary(libraryNodes);
});

test("validate that component lookup map contains expected entries post parsing library nodes tree", () => {
  const fooInductorComponent = componentLibrary.getComponentById(
    "Modelica.Foo.Analog.Basic.Inductor"
  );

  expect(componentLibrary.components.size).toBe(5);
  const keys = Array.from(componentLibrary.components.keys());
  expect(keys).toMatchInlineSnapshot(`
    Array [
      "Modelica.Electrical.Analog.Basic.Inductor",
      "Modelica.Electrical.Analog.Basic.Resistor",
      "Modelica.Electrical.Analog.Sources.SignalVoltage",
      "Modelica.Electrical.Analog.Basic.Ground",
      "Modelica.Foo.Analog.Basic.Inductor",
    ]
  `);
});
