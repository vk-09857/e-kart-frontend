/**
 * Indian Standard Time (IST - Asia/Kolkata) date and live tracking utility
 */

// Format date as DD/MM/YYYY in IST
export const formatISTDateString = (dateInput = new Date()) => {
  const d = new Date(dateInput);
  const validDate = isNaN(d.getTime()) ? new Date() : d;

  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formatter.format(validDate);
};

// Format date as "28 Jul 2026" in IST
export const formatISTShortDate = (dateInput = new Date()) => {
  const d = new Date(dateInput);
  const validDate = isNaN(d.getTime()) ? new Date() : d;

  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatter.format(validDate);
};

// Format date & time as "28 Jul 2026, 02:45 PM" in IST
export const formatISTDateTime = (dateInput = new Date()) => {
  const d = new Date(dateInput);
  const validDate = isNaN(d.getTime()) ? new Date() : d;

  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formatter.format(validDate);
};

// Generate live current IST dates for default orders
export const getLiveISTOrders = () => {
  const now = new Date();
  
  // Today
  const today = new Date(now.getTime());
  // 2 days ago
  const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  // 5 days ago
  const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);

  // Delivery dates in IST
  const todayDelivered = new Date(fiveDaysAgo.getTime() + 3 * 24 * 60 * 60 * 1000);
  const shippedExpected = new Date(twoDaysAgo.getTime() + 3 * 24 * 60 * 60 * 1000);

  return [
    {
      id: "5",
      created_at: formatISTDateString(fiveDaysAgo),
      raw_date: fiveDaysAgo.toISOString(),
      product_title: "ONEPLUS 15R",
      variant: "12GB RAM, 256GB Storage",
      quantity: 2,
      price: 59999,
      total_price: 119998,
      status: "DELIVERED",
      delivery_date: formatISTDateString(todayDelivered),
      payment_method: "UPI",
      image: "https://res.cloudinary.com/dwdvdags5/image/upload/v1780316665/ekart/thgozxpt6vxonsdaz8ba.webp",
    },
    {
      id: "7",
      created_at: formatISTDateString(twoDaysAgo),
      raw_date: twoDaysAgo.toISOString(),
      product_title: "ONEPLUS 15R",
      variant: "12GB RAM, 256GB Storage",
      quantity: 1,
      price: 59999,
      total_price: 59999,
      status: "SHIPPED",
      delivery_date: formatISTDateString(shippedExpected),
      payment_method: "UPI",
      image: "https://res.cloudinary.com/dwdvdags5/image/upload/v1780316665/ekart/thgozxpt6vxonsdaz8ba.webp",
    },
    {
      id: "3",
      created_at: formatISTDateString(today),
      raw_date: today.toISOString(),
      product_title: "ONEPLUS NORD 2",
      variant: "12GB RAM, Blue Haze",
      quantity: 1,
      price: 27999,
      total_price: 27999,
      status: "PROCESSING",
      delivery_date: "Processing",
      payment_method: "COD",
      image: "https://res.cloudinary.com/dwdvdags5/image/upload/v1780317112/ekart/cd29pm8b7nslyespb6wi.webp",
    },
  ];
};

// Calculate live timeline steps for Track Order page
export const calculateLiveTrackingTimeline = (createdDateInput = new Date(), status = "DELIVERED") => {
  const baseDate = new Date(createdDateInput);
  const validBase = isNaN(baseDate.getTime()) ? new Date() : baseDate;
  const upperStatus = (status || "DELIVERED").toUpperCase();

  // Step 1: Order Placed (base date)
  const placedTime = new Date(validBase.getTime());
  // Step 2: Confirmed (+30 minutes)
  const confirmedTime = new Date(validBase.getTime() + 30 * 60 * 1000);
  // Step 3: Shipped (+1 day)
  const shippedTime = new Date(validBase.getTime() + 24 * 60 * 60 * 1000);
  // Step 4: Out for Delivery (+2 days)
  const outForDeliveryTime = new Date(validBase.getTime() + 48 * 60 * 60 * 1000);
  // Step 5: Delivered (+3 days)
  const deliveredTime = new Date(validBase.getTime() + 72 * 60 * 60 * 1000);

  const isShippedOrHigher = upperStatus === "SHIPPED" || upperStatus === "DELIVERED";
  const isDelivered = upperStatus === "DELIVERED";

  return {
    placedDateIST: formatISTDateString(placedTime),
    expectedDeliveryIST: isDelivered ? formatISTDateString(deliveredTime) : "Processing",
    expectedDeliveryShortIST: formatISTShortDate(deliveredTime),
    actualDeliveryDateTimeIST: isDelivered ? formatISTDateTime(deliveredTime) : "In Progress",
    steps: [
      {
        title: "ORDER PLACED",
        time: formatISTDateTime(placedTime),
        isCompleted: true,
      },
      {
        title: "CONFIRMED",
        time: formatISTDateTime(confirmedTime),
        isCompleted: true,
      },
      {
        title: "SHIPPED",
        time: formatISTDateTime(shippedTime),
        isCompleted: isShippedOrHigher,
      },
      {
        title: "OUT FOR DELIVERY",
        time: formatISTDateTime(outForDeliveryTime),
        isCompleted: isDelivered,
      },
      {
        title: "DELIVERED",
        time: formatISTDateTime(deliveredTime),
        isCompleted: isDelivered,
        isDelivered: isDelivered,
      },
    ],
  };
};
