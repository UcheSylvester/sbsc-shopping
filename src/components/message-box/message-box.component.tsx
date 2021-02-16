import "./message-box.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

type Props = {
  message: string;
  handleButtonClick: () => void;
};

const MessageBox: React.FC<Props> = ({ message, handleButtonClick }) => {
  return (
    <div className="message-box">
      <p className="message-box__message">{message}</p>

      {handleButtonClick && (
        <CustomButton onClick={handleButtonClick}>Try Again</CustomButton>
      )}
    </div>
  );
};

export default MessageBox;
