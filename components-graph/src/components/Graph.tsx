import * as React from "react";
import { IComponents } from "../types";
import runGraph from "./runGraph";
import styles from "./graph.module.css";
//github.com/danielcaldas/react-d3-graph/blob/master/src/components/graph/Graph.jsx

interface IGraph {
  data: IComponents;
}

const Graph = ({ data }: IGraph) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let fn;

    if (containerRef.current) {
      const { destroy } = runGraph(
        containerRef.current,
        data.links,
        data.nodes
      );
      fn = destroy;
    }
    return fn;
  }, []);
  return <div ref={containerRef} className={styles.container} />;
};

export default Graph;
