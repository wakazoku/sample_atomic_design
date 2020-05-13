import React from "react";
import Balloon from "./index";
import { TrashCanIcon } from "../Icon/index";

export default (stories) =>
  stories
    .add("2文字ラベル", () => <Balloon>次へ</Balloon>)
    .add("4文字ラベル", () => <Balloon>削除する</Balloon>)
    .add("絶対配置", () => (
      <Balloon style={{ position: "absolute", top: "200px", left: "200px" }}>
        左上から200pxに配置
      </Balloon>
    ))
    .add("アイコンラベル", () => (
      <Balloon>
        <TrashCanIcon />
      </Balloon>
    ))
    .add("絵文字", () => <Balloon>x</Balloon>);
