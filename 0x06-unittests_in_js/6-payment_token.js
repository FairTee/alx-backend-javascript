export function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return Promise.resolve(); // Return a resolved promise without data if success is false
  }
}
