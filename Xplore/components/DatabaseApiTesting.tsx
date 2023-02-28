// import { useListProjectsPaginated } from "../services/api/projects";
// import { Button } from "react-native";
import { useNewProjects } from "../services/api/projects";

/*

use this hook to test any functionality related to the databse api

The component is used in the 'Home' component to ensure that all tested queries
occur when the user is logged in

*/
export const DatabaseApiTesting = () => {
  const { data } = useNewProjects();
  console.log(JSON.stringify(data, null, 2));
  return <></>;
  // const pag = useListProjectsPaginated();
  // // console.log(`data: ${JSON.stringify(pag.data?.pages.flat(4), null, 4)}`);
  // console.log(
  //   `\nReact Query Info :: status: ${pag.status} error: ${pag.error}`
  // );
  // return (
  //   <>
  //     <Button title="fetch more data!" onPress={() => pag.fetchNextPage()} />
  //     {pag.data?.pages.map((page) =>
  //       page.projects.map((project) => {
  //         console.log(project, null, 4);
  //       })
  //     )}
  //   </>
  // );
  // const to = setTimeout(() => {
  //   pag.fetchNextPage();
  //   if (pag.data?.pageParams.length! > 3) {
  //     clearTimeout(to);
  //   }
  // }, 4000);
  //your code here :)
};

export default DatabaseApiTesting;
