import * as S from "./WishlistError.styles";
import { AlertCircle, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WishlistError({ onRetry, message, error }) {
  const navigate = useNavigate();
  const isUnauthorized =
    error?.status === 401 ||
    (error?.message && error.message.toLowerCase().includes("token")) ||
    (error?.message && error.message.toLowerCase().includes("unauthorized"));

  return (
    <S.Container>
      <AlertCircle size={48} color="#ff4d4d" />
      <S.Title>{isUnauthorized ? "Session Expired" : "Failed to load wishlist."}</S.Title>
      <S.Message>
        {isUnauthorized
          ? "Please sign in to view and manage your saved wishlist."
          : message || "There was an error connecting to the server."}
      </S.Message>
      {isUnauthorized ? (
        <S.RetryButton onClick={() => navigate("/login")}>
          Sign In
        </S.RetryButton>
      ) : (
        onRetry && (
          <S.RetryButton onClick={onRetry}>
            <RotateCcw size={16} /> Retry
          </S.RetryButton>
        )
      )}
    </S.Container>
  );
}
