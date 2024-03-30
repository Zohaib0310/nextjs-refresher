import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  const { slug } = params;
  if (slug?.length === 3) {
    return (
      <h1>
        Viewing example: {slug[2]} of feature: {slug[0]} for concept: {slug[1]}
      </h1>
    );
  } else if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature: {slug[0]} and concept: {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature: {slug[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
};

export default Docs;
