import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { forgotPassword } from "../../api";
import * as S from "./ForgotPasswordPage.styles";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsPending(true);
    setMessage(null);
    setIsError(false);

    try {
      const res = await forgotPassword(email);
      setMessage(res.message || "Password reset link sent to your email!");
      setIsError(false);
    } catch (err) {
      setMessage(err.message || "Failed to send password reset email.");
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <S.PageWrapper>
      <S.AuthCard>
        <S.BackButton to="/login">
          <ArrowLeft size={14} /> Back to Login
        </S.BackButton>
        
        <S.Title>Forgot Password</S.Title>
        <S.Subtitle>
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </S.Subtitle>

        {message && (
          <S.AlertMessage isError={isError}>
            {message}
          </S.AlertMessage>
        )}

        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="email">Email Address</S.Label>
            <S.Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.FormGroup>

          <S.Button type="submit" disabled={isPending || !email}>
            {isPending ? "Sending Link..." : "Send Reset Link"}
          </S.Button>
        </form>
      </S.AuthCard>
    </S.PageWrapper>
  );
}
