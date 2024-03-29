import React from "react";
import Time from "./index";

export default (stories) =>
  stories
    .add("デフォルト", () => <Time>1507032000000</Time>)
    .add("HH:mm", () => <Time format="HH:mm">1507032000000</Time>)
    .add("無効な時間表現", () => <Time>無効な時間表現ではありません</Time>);
