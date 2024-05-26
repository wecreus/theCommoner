import "./ContactMe.scss";
import { Resend } from "resend";

const ContactMe = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const resend = new Resend(import.meta.env.VITE_EMAIL_KEY);
    console.log(resend);

  };
  return (
    <section className="section Contact">
      <form className="Form" onSubmit={onSubmit}>
        <div className="Form-content">
          <div className="Form-content__group">
            <span className="Form-content__title">
              Would love to hear from you
            </span>
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-name" className="Form-content__label">
              Name*
            </label>
            <input
              id="mail-name"
              className="Form-content__input Form-content__input--name"
              // onChange={handleChangeColor}
              required
              placeholder="Your name"
              autoComplete="off"
            />
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-adress" className="Form-content__label">
              Your Email Adress*
            </label>
            <input
              id="mail-adress"
              className="Form-content__input Form-content__input--adress"
              // onChange={handleChangeColor}
              required
              placeholder="Your Email"
              autoComplete="off"
            />
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-company" className="Form-content__label">
              Company
            </label>
            <input
              id="mail-company"
              className="Form-content__input Form-content__input--company"
              placeholder="Company"
              autoComplete="off"
              // onChange={handleChangeColor}
            />
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-message" className="Form-content__label">
              Message*
            </label>
            <textarea
              id="mail-message"
              className="Form-content__input Form-content__input--message"
              placeholder="Your message..."
              required
              type=""
              rows={"4"}
              autoComplete="off"
              // onChange={handleChangeColor}
            />
          </div>
          <input type="submit" value={"Send email"} className="Form-content__submit"/>
        </div>
        <div className="Form-sidebar">side</div>
      </form>
    </section>
  );
};

export default ContactMe;
