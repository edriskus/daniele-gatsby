import React, { useRef, useCallback, ComponentType, Ref } from "react";
import { useRect } from "@reach/rect";
import {
  OverridableComponent,
  OverridableTypeMap
} from "@material-ui/core/OverridableComponent";
import { Box } from "@material-ui/core";

interface Props {
  reportPosition(position?: number): void;
}

interface OverridableType extends OverridableTypeMap {
  props: Props;
  defaultComponent: typeof Box;
  classKey: string;
}

const PositionListener: OverridableComponent<OverridableType> = (
  props: Props & { component: ComponentType<{ ref: Ref<HTMLElement> }> }
) => {
  const { reportPosition, component: Component, ...restProps } = props;
  const ref = useRef<HTMLElement | undefined>();

  const handleRect = useCallback(
    (rect?: DOMRect) => {
      reportPosition(rect?.bottom);
    },
    [reportPosition]
  );

  useRect(ref, { observe: true, onChange: handleRect });

  return <Component ref={ref} {...restProps} />;
};

export default PositionListener;
