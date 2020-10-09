import React from "react";
import Link from "next/link";

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      {/* Recommended wrapping the Link text in an anchor tag */}
      <a>Note</a>
    </Link>
  </div>
);

export default Page;
