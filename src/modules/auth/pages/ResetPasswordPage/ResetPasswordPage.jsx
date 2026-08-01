import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { resetPassword } from "../../api";
import * as S from "./ResetPasswordPage.styles";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMessage("Reset token is missing or invalid URL.");
      setIsError(true);
      return;
    }

    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setIsError(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsError(true);
      return;
    }

    setIsPending(true);
    setMessage(null);
    setIsError(false);

    try {
      const res = await resetPassword(token, newPassword);
      setMessage(res.message || "Password updated successfully!");
      setIsError(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setMessage(err.message || "Invalid or expired reset token.");
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  if (!token) {
    return (
      <S.PageWrapper>
        <S.AuthCard>
          <S.Title>Invalid Request</S.Title>
          <S.Subtitle>
            No reset token found. Please request a new password reset link.
          </S.Subtitle>
          <S.BackButton to="/forgot-password">
            Request Password Reset
          </S.BackButton>
        </S.AuthCard>
      </S.PageWrapper>
    );
  }

  return (
    <S.PageWrapper>
      <S.AuthCard>
        <S.BackButton to="/login">
          <ArrowLeft size={14} /> Back to Login
        </S.BackButton>

        <S.Title>Set New Password</S.Title>
        <S.Subtitle>
          Enter your new password below to update your account access.
        </S.Subtitle>

        {message && (
          <S.AlertMessage isError={isError}>
            {message}
          </S.AlertMessage>
        )}

        {isSuccess ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <CheckCircle size={48} color="#00e676" style={{ marginBottom: "16px" }} />
            <p style={{ color: "#ffffff", fontSize: "15px", marginBottom: "20px" }}>
              Your password has been changed. Redirecting to login...
            </p>
            <Link to="/login" style={{ color: "#e60000", textDecoration: "none", fontWeight: "700" }}>
              Click here if you are not redirected
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="newPassword">New Password</S.Label>
              <S.Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="confirmPassword">Confirm New Password</S.Label>
              <S.Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </S.FormGroup>

            <S.Button type="submit" disabled={isPending || !newPassword || !confirmPassword}>
              {isPending ? "Updating Password..." : "Update Password"}
            </S.Button>
          </form>
        )}
      </S.AuthCard>
    </S.PageWrapper>
  );
}
