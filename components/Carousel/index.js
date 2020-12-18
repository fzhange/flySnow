import React, { useState } from "react";
import './index.less';
import { Button } from "../index";

export default function Carousel(props) {
    let arr = [[
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3475665897,2387130440&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2102578530,3462366934&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2036306501,3289488371&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2652795496,2161831087&fm=26&gp=0.jpg"
    ], [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=367228910,3693849048&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3531746777,723924818&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986525947,195736070&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2652795496,2161831087&fm=26&gp=0.jpg"
    ], [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3475665897,2387130440&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2102578530,3462366934&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2036306501,3289488371&fm=26&gp=0.jpg",
        // "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2652795496,2161831087&fm=26&gp=0.jpg"
    ]]
    let [marginLeft,setMarginLeft] = useState(0);
    let singleGroupLen = arr[0].length;
    let stepLength = parseFloat((100/singleGroupLen).toFixed(2));

    function goLeft(){
        setMarginLeft(`${Math.abs(marginLeft)+stepLength}`);
    }

    function goRight(){
        if(marginLeft <= 0) return;
        setMarginLeft(`${Math.abs(marginLeft)-stepLength}`);
    }
    return (
        <>
            <div className="carousel_con">
                <div className="carousel_out_con" style={{ width: `${arr.length}00%`, gridTemplateColumns: `repeat(${arr.length},1fr)`,marginLeft:`-${marginLeft}%`}}>
                    {
                        arr.map((item, index) => {
                            return (
                                <div className="carousel_ele_out_con" style={{ gridTemplateColumns: `repeat(${singleGroupLen},1fr)` }} key={index}>
                                    {
                                        item.map((cItem, idx) => {
                                            return (
                                                <div className="carousel_ele_con" key={idx}>
                                                    <img src={cItem} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Button onClick={goLeft}>left</Button>
            <Button onClick={goRight}>right</Button>
        </>
    )
}



