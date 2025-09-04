import { Button } from "./ui/button";

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  return (
    <div className="p-4">
      <img src={props.qrCodeUrl} alt="QR Code" />
      <Button onClick={props.switchForm}>
        Click here after qr code is scanned
      </Button>
    </div>
  );
};

export default Setup2FA;
