export interface OMLibraryNode {
  id: string;
  displayLabel: string;
  nodeType: string;
  svgPath: string;
  size?: {
    width: number;
    height: number;
  };
  connectors?: any;
  parameters?: any;
  children?: OMLibraryNode[];
}
