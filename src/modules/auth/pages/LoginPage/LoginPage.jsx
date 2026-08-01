import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLogin } from "../../hooks/ui/useLogin";
import * as S from "./LoginPage.styles";

export default function LoginPage() {
  const { register, handleSubmit, errors, isPending } = useLogin();

  return (
    <S.PageWrapper>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="d-none d-lg-block col-lg-6">
            <S.HeroBand>
              <S.HeroTitle>Ready To<br />Connect.</S.HeroTitle>
            </S.HeroBand>
          </div>
          
          <div className="col-12 col-lg-6">
            <S.ContentBand>
              <S.AuthCard>
                <S.BackButton to="/products">
                  <ArrowLeft size={14} /> Back to Products
                </S.BackButton>
                <S.Title>Sign In</S.Title>
                <S.Subtitle>Enter your details to access your account.</S.Subtitle>

                <form onSubmit={handleSubmit}>
                  <S.FormGroup>
                    <S.Label htmlFor="email">Email</S.Label>
                    <S.Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
                    )}
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label htmlFor="password">Password</S.Label>
                    <S.Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
                    )}
                    <S.ForgotPasswordLink to="/forgot-password">
                      Forgot Password?
                    </S.ForgotPasswordLink>
                  </S.FormGroup>


                  <S.Button type="submit" disabled={isPending}>
                    {isPending ? "Connecting..." : "Continue"}
                  </S.Button>
                </form>

                <S.LinkText>
                  New to our network? <Link to="/register">Create an account</Link>
                </S.LinkText>
              </S.AuthCard>
            </S.ContentBand>
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
}
