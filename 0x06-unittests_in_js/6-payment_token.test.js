import { expect } from 'chai';
import { getPaymentTokenFromAPI } from './6-payment_token.js'; // Adjust the path as necessary

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with { data: "Successful response from the API" } when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate the async test is complete
      })
      .catch((err) => {
        done(err); // Call done with error if promise rejects (though it shouldn't in this case)
      });
  });

  it('should resolve with undefined when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done(); // Call done to indicate the async test is complete
      })
      .catch((err) => {
        done(err); // Call done with error if promise rejects (though it shouldn't in this case)
      });
  });
});
