import "./ContactMe.scss";
import FormSidebar from "./FormSidebar/FormSidebar";
import { memo } from "react";

const ContactMe = memo(() => {
  const onSubmit = (e) => {
    e.preventDefault();
    const mailName = String(e.target["mail-name"].value) || "";
    const mailCompany = String(e.target["mail-company"].value) || "";
    const mailMessage = String(e.target["mail-message"].value) || "";
    const subject = `${mailName}${mailCompany ? " from " + mailCompany : ""}`;

    const result = `mailto:wecreus@gmail.com?subject=${subject}&body=${mailMessage}`;
    window.open(result);
  };

  return (
    <section className="section Contact">
      <form
        className="Form"
        onSubmit={onSubmit}
        action="mailto:wecreus@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div className="Form-content">
          <div className="Form-content__group">
            <span className="Form-content__title">
              <b>Would love to hear from you</b>
            </span>
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-name" className="Form-content__label">
              Name*
            </label>
            <input
              id="mail-name"
              className="Form-content__input Form-content__input--name"
              required
              placeholder="Your name"
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
              rows={"6"}
              autoComplete="off"
            />
          </div>
          <input
            type="submit"
            value={"Send email"}
            className="Form-content__submit"
          />
        </div>
        <FormSidebar />
      </form>
    </section>
  );
});


export default ContactMe;
