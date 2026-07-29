import * as S from "./ProductDetails.styles";

export default function QuantitySelector({ quantity, onIncrement, onDecrement, min = 1, max = 10 }) {
  return (
    <S.QuantityWrapper>
      <S.QuantityLabel>Quantity:</S.QuantityLabel>
      <S.QuantityControl>
        <button
          type="button"
          onClick={onDecrement}
          disabled={quantity <= min}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={onIncrement}
          disabled={quantity >= max}
          aria-label="Increase quantity"
        >
          +
        </button>
      </S.QuantityControl>
    </S.QuantityWrapper>
  );
}
