import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from "./NewsLetter";

const NewsLetterSubscribe = () => {
  MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsLetter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};
