import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = process.env.MAILCHIMP_URL
  // "https://bridgekode.us9.list-manage.com/subscribe/post?u=43442228bee1027ac3430f7b7&amp;id=f0b06db62a&amp;f_id=009822e1f0";

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const NewsLetterSubscribe = () => {
  return (
    <div className="newsletter-form">
      <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
    </div>
  );
  
};

export default NewsLetterSubscribe;