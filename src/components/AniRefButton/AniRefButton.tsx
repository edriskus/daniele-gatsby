import React, { forwardRef, PropsWithChildren, Ref } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyLinkProps } from "gatsby";

interface Props extends GatsbyLinkProps<any> {
  paintDrip?: boolean;
  swipe?: boolean;
  cover?: boolean;
  fade?: boolean;
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  top?: "entry" | "exit";
  entryOffset?: number;
  color?: string;
  hex?: string;
  bg?: string;
}

export default forwardRef(function AniRefButton(
  { children, ...props }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref}>
      <AniLink {...props}>{children}</AniLink>
    </div>
  );
});
