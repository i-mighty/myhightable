import ImageBackground from '@src/components/Auth/ImageBackground/ImageBackground';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import equals from 'validator/lib/equals';
import BottomContent from '@src/components/Auth/BottomContent/BottomContent';
import Form, { FormProps } from '@src/components/Auth/Form/Form';
import { useSelector } from '@src/stores';
import {
  updateRegistrationField,
  registrationRequest,
} from '@src/stores/auth/actions/register.actions';
import { setErrorAction } from '@src/stores/appNotifications/actions';
import {
  loginFieldValueUpdate,
  loginRequest,
  resetPasswordRequest,
} from '@src/stores/auth/actions/login.actions';
import { AuthOptions } from '@src/stores/auth/types';

interface AuthContainerProps {
  authOption?: AuthOptions;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ authOption }) => {
  const [authState, setAuthState] = useState<AuthOptions>(
    authOption || 'register',
  );
  const dispatch = useDispatch();
  const { login, register, authOptions } = useSelector((state) => state.auth);

  useEffect(() => {
    setAuthState(authOptions);
  }, [authOptions]);

  const flipAuthState = () => {
    switch (authState) {
      case 'login':
        setAuthState('register');
        break;
      default:
        setAuthState('login');
        break;
    }
  };

  const sampleAction = () => {
    Alert.alert('E dey work!!!');
  };

  const updateRegisterField = (name: string, value: string) => {
    dispatch(updateRegistrationField(name, value));
  };

  const updateLoginField = (name: string, value: string) => {
    dispatch(loginFieldValueUpdate(name, value));
  };

  const validateRegisterForm = () => {
    const { password, email, password_confirmation } = register;
    let errorString = '';
    errorString += !isEmail(email) ? 'Invalid email' : '';
    errorString += !isLength(password, { min: 8 })
      ? '\nPassword should be at least 8 characters long'
      : !equals(password, password_confirmation)
      ? '\nPassword entries do not match'
      : '';
    if (!!errorString) {
      dispatch(setErrorAction(errorString));
    } else {
      dispatch(registrationRequest());
    }
  };

  const validateLoginForm = () => {
    const { password, email } = login;
    let errorString = '';
    errorString += !isEmail(email) ? 'Invalid email' : '';
    errorString += !isLength(password, { min: 8 })
      ? '\nPassword should be at least 8 characters long'
      : '';
    if (!!errorString) {
      dispatch(setErrorAction(errorString));
    } else {
      dispatch(loginRequest());
    }
  };

  const validateResetPasswordForm = () => {
    const { email } = login;
    let errorString = '';
    errorString += !isEmail(email) ? 'Invalid email' : '';
    if (!!errorString) {
      dispatch(setErrorAction(errorString));
    } else {
      dispatch(resetPasswordRequest());
    }
  };

  const validateNewPasswordForm = () => {
    const { email, password, otp, new_password_confirm } = login;
    let errorString = '';
    errorString += !isEmail(email) ? 'Invalid email' : '';
    errorString += otp.length > 0 ? '' : 'The otp/token field is empty';
    errorString += !isLength(password, { min: 8 })
      ? '\nPassword should be at least 8 characters long'
      : !equals(password, new_password_confirm)
      ? '\nPassword entries do not match'
      : '';
    if (!!errorString) {
      dispatch(setErrorAction(errorString));
    } else {
      dispatch(registrationRequest());
    }
  };

  const gotoForgotPassword = () => {
    setAuthState('passwordResetRequest');
  };

  const getOtpRequest = () => {
    setAuthState('otp');
  };

  const sendOtpRequest = () => {
    setAuthState('newPassword');
  };

  const resetPassword = () => {
    setAuthState('login');
  };

  const forms: { [key in AuthOptions]: FormProps } = {
    register: {
      title: 'Create Account',
      fields: [
        {
          placeholder: 'Name',
          icon: 'person-outline',
          value: register.name,
          name: 'name',
          updateField: updateRegisterField,
        },
        {
          placeholder: 'Email address',
          icon: 'mail-outline',
          value: register.email,
          name: 'email',
          updateField: updateRegisterField,
        },
        {
          placeholder: 'Password',
          icon: 'lock',
          password: true,
          value: register.password,
          name: 'password',
          updateField: updateRegisterField,
        },
        {
          placeholder: 'Confirm password',
          icon: 'lock',
          password: true,
          value: register.password_confirmation,
          name: 'password_confirmation',
          updateField: updateRegisterField,
        },
      ],
      actionDescription: {
        description: 'By signing up, you agree to our',
        actionText: 'terms and conditions',
        action: sampleAction,
      },
      formButtonAction: validateRegisterForm,
      formButtonText: 'Register',
      withSocialAuth: true,
      footer: {
        description: 'Already have an account?',
        action: flipAuthState,
        actionText: 'Sign in',
      },
    },
    login: {
      title: 'Sign In',
      fields: [
        {
          placeholder: 'Email address',
          icon: 'mail-outline',
          value: login.email,
          name: 'email',
          updateField: updateLoginField,
        },
        {
          placeholder: 'Password',
          icon: 'lock',
          password: true,
          value: login.password,
          name: 'password',
          updateField: updateLoginField,
        },
      ],
      actionDescription: {
        actionText: 'Forgot password?',
        action: gotoForgotPassword,
      },
      formButtonAction: validateLoginForm,
      formButtonText: 'Login',
      withSocialAuth: true,
      socialAuthAction: 'login',
      footer: {
        description: `Don't have an account?`,
        action: flipAuthState,
        actionText: 'Sign up',
      },
    },
    passwordResetRequest: {
      title: 'Enter Details',
      description:
        'Please enter your details. We will send you a\nverification code to reset your password.',
      fields: [
        {
          placeholder: 'Email address',
          value: login.email,
          name: 'email',
          updateField: updateLoginField,
        },
      ],
      formButtonAction: validateResetPasswordForm,
      formButtonText: 'SEND OTP CODE',
      footer: {
        description: `Remember your password?`,
        action: flipAuthState,
        actionText: 'Login in',
      },
    },
    otp: {
      title: 'Enter OTP Code',
      description:
        'We’ve sent a verification code for you\nto reset your password.',
      fields: [
        {
          placeholder: 'Verification code',
          value: login.otp,
          name: 'otp',
          updateField: updateLoginField,
        },
      ],
      actionDescription: {
        actionText: 'Resend code',
        action: getOtpRequest,
      },
      formButtonAction: sendOtpRequest,
      formButtonText: 'CONTINUE',
      footer: {
        description: `Remember your password?`,
        action: flipAuthState,
        actionText: 'Login in',
      },
    },
    newPassword: {
      title: 'Enter New Password',
      description: 'Please enter your new password details below',
      fields: [
        {
          placeholder: 'New Password',
          icon: 'lock',
          password: true,
          value: login.password,
          name: 'password',
          updateField: updateLoginField,
        },
        {
          placeholder: 'Confirm New Password',
          icon: 'lock',
          password: true,
          value: login.new_password_confirm,
          name: 'new_password_confirm',
          updateField: updateLoginField,
        },
      ],
      formButtonAction: validateNewPasswordForm,
      formButtonText: 'RESET PASSWORD',
      footer: {
        description: `Continue to `,
        action: flipAuthState,
        actionText: 'login in',
      },
    },
  };

  return (
    <ImageBackground source={require('@src/assets/Auth/background.jpg')}>
      <BottomContent animation={authState ? 'fadeInUp' : undefined}>
        <Form {...forms[authState]} />
      </BottomContent>
    </ImageBackground>
  );
};

export default AuthContainer;
