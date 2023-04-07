import React from "react";
import Header from "../../Components/Helpers/Header";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Components/Helpers/Error";
import Loading from "../../Components/Helpers/Loading";
const UseStatsGraphs = React.lazy(() => import("./UseStatsGraphs"));
import { STATS_GET } from "../../api";

function UserStats() {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      const { response, json } = await request(url, options);
      console.log(json);
    }
    getData();
  }, []);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Header title="Estatísticas" />
        <UseStatsGraphs data={data} />
      </React.Suspense>
    );
}

export default UserStats;
