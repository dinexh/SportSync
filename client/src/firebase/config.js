// Mock Firebase configuration
export const database = {
  ref: () => {},
  get: () => {},
  set: () => {},
  remove: () => {},
  update: () => {},
};

export const auth = {
  currentUser: null,
  signInWithEmailAndPassword: () => Promise.resolve(),
  createUserWithEmailAndPassword: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};

export default {
  database,
  auth,
};