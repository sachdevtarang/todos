AccountsTemplates.configure({
  showForgotPasswordLink: true,
  texts: {
    errors: {
      loginForbidden: "Incorrect username or password",
      pwdMismatch: "Passwords don't match",
    },
    title: {
      signIn: "Sign In",
      signUp: "Join",
    }
  },
  defaultTemplate: 'authPage',
  defaultLayout: 'appBody',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {}
});
