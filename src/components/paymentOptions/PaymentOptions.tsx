import OptionSelector from "./OptionSelector";

const PaymentOptions = () => {
    return (
      <div className="my-4">
        <OptionSelector
          title="Select Payment Methods"
          options={["Cash on delivery","Stripe", "Bkash", "Nogod"]}
          name="type"
        />
        {/* <OptionSelector
      title="Choose subscription"
      options={["4 Months", "8 Months", "12 Months"]}
      name="subscription"
    /> */}
      </div>
    );
};
export default PaymentOptions;