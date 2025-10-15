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
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <s-box
      border="base"
      borderStyle="dashed"
      borderRadius="large"
      padding="none"
    >
      <s-grid gridTemplateColumns="auto 1fr" gap="none" alignItems="center">
        <s-box maxInlineSize="110px" padding="none">
          <s-image
            src="https://cdn.shopify.com/s/files/1/0592/0194/5677/files/cat-4.png"
            alt="Cat with birthday candle"
            borderRadius="large none none large"
            inlineSize="auto"
            aspectRatio="1/1"
          />
        </s-box>

        <s-stack direction="block" gap="small-300" padding="none small">
          <s-box>
            <s-paragraph>
              <s-text type="small">
                Today is Mr. Patches' 4th birthday, so your order already
                includes a <s-text type="strong">Buy One, Get One Free</s-text>{" "}
                deal on Kitty Kurlz and our{" "}
                <s-text type="strong">30-day money-back guarantee.</s-text>
              </s-text>
            </s-paragraph>
          </s-box>
          <s-box>
            <s-paragraph>
            <s-text type="small">
                This birthday offer{" "}
                <s-text type="strong">ends on {currentDate}</s-text>
              </s-text>
            </s-paragraph>
          </s-box>
        </s-stack>
      </s-grid>
    </s-box>
  );
}
