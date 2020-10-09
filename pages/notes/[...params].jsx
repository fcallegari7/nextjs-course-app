import React from "react";
import { useRouter } from "next/router";

//functional component, the whole component is the render function.
const PageParams = () => {
  const router = useRouter();
  // catchAll [...name] gets all params from route and add to an array.
  // i.e. /pages/1/2/submit => ["1", "2", "submit"]
  const { params } = router.query;
  console.log(params);

  return <h1>Note {id}</h1>;
};

export default PageParams;
