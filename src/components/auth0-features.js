import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Welcome!",
      description:
        "This is a simple app I built to practice with React and Auth0. The data is the 14 bikes in my collection, so there really wasn't a need for any backend server or database so I didn't use NextJS in this case, just plain ol' React.",
      resourceUrl: "",
      icon: "",
    },
    {
      title: "Bikes",
      description:
        "Once you log in (the Auth0 part of the app) the list of bikes will be available, and some ECharts of the collection as well. The bikes aren't technically for sale, but there is a price listed for each one just in case an eager buyer stumbles across this app.",
      resourceUrl: "",
      icon: "",
    },
    {
      title: "Caveats & Disclaimer",
      description:
        "Bike images are placeholders to be replaced when I can get some decent photo's of the actual bikes. Images were cobbled together off the web from stock images and sales sites and I have no ownership nor any intent to claim ownership. If you own one of the images and would like it removed please email me and I will do so.",
      resourceUrl: "",
      icon: "",
    },
    // {
    //   title: "Attack Protection",
    //   description:
    //     "Auth0 can detect attacks and stop malicious attempts to access your application such as blocking traffic from certain IPs and displaying CAPTCHA. Auth0 supports the principle of layered protection in security that uses a variety of signals to detect and mitigate attacks.",
    //   resourceUrl: "https://auth0.com/docs/attack-protection",
    //   icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    // },
    // {
    //   title: "Serverless Extensibility",
    //   description:
    //     "Actions are functions that allow you to customize the behavior of Auth0. Each action is bound to a specific triggering event on the Auth0 platform. Auth0 invokes the custom code of these Actions when the corresponding triggering event is produced at runtime.",
    //   resourceUrl: "https://auth0.com/docs/actions",
    //   icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    // },
  ];

  return (
    <div className="auth0-features">
      {/*<h2 className="auth0-features__title">Explore Auth0 Features</h2>*/}
      {/*<div className="auth0-features__grid">*/}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
