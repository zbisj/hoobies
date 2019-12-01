import React from 'react';
import { StyledCard } from './index.styles'

const Card = ({ title, content, image, subtitle, className}) => (
  <StyledCard className={`card p-0 ${ className }`}>
    <img src={ image } className="card-img-top w-100" alt={ title } />
    <div className="card-body">
      <h6 class="card-subtitle mb-2 text-muted text-uppercase">{ subtitle }</h6>
      <h5 className="card-title">{ title }</h5>
      <p className="card-text">{ content }</p>
    </div>
  </StyledCard>
);

export default Card;
