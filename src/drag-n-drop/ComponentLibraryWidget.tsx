import React from "react";
import styled from "@emotion/styled";
import { TreeView } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LibraryItem from "./LibraryItem";
import componentJson from "../library-nodes.json";
import { Application } from "../Application";

export interface ComponentLibraryWidgetProps {
  app: Application;
}

const Library = styled.div`
  min-width: 250px;
  background: rgb(30, 30, 30);
  flex-grow: 0;
  flex-shrink: 0;
`;

const WidgetHeaderBar = styled.div`
  color: white;
  font-family: Helvetica, Arial, serif;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

export class ComponentLibraryWidget extends React.Component<
  ComponentLibraryWidgetProps
> {
  render() {
    return (
      <Library>
        <WidgetHeaderBar>Component Library</WidgetHeaderBar>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {componentJson.map((node) => (
            <LibraryItem key={node.id} node={node} />
          ))}
        </TreeView>
      </Library>
    );
  }
}
