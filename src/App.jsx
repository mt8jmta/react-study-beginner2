// eslintの設定をファイル単位で設定できる
/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMesssage";
import { ColorfulMessage } from "./components/ColorfulMesssage";

// コンポーネント名はPascalCaseで命名する
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // 今回はnumのみでOK
  }, [num]);
  return (
    <>
      <h1 style={{ color: "pink" }}>こんにちは～～</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="red">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
    </>
  );
};

export default App;
