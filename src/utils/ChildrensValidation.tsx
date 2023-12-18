import React, { ReactElement, ReactNode } from "react";
import IconsActions from "./IconsActions";

const ChildrensValidation = (
  children: React.ReactNode,
  action: IconsActions
) => {
  return React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const node = inspectChildren(child) || child;
      return React.cloneElement(node, {
        onClick: (e) => action.show(e),
        viewerid: (index + 1).toString(),
        key: index
      } as {
        onClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
      });
    }
  });
};
export default ChildrensValidation;

const inspectChildren = (child: ReactNode): ReactElement | null => {
  if (React.isValidElement(child)) {
    let lastImgChild: ReactElement | null = null;

    React.Children.forEach(child.props.children, (grandchild) => {
      const imgChild = inspectChildren(grandchild);

      if (imgChild !== null && imgChild.type === "img") {
        lastImgChild = imgChild;
      }
    });

    return lastImgChild || (child.type === "img" ? child : null);
  }
  return null;
};
