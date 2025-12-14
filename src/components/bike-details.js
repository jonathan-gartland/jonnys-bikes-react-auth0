import React from 'react';
import PropTypes from 'prop-types';

const BikeDetails = ({
  name,
  brand,
  type,
  material,
  image,
  manufactureCountry,
  price,
  year,
  errata,
}) => {
  return (
    <>
      <div
        className="content-layout"
        style={{
          border: '1px solid #1bc99f',
          padding: '16px',
          borderRadius: '8px',
          position: 'relative',
          backgroundColor: '#000',
        }}
      >
        <div className="hero-banner hero-banner--emerald-yellow">
          <div
            className="hero-banner__header"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '30px',
              height: '120px',
            }}
          >
            <img
              src={`/${brand}.png`}
              alt={brand}
              width={128}
              height={128}
              style={{
                borderRadius: '8px',
                position: 'absolute',
                left: '30px',
              }}
            />
            <h1 className="content__title" style={{ marginLeft: '178px' }}>
              {name}
            </h1>
          </div>
        </div>
        <div
          className="content__body"
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '16px',
            color: '#1bc99f',
          }}
        >
          <img
            src={image}
            alt={name}
            width={512}
            height={374}
            style={{ borderRadius: '8px', marginRight: '16px' }}
          />
          <div style={{ marginLeft: '30px', fontSize: '24px' }}>
            <p>
              Primary use:{' '}
              {type === 'mtb'
                ? 'Mountain, Trail'
                : type === 'gravel'
                ? 'Gravel, Road, Trail'
                : type === 'road'
                ? 'Pavement, Road'
                : 'Pavement, Road'}
            </p>
            <p>Material: {material}</p>
            <p>
              Manufacture Country:{' '}
              {manufactureCountry === 'TW'
                ? 'Taiwan'
                : manufactureCountry === 'US'
                ? 'United States'
                : 'China'}
            </p>
            <p>Year: {year}</p>
            <p>Price: $ {price}</p>
            <br />
            <p> {errata}</p>
          </div>
        </div>
      </div>
    </>
  );
};

BikeDetails.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  manufactureCountry: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  errata: PropTypes.string,
};

export default BikeDetails;
