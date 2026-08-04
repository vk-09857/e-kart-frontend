import * as S from "./ProductsPage.styles";
import { useProducts } from "../../hooks/useProducts";
import ProductCard, { ProductSkeleton } from "../../components/ProductCard";
import CategoryChips from "../../components/CategoryChips";

export default function ProductsPage() {
  const {
    filteredProducts,
    isLoading,
    isError,
    error,
    page,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    searchQuery,
  } = useProducts(100);

  return (
    <S.PageWrapper>
      <div className="container">
        <S.HeaderSection>
          <S.Title>
            {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
          </S.Title>
          {!searchQuery && (
            <S.Subtitle>Discover our premium selection of cutting-edge tech.</S.Subtitle>
          )}
          <CategoryChips />
        </S.HeaderSection>

        {isLoading && page === 1 ? (
          <S.Grid>
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={`skeleton-${index}`} />
            ))}
          </S.Grid>
        ) : isError ? (
          <S.EmptyState>Error: {error?.message || "Failed to fetch products"}</S.EmptyState>
        ) : filteredProducts.length > 0 ? (
          <>
            <S.Grid>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </S.Grid>

            {!searchQuery && (
              <S.PaginationWrapper>
                <S.PaginationButton onClick={prevPage} disabled={!hasPrevPage}>
                  Previous
                </S.PaginationButton>
                <S.PageInfo>Page {page}</S.PageInfo>
                <S.PaginationButton onClick={nextPage} disabled={!hasNextPage}>
                  Next
                </S.PaginationButton>
              </S.PaginationWrapper>
            )}
          </>
        ) : (
          <S.EmptyState>
            No products found matching "{searchQuery}"
          </S.EmptyState>
        )}
      </div>
    </S.PageWrapper>
  );
}
