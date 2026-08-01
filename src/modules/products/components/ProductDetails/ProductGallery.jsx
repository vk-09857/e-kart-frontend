import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as S from "./ProductDetails.styles";

export default function ProductGallery({ mainImage, title = "Product Image", galleryImages = [] }) {
  // Ensure we always have 5 thumbnails for a premium ecommerce look
  const images = galleryImages && galleryImages.length >= 5
    ? galleryImages
    : [
        mainImage,
        galleryImages[1] || mainImage,
        galleryImages[2] || mainImage,
        galleryImages[3] || mainImage,
        galleryImages[4] || mainImage,
      ];

  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const nextIndex = prev > 0 ? prev - 1 : images.length - 1;
      scrollToThumbnail(nextIndex);
      return nextIndex;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const nextIndex = prev < images.length - 1 ? prev + 1 : 0;
      scrollToThumbnail(nextIndex);
      return nextIndex;
    });
  };

  const scrollToThumbnail = (index) => {
    if (listRef.current) {
      const activeItem = listRef.current.children[index];
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const activeImage = images[activeIndex] || mainImage;

  return (
    <S.GalleryContainer>
      {/* Large Premium Main Image Card */}
      <S.MainImageCard
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={activeImage}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.target.src = mainImage || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </S.MainImageCard>

      {/* Horizontal Image Gallery with 5 Thumbnails & Nav Arrows */}
      <S.ThumbnailRow>
        <S.ArrowButton type="button" onClick={handlePrev} aria-label="Previous thumbnail">
          <ChevronLeft size={18} />
        </S.ArrowButton>

        <S.ThumbnailList ref={listRef}>
          {images.map((img, idx) => (
            <S.ThumbnailCard
              key={`thumb-${idx}`}
              type="button"
              $isActive={idx === activeIndex}
              onClick={() => {
                setActiveIndex(idx);
                scrollToThumbnail(idx);
              }}
              aria-label={`Select product image ${idx + 1}`}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.target.src = mainImage || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80";
                }}
              />
            </S.ThumbnailCard>
          ))}
        </S.ThumbnailList>

        <S.ArrowButton type="button" onClick={handleNext} aria-label="Next thumbnail">
          <ChevronRight size={18} />
        </S.ArrowButton>
      </S.ThumbnailRow>
    </S.GalleryContainer>
  );
}
