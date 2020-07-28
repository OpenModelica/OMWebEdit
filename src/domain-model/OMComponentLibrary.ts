import inductorJson from "../component-inductor.json";
import resistorJson from "../component-resistor.json";
import groundJson from "../component-ground.json";
import { OMComponent } from "./OMComponent";
import { OMPort } from "./OMPort";

export class OMComponentLibrary {
  getAllComponents(): OMComponent[] {
    let components = new Array<OMComponent>();
    const node1: OMComponent = this.getNodeFromServerResponse(inductorJson);
    const node2: OMComponent = this.getNodeFromServerResponse(resistorJson);
    const node3: OMComponent = this.getNodeFromServerResponse(groundJson);
    components.push(node1);
    components.push(node2);
    components.push(node3);
    return components;
  }

  getNodeFromServerResponse(nodeJson): OMComponent {
    let ports = new Array<OMPort>();
    nodeJson.connectors.forEach((connector) => {
      ports.push(connector);
    });
    return new OMComponent(nodeJson.id, nodeJson.svgPath, nodeJson.size, ports);
  }
}