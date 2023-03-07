import {
  CONTACT_TITLE,
  LOCATION,
  LOCATION_LINK,
  PHONE,
  PHONE_LINK,
  EMAIL,
  FACEBOOK,
  LINKEDIN,
  GITHUB,
  DOWNLOAD_BUTTON,
} from '../constants';
import Address from './Address';
import Social from './Social';
import Button from '@/components/Button';
import LocationIcon from '@/icons/LocationIcon';
import PhoneIcon from '@/icons/PhoneIcon';
import MailIcon from '@/icons/MailIcon';
import FacebookIcon from '@/icons/FacebookIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import GithubIcon from '@/icons/GithubIcon';

function LeftContact() {
  return (
    <>
      <h2 className="contact-title">{CONTACT_TITLE}</h2>

      <div className="contact-address">
        <Address
          icon={<LocationIcon color={''} />}
          address={LOCATION}
          href={LOCATION_LINK}
        />
        <Address
          icon={<PhoneIcon color={''} />}
          address={PHONE}
          href={PHONE_LINK}
        />
        <Address
          icon={<MailIcon color={''} />}
          address={EMAIL}
        />
      </div>

      <div className="contact-social">
        <Social
          icon={<FacebookIcon color={''} />}
          href={FACEBOOK}
        />
        <Social
          icon={<LinkedinIcon color={''} />}
          href={LINKEDIN}
        />
        <Social
          icon={<GithubIcon color={''} />}
          href={GITHUB}
        />
      </div>

      <div className="download">
        <Button
          type="link"
          className="download-btn"
        >
          {DOWNLOAD_BUTTON}
        </Button>
      </div>
    </>
  );
}

export default LeftContact;
