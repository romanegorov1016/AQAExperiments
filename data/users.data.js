import 'dotenv/config';

const sharedPassword = process.env.SAUCE_PASSWORD ?? 'secret_sauce';

const acceptedUsernames = Object.freeze({
  standard: process.env.SAUCE_STANDARD_USER ?? 'standard_user',
  lockedOut: process.env.SAUCE_LOCKED_OUT_USER ?? 'locked_out_user',
  problem: process.env.SAUCE_PROBLEM_USER ?? 'problem_user',
  performanceGlitch: process.env.SAUCE_PERFORMANCE_GLITCH_USER ?? 'performance_glitch_user',
  error: process.env.SAUCE_ERROR_USER ?? 'error_user',
  visual: process.env.SAUCE_VISUAL_USER ?? 'visual_user',
});

const invalidUsername = process.env.SAUCE_INVALID_USER ?? 'invalid_user';
const invalidPassword = process.env.SAUCE_INVALID_PASSWORD ?? 'invalid_password';

export const usersData = Object.freeze({
  acceptedUsernames,
  sharedPassword,
  invalidCredentials: Object.freeze({
    invalidUsernameValidPassword: Object.freeze({
      username: invalidUsername,
      password: sharedPassword,
    }),
    validUsernameInvalidPassword: Object.freeze({
      username: acceptedUsernames.standard,
      password: invalidPassword,
    }),
    invalidUsernameInvalidPassword: Object.freeze({
      username: invalidUsername,
      password: invalidPassword,
    }),
  }),
  validUser: Object.freeze({
    username: acceptedUsernames.standard,
    password: sharedPassword,
  }),
  usersByType: Object.freeze({
    standard: Object.freeze({ username: acceptedUsernames.standard, password: sharedPassword }),
    lockedOut: Object.freeze({ username: acceptedUsernames.lockedOut, password: sharedPassword }),
    problem: Object.freeze({ username: acceptedUsernames.problem, password: sharedPassword }),
    performanceGlitch: Object.freeze({
      username: acceptedUsernames.performanceGlitch,
      password: sharedPassword,
    }),
    error: Object.freeze({ username: acceptedUsernames.error, password: sharedPassword }),
    visual: Object.freeze({ username: acceptedUsernames.visual, password: sharedPassword }),
  }),
});
