import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  //functional component, the whole component is the render function.
  const router = useRouter();
  // id is the name of the file [id]. You can put anything.
  const { id } = router.query;

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};
