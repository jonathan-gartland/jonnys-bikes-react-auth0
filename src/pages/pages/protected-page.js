import React from 'react';
import { PageLayout } from '../components/page-layout';
import JonnyBike from '../components/jonny-bike';

export const ProtectedPage = () => {
  return (
    <>
      <PageLayout>
        <div className="hero-banner">
          <h1
            id="page-title"
            className="hero-banner__title"
            style={{ color: '#1bc99f' }}
          >
            The Bikes
          </h1>
          <div>
            <JonnyBike />
          </div>
        </div>
      </PageLayout>
    </>
  );
};
