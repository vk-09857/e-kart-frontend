import * as S from "../styles/ClearWishlistButton.styles";
import { Trash2 } from "lucide-react";

export default function ClearWishlistButton({
    onClick,
}) {
    return (
        <S.Button onClick={onClick}>
            <Trash2 size={18} />
            CLEAR WISHLIST
        </S.Button>
    );
}