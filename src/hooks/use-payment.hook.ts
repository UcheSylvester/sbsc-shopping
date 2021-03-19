import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import {
  FlutterwaveConfig,
  FlutterWaveResponse,
} from "flutterwave-react-v3/dist/types";
import { toast } from "react-toastify";
import { formatter } from "../utils/utils";
import { useDispatch } from "react-redux";
import { clearEntireCart } from "../redux/cart/cart.actions";

type UsePaymentProps = {
  amount: number;
};

const usePayment = ({ amount }: UsePaymentProps) => {
  const dispatch = useDispatch();

  const flutterwaveConfig: FlutterwaveConfig = {
    public_key: "FLWPUBK_TEST-b480d50acd466ed7467b777047639923-X",
    tx_ref: `${Date.now()}`,
    amount,
    currency: "NGN",
    payment_options: "card, ussd, mobilemoney, paypal",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "Test Customer",
    },
    customizations: {
      title: "SBSC Shopping",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const onPaymentSuccess = (response: FlutterWaveResponse) => {
    const { status } = response;

    if (status !== "successful") return;

    toast(`Your payment of ${formatter(amount)} was successful!`, {
      position: "bottom-center",
    });
    closePaymentModal();
    dispatch(clearEntireCart());
  };

  const handleFlutterPayment = useFlutterwave(flutterwaveConfig);

  const initializeFlutterwavePayment = () =>
    handleFlutterPayment({
      callback: onPaymentSuccess,
      onClose: () => console.log("modal closed"),
    });

  return {
    initializeFlutterwavePayment,
  };
};

export default usePayment;
