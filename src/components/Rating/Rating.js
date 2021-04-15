import React from 'react'

function Rating ({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        {/* check star rating logic, if rating is greater than or equal to one
      display star from font awesome;
      if rating value is greater than or 0.5 display the half star
      otherwise just pass empty star, had to repeat logic five times to be used with five star rating and modified the arg value */}
        <i style={{ color }} className={
          value >= 1
            ? 'fas fa-star'
            : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>
        </i>
      </span>
      <span>
        {/* check star rating logic, if rating is greater than or equal to one
      display star from font awesome;
      if rating value is greater than or 0.5 display the half star
      otherwise just pass empty star, had to repeat logic five times to be used with five star rating and modified the arg value */}
        <i style={{ color }} className={
          value >= 2
            ? 'fas fa-star'
            : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>
        </i>
      </span>
      <span>
        {/* check star rating logic, if rating is greater than or equal to one
      display star from font awesome;
      if rating value is greater than or 0.5 display the half star
      otherwise just pass empty star, had to repeat logic five times to be used with five star rating and modified the arg value */}
        <i style={{ color }} className={
          value >= 3
            ? 'fas fa-star'
            : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>
        </i>
      </span>
      <span>
        {/* check star rating logic, if rating is greater than or equal to one
      display star from font awesome;
      if rating value is greater than or 0.5 display the half star
      otherwise just pass empty star, had to repeat logic five times to be used with five star rating and modfied the arg value */}
        <i style={{ color }} className={
          value >= 4
            ? 'fas fa-star'
            : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>
        </i>
      </span>
      <span>
        {/* check star rating logic, if rating is greater than or equal to one
      display star from font awesome;
      if rating value is greater than or 0.5 display the half star
      otherwise just pass empty star, had to repeat logic five times to be used with five star rating and modified the arg value */}
        <i style={{ color }} className={
          value >= 5
            ? 'fas fa-star'
            : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>
        </i>
      </span>
      {/* check if text exist than add numReviews if not leave empty */}
      <span>{text && text}</span>
    </div>
  )
}
export default Rating
