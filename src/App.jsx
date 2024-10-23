
import { useState, memo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
    console.log("ga");
    // Stateの定義
    const [num, setNum] = useState(0);

    // ボタンを押したときにStateをカウントアップ
    const onClickButton = () => {
        setNum(num + 1);
    };

    return (
        <>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 />
            <Child4 />
        </>
    );
});