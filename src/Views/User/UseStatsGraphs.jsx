import React from "react";
import styles from "./UseStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UseStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: +item.acessos,
      };
    });
    setGraph(graphData);
    setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b));
  }, [data]);

  console.log(graph);
  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryPie
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            label: {
              fontSize: 14,
              fill: "#333",
            },
          }}
          padding={{ top: 20, left: 80, bottom: 20, right: 80 }}
          innerRadius={50}
          data={graph}
        />
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UseStatsGraphs;
