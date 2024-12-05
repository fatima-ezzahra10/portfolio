import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">Mes Statistiques</strong>
      </h1>
      <ReactMarkdown>
      ![Mes Statistiques](https://leetcard.jacoblin.cool/fatimaezzahra22?theme=dark&font=Noto%20Sans%20Saurashtra&ext=heatmap)
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
