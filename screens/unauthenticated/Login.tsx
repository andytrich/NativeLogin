import * as React from 'react';
import * as Yup from 'yup';
import {Formik, FormikActions} from 'formik';
import { Login } from '../../models/login';
import { UnauthenticatedBackground } from './UnauthenticatedBackground';
import { UnauthenticatedScreenTopLogo } from './UnauthenticatedScreenLogo';
import { Form, EmailField, FormLabelTextDark, PasswordField } from '../../shared/FormStyles';
import * as Colours from '../../constants/Colours';
import { FormHelpText } from '../../shared/TextStyles';
import { EmailInput } from './EmailInput';
import { PrimaryButton } from '../../shared/PrimaryButton';
import { PasswordInput } from '../../shared/PasswordInput';
import { FormHelpTextWrapper } from '../../shared/FormHelpTextWrapper';
import { UnauthenticatedScreenThinLink, UnauthenticatedScreenBottomLink } from '../../shared/UnauthenticatedStyles';
import Analytics from 'appcenter-analytics';

export interface LoginProps {
    errorMessage?: string,
    passwordWasReset?: boolean,
}

export interface LoginState {
    errorMessage: string | null,
    isLoading: boolean,
}

export const LoginSchema = Yup.object<Login>({
    email: Yup.string()
      .trim()
      .email('Please enter a valid email address')
      .required('Please enter your email address'),
    password: Yup.string()
      .required('Please enter your password'),
  });

export default class LoginComponent extends React.Component<LoginProps, LoginState> {


  onSubmit = (values: {email: string, password: string}) => {
/*     Keyboard.dismiss();
    this.signIn(values.email, values.password); */
    Analytics.trackEvent('User logged in', {UserType: 'Test User'});
    console.log('on submit pressed');

  }

  navigateToRegister = () => {null;}
  navigateToForgotPassword = () =>{null;}

  constructor(props: LoginProps) {
    super(props);
    this.state = {
        errorMessage: '',
        isLoading: false
    };
  }

  public render() {
    return (
      <UnauthenticatedBackground>
        <UnauthenticatedScreenTopLogo />
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={this.onSubmit}          
        >{
          (formProps)=>(
            <Form>
              <EmailField>
                <FormLabelTextDark>Email</FormLabelTextDark>    
                <EmailInput 
                  onChangeText={formProps.handleChange('email')}
                  value={formProps.values.email}
                  isValid={!(formProps.errors.email && formProps.touched.email)}
                />      
                {(formProps.errors.email && formProps.touched.email) && (
                    <FormHelpText colour={Colours.darkerGrey}>
                      {formProps.errors.email}
                    </FormHelpText>
                  )}
              </EmailField>
              <PasswordField>
                <FormLabelTextDark>Password</FormLabelTextDark>
                <PasswordInput
                  onChangeText={formProps.handleChange('password')}
                  value={formProps.values.password}
                  isValid={!(formProps.errors.password && formProps.touched.password)}
                />
                <FormHelpTextWrapper>
                  {(formProps.errors.password && formProps.touched.password) && (
                    <FormHelpText colour={Colours.darkerGrey}>
                      {formProps.errors.password}
                    </FormHelpText>
                  )}
                </FormHelpTextWrapper>
              </PasswordField>
              <PrimaryButton
                title="Login"
                onPress={formProps.handleSubmit}
                isLoading={this.state.isLoading}
                withShadow={true}
              />
              <UnauthenticatedScreenThinLink
                title="Forgotten password?"
                onPress={this.navigateToForgotPassword}
              />
            </Form>
          )
        }
        </Formik>
        <UnauthenticatedScreenBottomLink
          title="New user? Register here"
          onPress={this.navigateToRegister}
        />
      </UnauthenticatedBackground>
    );
  }
}
