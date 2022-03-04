import React from 'react';

import style from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats
}) => {

  const makeComa = (arr) => {
    arr[0] = `${arr[0]},`
    return arr.join('');
  }

  const statsInfo = () => {
    const statsVal = Object.entries(stats);

    const res = statsVal.map((val) =>
      <li key={val} className={style.item}>
        <span className={style.label}>{val[0]} </span>
        <span className={style.quantity}>{val[1] >= 1000 ? makeComa(val[1].toString().split('')) : val[1]}</span>
      </li>
    )

    return res;
  }

  return(
    <div className={style.container}>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt="user avatar" className={style.avatar} />
          <p className={style.name}>{name}</p>
          <p className={style.tag}>{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          {statsInfo()}
        </ul>
      </div>
    </div>
  );
}

export default Profile;

