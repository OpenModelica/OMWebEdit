import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import { LibraryItemWidget } from "./LibraryItemWidget";
import styled from "@emotion/styled";

const LibraryNode = styled.div`
  color: white;
  font-family: Helvetica, Arial, serif;
  padding: 2px;
  margin: 0 2px 2px;
  cursor: pointer;
`;

export default function LibraryItem(props) {
  if (props.node.nodeType === "collection") {
    return (
      <LibraryNode>
        <TreeItem nodeId={props.node.id} label={props.node.displayLabel}>
          {props.node.children &&
            props.node.children.map((node) => (
              <LibraryItem key={node.id} node={node} />
            ))}
        </TreeItem>
      </LibraryNode>
    );
  } else {
    return (
      <LibraryNode>
        <LibraryItemWidget
          nodeEventData={{
            componentId: props.node.id,
          }}
          key={props.node.id}
          name={props.node.displayLabel}
        />
      </LibraryNode>
    );
  }
}
