import React from "react";
import { action } from "@storybook/addon-actions";
import {
  TrashCanIcon,
  ChevronRightIcon,
  SearchIcon,
  SettingIcon,
} from "./index";

export default (stories) =>
  stories
    .add("TrashCanIcon", () => <TrashCanIcon />)
    .add("クリッカブル", () => (
      <TrashCanIcon onClick={action("アイコンがクリックされました")} />
    ))
    .add("矢印", () => <ChevronRightIcon />)
    .add("検索", () => <SearchIcon />)
    .add("設定", () => <SettingIcon />);
