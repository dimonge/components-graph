import * as React from "react";
import { ILink } from "../types";

/**
 * https://github.com/danielcaldas/react-d3-graph/blob/master/src/components/link/Link.jsx
 * @param param0 { source: 1, target: 0, cost: 30, distance: 2 },
 */

const Link = ({ source, target, cost, distance }: ILink) => {
  const linkStyle = {};

  const linkProps = {};

  return (
    <g>
      <path id={null as any} {...linkProps}></path>
    </g>
  );
};

export default Link;
