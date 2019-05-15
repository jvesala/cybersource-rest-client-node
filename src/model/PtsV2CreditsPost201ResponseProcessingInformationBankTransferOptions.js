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
    root.CyberSource.PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions model module.
   * @module model/PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions</code>.
   * @alias module:model/PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions} obj Optional instance to populate.
   * @return {module:model/PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions} The populated <code>PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('settlementMethod')) {
        obj['settlementMethod'] = ApiClient.convertToType(data['settlementMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * Method used for settlement.  Possible values: - **A**: Automated Clearing House (default for credits and for transactions using Canadian dollars) - **F**: Facsimile draft (U.S. dollars only) - **B**: Best possible (U.S. dollars only) (default if the field has not already been configured for your merchant ID)  See \"Settlement Delivery Methods,\" page 44. 
   * @member {String} settlementMethod
   */
  exports.prototype['settlementMethod'] = undefined;



  return exports;
}));


