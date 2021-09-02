import * as React from "react";
import { IComponents } from "../types";
import buildGraph from "./buildGraph";
import styles from "./graph.module.css";

interface IGraph {
  data: IComponents;
}

const Graph = ({ data }: IGraph) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let fn;

    if (containerRef.current) {
      const { destroy } = buildGraph(
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
