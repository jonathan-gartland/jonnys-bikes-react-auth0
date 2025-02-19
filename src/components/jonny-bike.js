import React from 'react';
import BikeDetails from './bike-details';
import bikes from '../data/bikes';

function JonnyBike() {
  return (
    <div>
      {/*<div className="hero-banner--emerald-yellow">*/}
      <div
        className="hero-banner__description"
        style={{
          color: '#1bc99f',
          padding: '20px',
          marginLeft: '80px',
          textAlign: 'center',
        }}
      >
        Ready to Ride or a Quick Tune Up away (+2 Frames).
        <br />
        <br />
        Price is minimum I&apos;d consider selling as is, not aquisition cost.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {bikes.map((bike, index) => (
          <BikeDetails
            key={index}
            name={bike.model}
            brand={bike.brand}
            type={bike.type}
            material={bike.material}
            image={bike.image}
            manufactureCountry={bike['manufacture country']}
            price={bike.tsp}
            year={bike.year}
            errata={bike.errata}
          />
        ))}
      </div>
      {/*</div>*/}
    </div>
  );
}

export default JonnyBike;
