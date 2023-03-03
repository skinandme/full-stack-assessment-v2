import React from "react";
import Button from "../atoms/Button";
import TextField from "../molecules/TextField";

const ShippingDetailsForm: React.FC<{
  onSuccess: (nextPage: string) => void;
}> = ({ onSuccess }) => {
  const [shippingData, setShippingData] = React.useState({
    address: { line_1: "", country: "", postcode: "" },
    customer: { email: "", first_name: "", last_name: "" },
  });

  const onSubmit = () => {
    if (!shippingData) throw new Error("Shipping data invalid");

    // TODO - Add call to backend to submit shipping data
    console.log("Submitted Shipping Data", shippingData);

    onSuccess("billing");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="Shipping-form"
    >
      <TextField
        label="First Name"
        value={shippingData.customer.first_name}
        placeholder="Your first name"
        autoComplete="given-name"
        onChange={(e) =>
          setShippingData({
            address: shippingData.address,
            customer: { ...shippingData.customer, first_name: e.target.value },
          })
        }
      />
      <TextField
        label="Last Name"
        value={shippingData.customer.last_name}
        placeholder="Your last name"
        autoComplete="family-name"
        onChange={(e) =>
          setShippingData({
            address: shippingData.address,
            customer: { ...shippingData.customer, last_name: e.target.value },
          })
        }
      />
      <TextField
        label="Email"
        value={shippingData.customer.email}
        placeholder="Your email address"
        autoComplete="email"
        onChange={(e) =>
          setShippingData({
            address: shippingData.address,
            customer: { ...shippingData.customer, email: e.target.value },
          })
        }
      />
      <TextField
        label="First Line of Address"
        value={shippingData.address.line_1}
        placeholder="Type here"
        autoComplete="address-line1"
        onChange={(e) =>
          setShippingData({
            address: { ...shippingData.address, line_1: e.target.value },
            customer: shippingData.customer,
          })
        }
      />
      <TextField
        label="Second Line of Address"
        value={shippingData.address.line_2 || ""}
        placeholder="Type here"
        autoComplete="address-line2"
        onChange={(e) =>
          setShippingData({
            address: { ...shippingData.address, line_2: e.target.value },
            customer: shippingData.customer,
          })
        }
      />
      <TextField
        label="Town"
        value={shippingData.address.city || ""}
        placeholder="Type here"
        autoComplete="address-line3"
        onChange={(e) =>
          setShippingData({
            address: { ...shippingData.address, city: e.target.value },
            customer: shippingData.customer,
          })
        }
      />
      <TextField
        label="Country"
        value={shippingData.address.country}
        placeholder="Type here"
        autoComplete="country"
        onChange={(e) =>
          setShippingData({
            address: { ...shippingData.address, country: e.target.value },
            customer: shippingData.customer,
          })
        }
      />
      <TextField
        label="Postcode"
        value={shippingData.address.postcode}
        placeholder="Type here"
        autoComplete="postal-code"
        onChange={(e) =>
          setShippingData({
            address: { ...shippingData.address, postcode: e.target.value },
            customer: shippingData.customer,
          })
        }
      />

      <Button label={"Confirm Shipping Details"} type="submit" />
    </form>
  );
};

export default ShippingDetailsForm;
