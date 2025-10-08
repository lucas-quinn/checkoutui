import "@shopify/ui-extensions/preact";
import { render } from "preact";

// 1. Export the extension
export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const features = [
    {
      icon: "https://cdn.shopify.com/s/files/1/0688/5235/1153/files/ship.svg?",
      title: "Fast and Reliable Shipping",
      description:
        "2–4 days within the U.S. 5–7 days worldwide. No hidden delays.",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0688/5235/1153/files/money.svg",
      title: "30-Day Money-Back Guarantee",
      description:
        "Shop confidently. Quick and simple refunds, no questions asked.",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0688/5235/1153/files/secure.svg",
      title: "Secure Checkout",
      description:
        "In partnership with Chase Bank, your payments are processed safely and securely.",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0688/5235/1153/files/tracking.svg",
      title: "Real-Time Tracking",
      description:
        "Real-time updates at every stage of delivery — plus a 24/7 customer support team to help anytime.",
    },
  ];

  return (
    <s-grid gridTemplateColumns="1fr" gap="large" padding="base">
      {features.map((feature) => (
        <s-grid
          key={feature.title}
          gridTemplateColumns="auto 1fr"
          gap="base"
          alignItems="center"
        >
          <s-image
            src={feature.icon}
            alt={feature.title}
            inlineSize="auto"
            aspectRatio="1/1"
          ></s-image>
          <s-grid gridTemplateColumns="1fr" gap="small-400">
            <s-heading>{feature.title}</s-heading>
            <s-text>{feature.description}</s-text>
          </s-grid>
        </s-grid>
      ))}
    </s-grid>
  );
}
