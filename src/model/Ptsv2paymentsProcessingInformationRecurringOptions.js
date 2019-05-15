/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsProcessingInformationRecurringOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsProcessingInformationRecurringOptions model module.
   * @module model/Ptsv2paymentsProcessingInformationRecurringOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsProcessingInformationRecurringOptions</code>.
   * @alias module:model/Ptsv2paymentsProcessingInformationRecurringOptions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsProcessingInformationRecurringOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsProcessingInformationRecurringOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsProcessingInformationRecurringOptions} The populated <code>Ptsv2paymentsProcessingInformationRecurringOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('loanPayment')) {
        obj['loanPayment'] = ApiClient.convertToType(data['loanPayment'], 'Boolean');
      }
      if (data.hasOwnProperty('firstRecurringPayment')) {
        obj['firstRecurringPayment'] = ApiClient.convertToType(data['firstRecurringPayment'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Flag that indicates whether this is a payment towards an existing contractual loan.  Possible values: - **true** Loan payment - **false** (default) Not a loan payment  See \"Visa Debt Repayments,\" page 218, for a list of processors that support this feature. 
   * @member {Boolean} loanPayment
   * @default false
   */
  exports.prototype['loanPayment'] = false;
  /**
   * Flag that indicates whether this transaction is the first in a series of recurring payments.  This field is supported only for **Atos**, **FDC Nashville Global**, and **OmniPay Direct**.  Possible values:  - **true** Indicates this is the first payment in a series of recurring payments  - **false** (default) Indicates this is not the first payment in a series of recurring payments.  For more details, see \"Recurring Payments,\" page 198. 
   * @member {Boolean} firstRecurringPayment
   * @default false
   */
  exports.prototype['firstRecurringPayment'] = false;



  return exports;
}));


