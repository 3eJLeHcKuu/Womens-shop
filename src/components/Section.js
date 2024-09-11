import React from "react";
import "./Section.scss";

export default function Section() {
  return (
    <section>
      <div>
        <h1 className="collection">New collection</h1>
        <div className="picture">
          <img src="/img/girl.png" alt="" />
          <img src="/img/girl1.png" alt="" />
          <img src="/img/girl2.png" alt="" />
          <img src="/img/girl3.png" alt="" />
        </div>
      </div>
    </section>
  );
}
