import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    token: '',
  },
  actions: {
    setToken: (token) => ({ setState }) => {
      setState({
        token,
      });
    },
  },
  name: 'token',
});

export const useToken = createHook(Store);
