import { OMComponent } from "./OMComponent";
import { OMPort } from "./OMPort";
import { OMLibraryNode } from "./OMLibraryNode";

export class OMComponentLibrary {
  private components: Map<String, OMComponent>;

  public constructor(libraryNodes: OMLibraryNode[]) {
    this.components = new Map<String, OMComponent>();
    libraryNodes.forEach((node) => this.parseLibraryNodesTree(node));
  }

  public getComponentById(id: string): OMComponent {
    return this.components.get(id);
  }

  private parseLibraryNodesTree(node: OMLibraryNode) {
    if (node.nodeType === "component") {
      const component: OMComponent = this.getComponentFromNodeJson(node);
      this.components.set(component.componentId, component);
    } else {
      node.children.forEach((child) => {
        this.parseLibraryNodesTree(child);
      });
    }
  }

  private getComponentFromNodeJson(node: OMLibraryNode): OMComponent {
    const omComponent: OMComponent = new OMComponent(
      node.id,
      node.displayLabel,
      node.svgPath,
      node.size
    );
    node.connectors.forEach((connector) => {
      omComponent.addPort(
        new OMPort(connector.id, connector.svgPath, connector.placement)
      );
    });
    return omComponent;
  }
}
