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
      avatarImage: `${cdnUrl}/review-avatar-1.png?width=80&height=80&crop=center`,
      productImage: `${cdnUrl}/review-1.png?width=600&height=600&crop=center`,
      daysAgo: 7,
      location: "Chicago, IL",
    },
    {
      name: "Sarah Mitchell",
      verified: true,
      rating: 5,
      title: "Best purchase ever!",
      content:
        "My cats absolutely love this! They play with it every single day. The quality is amazing and it has held up really well even with two very active cats. I've tried many toys before but this one is by far their favorite. Would definitely recommend to any cat owner!",
      avatarImage: `${cdnUrl}/review-avatar-2.png?width=80&height=80&crop=center`,
      productImage: `${cdnUrl}/review-2.png?width=600&height=600&crop=center`,
      daysAgo: 15,
      location: "New York, NY",
    },
    {
      name: "Michael Chen",
      verified: true,
      rating: 5,
      title: "Five stars from both me and my cat!",
      content:
        "I was skeptical at first, but this toy exceeded all my expectations. My usually picky cat took to it immediately. It's well-made, safe, and provides hours of entertainment. My cat even sleeps next to it now. Best $20 I've spent!",
      avatarImage: `${cdnUrl}/review-avatar-3.png?width=80&height=80&crop=center`,
      productImage: `${cdnUrl}/review-3.png?width=600&height=600&crop=center`,
      daysAgo: 23,
      location: "San Francisco, CA",
    },
  ];

  return (
    <s-grid gridTemplateColumns="1fr" gap="large" padding="base">
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
          {/* Header with avatar, name, verified badge, and stars */}
          <s-grid gridTemplateColumns="auto 1fr" gap="base" alignItems="start">
            {/* Avatar - optimized size */}
            <s-image
              src={review.avatarImage}
              alt={review.name}
              inlineSize="auto"
              aspectRatio="1/1"
              borderRadius="max"
            ></s-image>

            {/* Name, Badge, and Stars */}
            <s-grid gridTemplateColumns="1fr" gap="small-100">
              {/* Name and Verified Badge */}
              <s-grid
                gridTemplateColumns="auto auto"
                gap="small"
                alignItems="center"
              >
                <s-heading>{review.name}</s-heading>
                {review.verified && (
                
                     <s-image
                        src={`${cdnUrl}/verified-user.svg`}
                        alt="Verified"
                        inlineSize="auto"
                      ></s-image>
                
                )}
              </s-grid>

              {/* Star Rating - using single SVG */}
              <s-image
                src={`${cdnUrl}/review-stars.svg`}
                alt="5 star rating"
                inlineSize="auto"
              ></s-image>
            </s-grid>
          </s-grid>

          {/* Review title */}
          <s-heading>{review.title}</s-heading>

          {/* Review content */}
          <s-text>{review.content}</s-text>

          {/* Product image - optimized and cropped with rounded borders */}
          {review.productImage && (
            <s-image
              src={review.productImage}
              alt="Product review"
              inlineSize="fill"
              aspectRatio="1/1"
              borderRadius="base"
            ></s-image>
          )}

          {/* Footer with date and location */}
          <s-grid gridTemplateColumns="auto 1fr" gap="base" alignItems="center">
            <s-text color="subdued">
              Purchased {getPurchaseDate(review.daysAgo)}
            </s-text>
            <s-grid
              gridTemplateColumns="auto auto"
              gap="small-100"
              alignItems="center"
              justifyContent="end"
            >
              <s-icon type="location" size="small" tone="neutral"></s-icon>
              <s-text color="subdued">{review.location}</s-text>
            </s-grid>
          </s-grid>
        </s-grid>
      ))}
    </s-grid>
  );
}
