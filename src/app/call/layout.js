import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>Titulo da pagina Call</h1>

      <div>{children}</div>
    </div>
  );
};

export default layout;
