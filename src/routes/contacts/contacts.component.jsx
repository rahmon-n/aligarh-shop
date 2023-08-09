import { ContactBg, ContactsContainer } from './contacts.styles';
import { ReactComponent as PhoneLogo } from './icon/mobile-phone1.svg';

import Layout from '../../components/layout/layout.component';
import Socials from '../../components/socials/socials.component';

const Contacts = () => (
  <Layout>
    <ContactsContainer>
      <h1>Contacts</h1>
      <div>
        <p>
          Welcome to the Contacts page of Aligarh! We would love to hear from you and
          encourage you to reach out to us with any questions, comments, or concerns.
        </p>

        <p>
          You can connect with us on our social media channels for the latest updates,
          promotions, and fashion inspiration. Follow us on Instagram, Facebook, and
          Twitter to stay in the loop and share your thoughts with us.
        </p>
        <ContactBg>
          <Socials />
        </ContactBg>

        <p>
          If you prefer to speak with us directly, you can call our customer service team
          at the phone number provided below. Our representatives are available to assist
          you with any queries or issues you may have.
        </p>
        <ContactBg>
          <PhoneLogo
            style={{
              width: '30px',
              height: '30px',
              border: '1px solid #818181',
              borderRadius: '50%',
              padding: '2px',
              marginRight: '5px'
            }}
          />
          Tel:
          <span className='tel'>+998 (93) 083-37-73</span>
        </ContactBg>

        <p>
          We appreciate your feedback and value your opinion. Your input helps us improve
          and provide you with the best possible shopping experience. If you have any
          comments or suggestions about our products or services, please do not hesitate
          to get in touch.
        </p>

        <p>
          Thank you for choosing Aligarh as your fashion destination. We are committed to
          providing you with the highest level of customer service and look forward to
          hearing from you!
        </p>
      </div>
    </ContactsContainer>
  </Layout>
);

export default Contacts;
