import { apiClient } from "../../../lib/apiClient";

export const getAddresses = async () => {
  return await apiClient("/address", { method: "GET" });
};

export const createAddress = async (addressData) => {
  return await apiClient("/address", {
    method: "POST",
    body: addressData,
  });
};

export const updateAddress = async (addressId, addressData) => {
  return await apiClient(`/address/${addressId}`, {
    method: "PUT",
    body: addressData,
  });
};

export const deleteAddress = async (addressId) => {
  return await apiClient(`/address/${addressId}`, {
    method: "DELETE",
  });
};
