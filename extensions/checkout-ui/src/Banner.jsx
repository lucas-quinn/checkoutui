import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { useState, useEffect } from "preact/hooks";

// 1. Export the extension
export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <s-box
      border="base"
      borderStyle="dashed"
      borderRadius="large"
      padding="large"
    >
      <s-grid gridTemplateColumns="auto 1fr" gap="large" alignItems="center">
        <s-box maxInlineSize="130px" >
          <s-image
            src="https://cdn.shopify.com/s/files/1/0592/0194/5677/files/cat-4.png"
            alt="Cat with birthday candle"
            borderRadius="base"
            inlineSize="auto"
            aspectRatio="1/1"
          />
        </s-box>

        <s-stack direction="block" gap="base">
          <s-paragraph>
            Today is Mr. Patches' 4th birthday, so your order already includes a{" "}
            <s-text type="strong">Buy One, Get One Free</s-text> deal on Kitty
            Kurlz and our{" "}
            <s-text type="strong">30-day money-back guarantee.</s-text>
          </s-paragraph>
          <s-paragraph>
            This birthday offer{" "}
            <s-text type="strong">ends on {currentDate}</s-text>
          </s-paragraph>
        </s-stack>
      </s-grid>
    </s-box>
  );
}
