import React from "react";
import { PageLayout } from "../components/page-layout";
import PieChart from "../components/pie-chart";

export const AdminPage = () => {
  return (
    <PageLayout>
      <div className=" ">

                <h1 id="page-title" className="content__title hero-banner" style={{ padding: "40px", fontSize: "48px", color: '#1bc99f'}}>
                 Bike Collection Infographics using ECharts
                </h1>
        <div className="page-description" style={{ textAlign: "center", fontSize: "24px", padding: "20px", color: '#1bc99f'}}>
          Just some interesting views of the collection visualized using the ECharts Library.
        </div>
        <div className="pie-chart-grid">
          <div className="pie-chart-row">

            <div className="pie-chart-container">
              <PieChart text={'Brand'} name={'Bikes by Brand'} divname={'brand'} queryname={'brand'} />
            </div>
            <div className="pie-chart-text" style={{ fontSize: '18px'}}>
              <p>Santa Cruz makes fun, sturdy, rideable bikes. Love the hardtails especially.</p>
              <p>GT was my first real MTB brand because i recognized them from BMX. The Backwoods was a great bike that lasted a long time as an everyday rider despite how uncomfortable it is.</p>
              <p>Gary Fisher 90's bikes are a favorite, even though Trek was the builder by this time.</p>
              <p>The Lemond Versaillles I got more as a novelty, being one of the steel/carbon hybrid models, but it was a bit more comfortable than the Arivee so it gets ridden more often.</p>
              <p></p>
            </div>
          </div>
          <div className="pie-chart-row">
            <div className="pie-chart-text"><p>Mostly Tiawan, as these bikes are all built after 1993. The Lemond's and the Fisher's have a few US built or assembled models. The Republic bike may also be from Tiawan, but the welds were so bad I assumed they were cheaper chinese mass produced frames.</p></div>
            <div className="pie-chart-container">
              <PieChart text={'Manufacture Country'} name={'Bikes by Manufacture Country'} divname={'man_country'} queryname={'manufacture country'} />
            </div>
          </div>
          <div className="pie-chart-row">

            <div className="pie-chart-container">
              <PieChart text={'Type'} name={'Bikes by Type'} divname={'type'} queryname={'type'} />
            </div>
            <div className="pie-chart-text">I wouldn't take the Lemond bikes off pavement, and the Santa Cruz bikes aren't great anywhere but trails and bike parks. The older mountain bikes and gravel bikes have similar attributes, and I treat the older bikes as rideable on anything except really technical single track.</div>
          </div>
          <div className="pie-chart-row">
            <div className="pie-chart-text">I love  the old steel bikes, but I also love how light the newer aluminum alloys are. I like Carbon, but don't ride well enough to justify the extra cost for a beneifit that won't make a difference in my riding. </div>
            <div className="pie-chart-container">
              <PieChart text={'Material'} name={'Material'} divname={'material'} queryname={'material'} />
            </div>
          </div>
          <div className="pie-chart-row">

            <div className="pie-chart-container">
              <PieChart text={'Pedal Type'} name={'Flats of Clipless'} divname={'pedal_type'} queryname={'pedal'} />
            </div>
            <div className="pie-chart-text">I used clipless pedals exclusively for almost 15 years. I tried riding my first Chameleon clipped in after a few months getting used to it with flats. It was the first time I ever felt like I wasn't in control of the bike and was only along for the ride. I stick with flats these days for trails, but use eggbeaters for my road and gravel riding. I think most of my pedals are Crank Brothers with some less expensive Race Face pedals on the older 90's mountain bikes.</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
