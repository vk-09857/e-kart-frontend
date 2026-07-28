export const API_BASE_URL = (
  import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim() !== ""
    ? import.meta.env.VITE_API_URL
    : "https://e-kart-backend-qyf8.onrender.com"
).replace(/\/+$/, "");

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${API_BASE_URL}${cleanPath}`;
};

console.log("BASE_URL:", API_BASE_URL);

export const apiClient = async (
  endpoint,
  options = {}
) => {
  const url = `${API_BASE_URL}${
    endpoint.startsWith("/")
      ? endpoint
      : `/${endpoint}`
  }`;

  const token =
    localStorage.getItem("access_token");
  console.log("TOKEN:", token);

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  if (token) {
    defaultHeaders[
      "Authorization"
    ] = `Bearer ${token}`;
  }
  console.log("HEADERS:", defaultHeaders);

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  if (
    config.body &&
    typeof config.body === "object" &&
    config.headers["Content-Type"] ===
      "application/json"
  ) {
    config.body = JSON.stringify(
      config.body
    );
  }

  try {
    const response = await fetch(
      url,
      config
    );

    let result;

    try {
      result = await response.json();
    } catch (e) {
      if (!response.ok) {
        const error = new Error(
          response.statusText ||
            "An unexpected error occurred"
        );

        error.code = `HTTP_ERROR_${response.status}`;
        error.status = response.status;

        throw error;
      }

      return null;
    }

    const isError =
      !response.ok ||
      result.success === false ||
      result.detail?.success === false;

    if (isError) {
      if (response.status === 401) {
        localStorage.removeItem("access_token");
      }

      let errorMessage =
        "An unexpected error occurred";

      let errorCode = "API_ERROR";

      let errors = null;

      if (result.detail) {
        if (
          typeof result.detail ===
          "string"
        ) {
          errorMessage = result.detail;
        } else if (
          Array.isArray(result.detail)
        ) {
          errorMessage =
            "Validation Error";

          errorCode =
            "VALIDATION_ERROR";

          errors = result.detail;
        } else if (
          typeof result.detail ===
          "object"
        ) {
          errorMessage =
            result.detail.message ||
            errorMessage;

          errorCode =
            result.detail.errorCode ||
            errorCode;
        }
      } else {
        errorMessage =
          result.message ||
          errorMessage;

        errorCode =
          result.errorCode ||
          errorCode;

        errors =
          result.errors || null;
      }

      const error = new Error(
        errorMessage
      );

      error.code = errorCode;
      error.status = response.status;

      if (errors) {
        error.errors = errors;
      }

      throw error;
    }

    return result;
  } catch (error) {
    if (!error.code) {
      error.code = "NETWORK_ERROR";
    }

    console.error(
      `[API Error] [${endpoint}]:`,
      error.message
    );

    throw error;
  }
};
