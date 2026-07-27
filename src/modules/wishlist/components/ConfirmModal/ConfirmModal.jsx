import * as S from "./ConfirmModal.styles";
import { AlertTriangle } from "lucide-react";

export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.IconContainer>
          <AlertTriangle size={28} color="#e60000" />
        </S.IconContainer>
        <S.Title>{title || "Are you sure?"}</S.Title>
        <S.Message>{message || "This action cannot be undone."}</S.Message>
        <S.ButtonGroup>
          <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>Clear Wishlist</S.ConfirmButton>
        </S.ButtonGroup>
      </S.ModalBox>
    </S.Overlay>
  );
}
