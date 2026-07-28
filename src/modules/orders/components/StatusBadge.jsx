import React from "react";
import styled from "@emotion/styled";

const BadgeContainer = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${(props) => {
    switch (props.status?.toLowerCase()) {
      case "delivered":
        return `
          background-color: rgba(34, 197, 94, 0.15);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22C55E;
        `;
      case "shipped":
        return `
          background-color: rgba(234, 179, 8, 0.15);
          border: 1px solid rgba(234, 179, 8, 0.3);
          color: #EAB308;
        `;
      case "processing":
        return `
          background-color: rgba(156, 163, 175, 0.15);
          border: 1px solid rgba(156, 163, 175, 0.3);
          color: #9CA3AF;
        `;
      case "cancelled":
        return `
          background-color: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #EF4444;
        `;
      default:
        return `
          background-color: rgba(156, 163, 175, 0.15);
          border: 1px solid rgba(156, 163, 175, 0.3);
          color: #9CA3AF;
        `;
    }
  }}
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
`;

export default function StatusBadge({ status }) {
  const displayStatus = status || "PROCESSING";
  return (
    <BadgeContainer status={displayStatus}>
      <Dot />
      {displayStatus.toUpperCase()}
    </BadgeContainer>
  );
}
