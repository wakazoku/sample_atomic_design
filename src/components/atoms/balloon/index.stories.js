import React from "react";
import Balloon, { BalloonTip } from "./index";
import { TrashCanIcon } from "../Icon/index";
import { withStyle } from "../../utils/decorator";

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
    .add("絵文字", () => <Balloon>x</Balloon>)
    .add("バルーンチップ", () =>
      withStyle({ marginTop: "50px" })(
        <p>
          ここに<BalloonTip label="注釈を記述するUI">バルーンチップ</BalloonTip>
          を表示
        </p>
      )
    );
