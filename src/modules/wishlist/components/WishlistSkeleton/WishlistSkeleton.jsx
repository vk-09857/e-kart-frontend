import * as S from "./WishlistSkeleton.styles";

export default function WishlistSkeleton() {
  return (
    <S.Container>
      {[1, 2, 3].map((key) => (
        <S.SkeletonCard key={key}>
          <S.SkeletonImage />
          <S.SkeletonContent>
            <S.SkeletonBar width="80px" height="24px" />
            <S.SkeletonBar width="60%" height="32px" />
            <S.SkeletonBar width="40%" height="18px" />
            <S.SkeletonBar width="120px" height="28px" />
          </S.SkeletonContent>
        </S.SkeletonCard>
      ))}
    </S.Container>
  );
}
