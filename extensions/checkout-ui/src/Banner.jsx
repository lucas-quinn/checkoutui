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
        "Your cat can’t wait to play with Kitty Kurlz! Please allow 3–4 days for US delivery or 5–7 days for international orders.",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0688/5235/1153/files/money.svg",
      title: "30-Day Money-Back Guarantee",
      description:
        "We know cats have high standards (and we love that about them!). If Kitty Kurlz isn’t a perfect fit, just reach out — we’ll make it right, guaranteed.",
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
