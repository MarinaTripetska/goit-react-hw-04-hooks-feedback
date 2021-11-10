import React from "react";
import PropTypes from 'prop-types';
import s from './Statistic.module.css'

export default function Statistic({good, neutral, bad, total, positivePercentage}) {
    return (
        <div className={s.box}>
            <h2 className={s.title}>Statistics:</h2>
            <div >
       <p className={s.elem}><span className={s.elemTxt} >Good: </span> {good}</p>
       <p className={s.elem}><span className={s.elemTxt} >Neutral: </span> {neutral}</p>
       <p className={s.elem}><span className={s.elemTxt} >Bad: </span>{bad}</p>
       <p className={s.elem}><span className={s.elemTxt} >Total: </span>{total}</p>
    <p className={s.elem}><span className={s.elemTxt} >Positive Feedback: </span>{positivePercentage}%</p>
            </div>
        </div>
    )
}
Statistic.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}