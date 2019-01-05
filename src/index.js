import "@babel/polyfill";
import supportedNativeCurrencies from './references/native-currencies.json';
import lang, { resources, supportedLanguages } from './languages';

import {
  withSendComponentWithData
} from './components/SendComponentWithData';
import {
  account,
  accountChangeLanguage,
  accountChangeNativeCurrency,
  accountClearState,
  accountInitializeState,
  accountUpdateAccountAddress,
  accountUpdateExchange,
  accountUpdateHasPendingTransaction,
  accountUpdateNetwork,
  accountUpdateTransactions,
  INITIAL_ACCOUNT_STATE,
  send,
  sendClearFields,
  sendMaxBalance,
  sendModalInit,
  sendToggleConfirmationView,
  sendTransaction,
  sendUpdateAssetAmount,
  sendUpdateGasPrice,
  sendUpdateNativeAmount,
  sendUpdateRecipient,
  sendUpdateSelected,
  transactions,
  transactionsClearState,
  transactionsUpdateHasPendingTransaction,
  transactionsUpdateTransactions,
} from './reducers';
import {
  isValidAddress,
  isValidEmail,
} from './helpers/validators';
import {
  calcTxFee,
  capitalize,
  ellipseText,
  getDataString,
  getDerivationPathComponents,
  getEth,
  removeHexPrefix,
  transactionData,
} from './helpers/utilities';
import {
  add,
  convertAmountFromBigNumber,
  convertAmountToBigNumber,
  convertAmountToDisplay,
  convertAssetAmountFromBigNumber,
  convertAssetAmountToDisplay,
  convertAssetAmountToDisplaySpecific,
  convertAssetAmountToNativeValue,
  convertAmountToUnformattedDisplay,
  convertHexToString,
  convertNumberToString,
  convertStringToHex,
  convertStringToNumber,
  divide,
  formatInputDecimals,
  fromWei,
  greaterThan,
  greaterThanOrEqual,
  handleSignificantDecimals,
  hasHighMarketValue,
  hasLowMarketValue,
  multiply,
  smallerThan,
  subtract,
} from './helpers/bignumber';
import { getCountdown, getLocalTimeDate } from './helpers';
import {
  apiGetGasPrices,
  apiGetSinglePrice,
  estimateGasLimit,
  getTransactionCount,
  parseError,
  parseGasPrices,
  toChecksumAddress,
  web3Instance,
} from './handlers';
import * as commonStorage from './handlers/commonStorage';
export {
  account,
  accountChangeLanguage,
  accountChangeNativeCurrency,
  accountClearState,
  accountInitializeState,
  accountUpdateAccountAddress,
  accountUpdateExchange,
  accountUpdateHasPendingTransaction,
  accountUpdateNetwork,
  accountUpdateTransactions,
  add,
  apiGetGasPrices,
  apiGetSinglePrice,
  calcTxFee,
  capitalize,
  commonStorage,
  convertAmountFromBigNumber,
  convertAmountToBigNumber,
  convertAmountToDisplay,
  convertAssetAmountFromBigNumber,
  convertAssetAmountToDisplay,
  convertAssetAmountToDisplaySpecific,
  convertAssetAmountToNativeValue,
  convertAmountToUnformattedDisplay,
  convertHexToString,
  convertNumberToString,
  convertStringToHex,
  convertStringToNumber,
  divide,
  ellipseText,
  estimateGasLimit,
  formatInputDecimals,
  fromWei,
  getCountdown,
  getDataString,
  getDerivationPathComponents,
  getEth,
  getLocalTimeDate,
  getTransactionCount,
  greaterThan,
  greaterThanOrEqual,
  handleSignificantDecimals,
  hasHighMarketValue,
  hasLowMarketValue,
  INITIAL_ACCOUNT_STATE,
  isValidAddress,
  isValidEmail,
  lang,
  multiply,
  parseError,
  parseGasPrices,
  removeHexPrefix,
  resources,
  send,
  sendClearFields,
  sendMaxBalance,
  sendModalInit,
  sendToggleConfirmationView,
  sendTransaction,
  sendUpdateAssetAmount,
  sendUpdateGasPrice,
  sendUpdateNativeAmount,
  sendUpdateRecipient,
  sendUpdateSelected,
  smallerThan,
  subtract,
  supportedLanguages,
  supportedNativeCurrencies,
  toChecksumAddress,
  transactions,
  transactionData,
  transactionsClearState,
  transactionsUpdateHasPendingTransaction,
  transactionsUpdateTransactions,
  web3Instance,
  withSendComponentWithData,
};
