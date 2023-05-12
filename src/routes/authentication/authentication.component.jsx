import Layout from '../../components/layout/layout.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
  return (
    <Layout>
      <SignInForm />
      <SignUpForm />
    </Layout>
  );
};

export default Authentication;
