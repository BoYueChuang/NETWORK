// eslint-disable-next-line no-unused-vars
import React from "react";

const CardFooter = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { inputValue } = props;
    // eslint-disable-next-line no-unused-vars
    let criteria = {};

    // STEP 3：根據 inputValue 改變要顯示的內容和背景色
    if (!inputValue) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    } else if (inputValue < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        };
    } else if (inputValue < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        };
    } else if (inputValue >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: '#13d569',
        };
    }

    return (
        <div
            className="card-footer"
            style={{
                backgroundColor: criteria.backgroundColor,
            }}
        >
            {criteria.title}
        </div>
    );
};


export default CardFooter;