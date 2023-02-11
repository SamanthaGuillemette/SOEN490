import { useListProjects } from "../services/api/projects";

/*

use this hook to test any functionality related to the databse api

The component is used in the 'Home' component to ensure that all tested queries
occur when the user is logged in

*/
export const useDatabaseApiTesting = () => {
  const { status, data, error } = useListProjects();
  console.log(`data: ${JSON.stringify(data)}`);
  console.log(`\nReact Query Info :: status: ${status} error: ${error}`);

  //your code here :)
};

export default useDatabaseApiTesting;
