import { useCallback, useReducer } from 'react';

const httpReducer = (state, action) => {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        status: 'pending',
      };

    case 'SUCCESS':
      return {
        ...state,
        status: 'success',
        data: action.payload,
      };

    case 'ERROR':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };

    default:
      return state;
  }
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: [],
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: 'PENDING' });
      try {
        const data = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'ERROR', payload: err });
      }
    },
    [requestFunction]
  );

  return { sendRequest, ...httpState };
};

export default useHttp;
