import React from 'react';

import style from './Statistics.module.css';

const Statistics = ({
  title,
  stats
}) => {

  const staticList = () => {
    const statsVal = Object.entries(stats);

    const res = statsVal.map((val) =>
      <li className={style.item} key={val}>
        <span className={style.label}>{val[0]} </span>
        <span className={style.percentage}>{val[1]}</span>
      </li>
    )

    return res;
  }

  return(
      <div className={style.container}>
        <section className={style.statistics}>
          <h2 className={style.header}>{title}</h2>
          <ul className={style.statList}>
            {staticList()}
          </ul>
      </section>
      </div>
  );
}

export default Statistics;
