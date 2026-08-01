import { apiClient as api } from "../../../lib/apiClient";

export const register = async (payload) => {
  return await api("/register", {
    method: "POST",
    body: payload,
  });
};

export const login = async (payload) => {
  const params = new URLSearchParams();
  params.append("username", payload.email); // OAuth2 expects 'username' field
  params.append("password", payload.password);

  return await api("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
};

export const forgotPassword = async (email) => {
  return await api("/auth/forgot-password", {
    method: "POST",
    body: { email },
  });
};

export const resetPassword = async (token, newPassword) => {
  return await api("/auth/reset-password", {
    method: "POST",
    body: { token, new_password: newPassword },
  });
};