import React from "react";

import createEngine, { DiagramModel } from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import "./App.css";
import { OMComponentFactory } from "./custom-nodes/omcomponent/OMComponentFactory";
import { OMComponentModel } from "./custom-nodes/omcomponent/OMComponentModel";
import inductorJson from "./component-inductor.json";
import resistorJson from "./component-resistor.json";
import groundJson from "./component-ground.json";
import { OMPort } from "./domain-model/OMPort";

function getNodeFromServerResponse(nodeJson) {
  let ports = new Array<OMPort>();
  nodeJson.connectors.forEach((connector) => {
    ports.push(connector);
  });
  return new OMComponentModel(
    nodeJson.id,
    nodeJson.svgPath,
    nodeJson.size,
    ports
  );
}

function App() {
  const engine = createEngine();
  engine.getNodeFactories().registerFactory(new OMComponentFactory());
  const model = new DiagramModel();

  const node1 = getNodeFromServerResponse(inductorJson);
  node1.setPosition(0, 50);

  const node2 = getNodeFromServerResponse(resistorJson);
  node2.setPosition(0, 250);

  const node3 = getNodeFromServerResponse(groundJson);
  node3.setPosition(0, 450);

  // add everything to model
  model.addAll(node1, node2, node3);

  // load model into engine
  engine.setModel(model);

  return (
    <div>
      <CanvasWidget engine={engine} className="canvas" />
      <button
        onClick={() => {
          console.log(JSON.stringify(model.serialize()));
        }}
      >
        Serialise Model
      </button>
    </div>
  );
}

export default App;
