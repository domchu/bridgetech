import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = process.env.MAILCHIMP_URL;

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const NewsLetterSubscribe = () => {
  return (
    <div className="newsletter-form">
      <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
    </div>
  );
  
};

export default NewsLetterSubscribe;