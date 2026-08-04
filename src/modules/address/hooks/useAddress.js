import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getAddresses, createAddress, updateAddress, deleteAddress } from "../api/address.api";

export const ADDRESS_QUERY_KEY = ["addresses"];

export const useAddress = () => {
  const queryClient = useQueryClient();
  const [selectedAddressId, setSelectedAddressId] = useState(() => {
    const savedStored = localStorage.getItem("selected_address");
    if (savedStored) {
      try {
        const parsed = JSON.parse(savedStored);
        return parsed?.id || null;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [editingAddressId, setEditingAddressId] = useState(null);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    address_line: "",
    city: "",
    state: "",
    pincode: "",
  });

  const {
    data: addresses = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ADDRESS_QUERY_KEY,
    queryFn: getAddresses,
    staleTime: 1000 * 60 * 5,
  });

  const selectAddress = (address) => {
    setSelectedAddressId(address.id);
    localStorage.setItem("selected_address", JSON.stringify(address));
    toast.success(`Selected address for ${address.full_name}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setEditingAddressId(null);
    setFormData({
      full_name: "",
      phone: "",
      address_line: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  const startEditAddress = (address) => {
    setEditingAddressId(address.id);
    setFormData({
      full_name: address.full_name || "",
      phone: address.phone || "",
      address_line: address.address_line || "",
      city: address.city || "",
      state: address.state || "",
      pincode: address.pincode || "",
    });
  };

  const saveMutation = useMutation({
    mutationFn: (data) => {
      if (editingAddressId) {
        return updateAddress(editingAddressId, data);
      }
      return createAddress(data);
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ADDRESS_QUERY_KEY });
      toast.success(editingAddressId ? "Address updated successfully!" : "Address saved successfully!");
      if (res?.address) {
        setSelectedAddressId(res.address.id);
        localStorage.setItem("selected_address", JSON.stringify(res.address));
      }
      resetForm();
    },
    onError: (err) => {
      toast.error(err?.message || "Failed to save address");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteAddress(id),
    onSuccess: (_, deletedId) => {
      queryClient.invalidateQueries({ queryKey: ADDRESS_QUERY_KEY });
      toast.success("Address deleted");
      if (selectedAddressId === deletedId) {
        setSelectedAddressId(null);
        localStorage.removeItem("selected_address");
      }
      if (editingAddressId === deletedId) {
        resetForm();
      }
    },
    onError: (err) => {
      toast.error(err?.message || "Failed to delete address");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.full_name || !formData.phone || !formData.address_line || !formData.city || !formData.state || !formData.pincode) {
      toast.error("Please fill in all address fields");
      return;
    }
    saveMutation.mutate(formData);
  };

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId) || addresses[0] || null;

  return {
    addresses,
    isLoading,
    isError,
    error,
    refetch,
    selectedAddressId,
    selectedAddress,
    selectAddress,
    editingAddressId,
    startEditAddress,
    formData,
    handleInputChange,
    resetForm,
    handleSubmit,
    isSaving: saveMutation.isPending,
    deleteAddress: (id) => deleteMutation.mutate(id),
  };
};
