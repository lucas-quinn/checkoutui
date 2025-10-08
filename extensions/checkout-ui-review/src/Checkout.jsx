import "@shopify/ui-extensions/preact";
import { render } from "preact";

// 1. Export the extension
export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  // Base URL for Shopify CDN images
  const cdnUrl = "https://cdn.shopify.com/s/files/1/0592/0194/5677/files";

  // Function to calculate purchase date
  const getPurchaseDate = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const reviews = [
    {
      name: "Fernanda Argandoña",
      verified: true,
      rating: 5,
      title: "I didnt understand it but cat loved it!",
      content:
        "This was my first time getting Kitty Kurlz for my 12-week-old kitten, Ghost Pepper, and he was obsessed. He literally batted it around for almost 2 hours, which is wild because most toys only keep his attention for a few minutes. I've been worried about him getting lonely when I'm working, so it's such a relief to see him entertained and happy. Honestly, if he could talk I swear he'd be like, 'Mom, don't you dare take this toy away from me.' 😂 Definitely one of the best things I've bought for him.",
      avatarImage: `${cdnUrl}/review-avatar-1.png?width=120&height=120&crop=center`,
      productImage: `${cdnUrl}/review-1.png?width=732&height=400&crop=center`,
      daysAgo: 15,
      location: "Chicago, IL",
    },
    {
      name: "Jasper Calloway",
      verified: true,
      rating: 5,
      title: "Impressed Before Even Opening the Toy",
      content: [
        "I live out in the middle of nowhere near Wausau, IL – a beautiful place, but usually packages either take forever to arrive or get lost. Not with Kitty Kurlz!",
        "I haven't even opened the toy yet, but I'm already super impressed by their service. Shipping was fast, and when I messaged customer support to change my delivery address (since packages sometimes get stolen out here), they immediately jumped on the phone and took care of everything.",
        "5/5 for customer support. It's rare to see a small company genuinely care like this. Highly recommend!",
      ],
      avatarImage: `${cdnUrl}/review-avatar-2.png?width=120&height=120&crop=center`,
      productImage: `${cdnUrl}/review-2.jpg?width=732&height=400&crop=center`,
      daysAgo: 7,
      location: "Wausau, IL",
    },
    {
      name: "Selah Montgomery",
      verified: true,
      rating: 5,
      title: "You might need to buy one for your kids too LOL",
      content:
        "OK y'all, you won't believe this 😂 I had to buy ANOTHER Kitty Kurlz because my kids kept playing with it... and our cat was getting jealous that they were stealing his toy! 😂😂 Too funny!!",
      avatarImage: `${cdnUrl}/review-avatar-3.png?width=120&height=120&crop=center`,
      productImage: `${cdnUrl}/review-3.png?width=732&height=400&crop=center`,
      daysAgo: 23,
      location: "Miami, FL",
    },
    {
      name: "Mike Okada",
      verified: true,
      rating: 5,
      title: "my 3 cats love it – might buy more",
      content: [
        "I have four cats, so I grabbed the buy-2-get-2-free deal. Three of them absolutely loved Kitty Kurlz right away! My little tabby is only 3 weeks old, so he doesn't quite get it yet — but I'm sure in a couple of months he'll be chasing it too.",
        "Delivery was smooth and super fast, just like promised. Overall, I highly recommend Kitty Kurlz and the company for great toys and service!",
      ],
      avatarImage: `${cdnUrl}/review-avatar-4.png?width=120&height=120&crop=center`,
      productImage: `${cdnUrl}/review-4.png?width=732&height=400&crop=center`,
      daysAgo: 31,
      location: "Fort Bragg, California",
    },
  ];

  return (
    <s-grid gridTemplateColumns="1fr" gap="large" paddingBlockStart="base">
      {reviews.map((review) => (
        <s-grid
          key={review.name + review.daysAgo}
          gridTemplateColumns="1fr"
          gap="base"
          padding="large"
          border="base"
          borderRadius="base"
          background="base"
        >
          {/* Header with avatar, name, stars, and verified badge */}
          <s-grid gridTemplateColumns="auto 1fr" gap="base" alignItems="center">
            {/* Avatar - loads 120x120 but renders at 60x60 */}
            <s-box
              inlineSize="60px"
              blockSize="60px"
              overflow="hidden"
              borderRadius="max"
            >
              <s-image
                src={review.avatarImage}
                alt={review.name}
                inlineSize="fill"
                aspectRatio="1/1"
              ></s-image>
            </s-box>

            {/* Name, Stars, and Verified Badge */}
            <s-grid gridTemplateColumns="1fr" gap="small-100">
              {/* First row: Name and Stars */}
              <s-grid
                gridTemplateColumns="1fr auto"
                gap="base"
                alignItems="center"
              >
                <s-heading>{review.name}</s-heading>
                {/* Star Rating - aligned to end */}
                <s-image
                  src={`${cdnUrl}/review-stars.svg`}
                  alt="5 star rating"
                  inlineSize="auto"
                ></s-image>
              </s-grid>

              {/* Second row: Verified Badge */}
              {review.verified && (
                <s-grid
                  gridTemplateColumns="auto 1fr"
                  gap="small-200"
                  alignItems="center"
                >
                  <s-box inlineSize="16px" blockSize="16px">
                    <s-image
                      src={`${cdnUrl}/verified-user.svg`}
                      alt="Verified"
                    ></s-image>
                  </s-box>

                  <s-text tone="success">Verified Buyer</s-text>
                </s-grid>
              )}
            </s-grid>
          </s-grid>

          {/* Review title */}
          <s-heading>{review.title}</s-heading>

          {/* Review content - supports both string and array */}
          {Array.isArray(review.content) ? (
            review.content.map((paragraph, index) => (
              <s-text key={index}>{paragraph}</s-text>
            ))
          ) : (
            <s-text>{review.content}</s-text>
          )}

          {/* Product image - 366x200 with rounded borders */}
          {review.productImage && (
            <s-image
              src={review.productImage}
              alt="Product review"
              aspectRatio="366/200"
              borderRadius="base"
            ></s-image>
          )}

          {/* Footer with date and location */}
          <s-grid
            gridTemplateColumns="auto 1fr"
            gap="small-500"
            alignItems="center"
          >
            <s-text color="subdued">
              Purchased {getPurchaseDate(review.daysAgo)}
            </s-text>
            <s-grid
              gridTemplateColumns="auto auto"
              gap="small-500"
              alignItems="center"
              justifyContent="end"
            >
              <s-icon type="location" size="base" tone="neutral"></s-icon>
              <s-text color="subdued">{review.location}</s-text>
            </s-grid>
          </s-grid>
        </s-grid>
      ))}
    </s-grid>
  );
}
