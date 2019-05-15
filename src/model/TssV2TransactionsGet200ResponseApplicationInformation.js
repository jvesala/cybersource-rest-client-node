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
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponseApplicationInformationApplications'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponseApplicationInformationApplications'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseApplicationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponseApplicationInformationApplications);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponseApplicationInformationApplications) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseApplicationInformation model module.
   * @module model/TssV2TransactionsGet200ResponseApplicationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseApplicationInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseApplicationInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseApplicationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseApplicationInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseApplicationInformation} The populated <code>TssV2TransactionsGet200ResponseApplicationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reasonCode')) {
        obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
      }
      if (data.hasOwnProperty('rCode')) {
        obj['rCode'] = ApiClient.convertToType(data['rCode'], 'String');
      }
      if (data.hasOwnProperty('rFlag')) {
        obj['rFlag'] = ApiClient.convertToType(data['rFlag'], 'String');
      }
      if (data.hasOwnProperty('applications')) {
        obj['applications'] = ApiClient.convertToType(data['applications'], [TssV2TransactionsGet200ResponseApplicationInformationApplications]);
      }
    }
    return obj;
  }

  /**
   * The status of the submitted transaction.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} reasonCode
   */
  exports.prototype['reasonCode'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} rCode
   */
  exports.prototype['rCode'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} rFlag
   */
  exports.prototype['rFlag'] = undefined;
  /**
   * @member {Array.<module:model/TssV2TransactionsGet200ResponseApplicationInformationApplications>} applications
   */
  exports.prototype['applications'] = undefined;



  return exports;
}));


