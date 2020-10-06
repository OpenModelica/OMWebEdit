import createEngine, {
  DiagramModel,
  DiagramEngine,
} from "@projectstorm/react-diagrams";
import { OMComponentFactory } from "./custom-nodes/omcomponent/OMComponentFactory";
import { OMComponentLibrary } from "./domain-model/OMComponentLibrary";
import libraryNodes from "./library-nodes.json";

export class Application {
  protected activeModel: DiagramModel;
  protected diagramEngine: DiagramEngine;
  protected componentLibrary: OMComponentLibrary;

  constructor() {
    this.diagramEngine = createEngine();
    this.init();
    this.componentLibrary = new OMComponentLibrary(libraryNodes);
  }

  public init() {
    this.activeModel = new DiagramModel();
    this.diagramEngine.setModel(this.activeModel);

    this.diagramEngine
      .getNodeFactories()
      .registerFactory(new OMComponentFactory());
  }

  public getDiagramEngine(): DiagramEngine {
    return this.diagramEngine;
  }

  public getComponentLibrary(): OMComponentLibrary {
    return this.componentLibrary;
  }
}
