const _enviorment: object = process.env;
const _axiosTimeout = 100000;

const _petStoreBaseURL = "https://petstore.swagger.io/v2";

const _userCredentail:object ={}

const _axiosGeneralInstanceConfig: object = {
  // baseURL: _baseURL,
  timeout: _axiosTimeout,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    // return status < 500; // Reject only if status is greater or equal to 500
    return true; // disable axios throwing errors
  },
};

export const axiosGeneralInstanceConfig = {
  ..._axiosGeneralInstanceConfig,
  ..._enviorment,
};

export const petStoreAxiosInstanceConfig = {
  baseURL: _petStoreBaseURL,
  ..._axiosGeneralInstanceConfig,
  ..._enviorment,
};
