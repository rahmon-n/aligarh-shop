import Layout from '../../components/layout/layout.component';
import { AboutUsContainer } from './about.styles';

const About = () => (
  <Layout>
    <AboutUsContainer>
      <h1>About us</h1>
      <div>
        <p>
          <strong>Welcome to Aligarh</strong>, your one-stop-shop for all your fashion
          needs! We are a single-page e-commerce application that brings you the latest
          trends and high-quality products in one convenient platform.
        </p>{' '}
        <p>
          At Aligarh, we understand that fashion is not just about looking good but
          feeling good too. That's why we have a wide range of products to cater to your
          every need. From trendy clothes to stylish bags, shoes, and accessories, we have
          something for everyone. Our collection also includes unique items like t-shirts,
          glasses, caps & hats, and watches to add a touch of personality to your
          wardrobe.
        </p>
        <p>
          We believe in offering our customers the best possible shopping experience,
          which is why we have an easy-to-use interface that makes browsing and shopping a
          breeze. Our secure payment options and reliable delivery services ensure that
          your orders reach you in no time.
        </p>
        <p>
          At Aligarh, we take pride in our commitment to quality and customer
          satisfaction. We work with the best designers and brands to bring you the latest
          fashion trends and ensure that every product meets our high standards. Our team
          of dedicated customer service representatives is always on hand to assist you
          with any queries or concerns.
        </p>
        <p>
          <i>
            Thank you for choosing Aligarh as your go-to fashion destination. We hope you
            enjoy shopping with us!
          </i>
        </p>
      </div>
    </AboutUsContainer>
  </Layout>
);

export default About;
