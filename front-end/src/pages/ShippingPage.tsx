import React from "react";
import ShippingDetailsForm from "../organisms/ShippingDetailsForm";

const ShippingPage: React.FC<{
  onSuccess: (nextPage: string) => void;
}> = ({ onSuccess }) => {
  return <ShippingDetailsForm onSuccess={onSuccess} />;
};

export default ShippingPage;
