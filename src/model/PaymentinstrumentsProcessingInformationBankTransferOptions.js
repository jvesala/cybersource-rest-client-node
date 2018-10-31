/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    root.CyberSource.PaymentinstrumentsProcessingInformationBankTransferOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentinstrumentsProcessingInformationBankTransferOptions model module.
   * @module model/PaymentinstrumentsProcessingInformationBankTransferOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentinstrumentsProcessingInformationBankTransferOptions</code>.
   * @alias module:model/PaymentinstrumentsProcessingInformationBankTransferOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentinstrumentsProcessingInformationBankTransferOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentinstrumentsProcessingInformationBankTransferOptions} obj Optional instance to populate.
   * @return {module:model/PaymentinstrumentsProcessingInformationBankTransferOptions} The populated <code>PaymentinstrumentsProcessingInformationBankTransferOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SECCode')) {
        obj['SECCode'] = ApiClient.convertToType(data['SECCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Authorization method used for the transaction.(acceptable values are CCD, PPD, TEL, WEB).
   * @member {String} SECCode
   */
  exports.prototype['SECCode'] = undefined;



  return exports;
}));

