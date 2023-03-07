import LeftContact from './LeftContact';
import RightContact from './RightContact';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-left">
        <LeftContact />
      </div>
      <div className="contact-right">
        <RightContact />
      </div>
    </div>
  );
}

export default Contact;
