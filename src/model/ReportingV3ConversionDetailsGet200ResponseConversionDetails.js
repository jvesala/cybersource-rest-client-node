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
    define(['ApiClient', 'model/ReportingV3ConversionDetailsGet200ResponseNotes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ConversionDetailsGet200ResponseNotes'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ConversionDetailsGet200ResponseConversionDetails = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ConversionDetailsGet200ResponseNotes);
  }
}(this, function(ApiClient, ReportingV3ConversionDetailsGet200ResponseNotes) {
  'use strict';




  /**
   * The ReportingV3ConversionDetailsGet200ResponseConversionDetails model module.
   * @module model/ReportingV3ConversionDetailsGet200ResponseConversionDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ConversionDetailsGet200ResponseConversionDetails</code>.
   * @alias module:model/ReportingV3ConversionDetailsGet200ResponseConversionDetails
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ReportingV3ConversionDetailsGet200ResponseConversionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ConversionDetailsGet200ResponseConversionDetails} obj Optional instance to populate.
   * @return {module:model/ReportingV3ConversionDetailsGet200ResponseConversionDetails} The populated <code>ReportingV3ConversionDetailsGet200ResponseConversionDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantReferenceNumber')) {
        obj['merchantReferenceNumber'] = ApiClient.convertToType(data['merchantReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('conversionTime')) {
        obj['conversionTime'] = ApiClient.convertToType(data['conversionTime'], 'Date');
      }
      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('originalDecision')) {
        obj['originalDecision'] = ApiClient.convertToType(data['originalDecision'], 'String');
      }
      if (data.hasOwnProperty('newDecision')) {
        obj['newDecision'] = ApiClient.convertToType(data['newDecision'], 'String');
      }
      if (data.hasOwnProperty('reviewer')) {
        obj['reviewer'] = ApiClient.convertToType(data['reviewer'], 'String');
      }
      if (data.hasOwnProperty('reviewerComments')) {
        obj['reviewerComments'] = ApiClient.convertToType(data['reviewerComments'], 'String');
      }
      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = ApiClient.convertToType(data['profile'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], [ReportingV3ConversionDetailsGet200ResponseNotes]);
      }
    }
    return obj;
  }

  /**
   * Merchant reference number of a merchant
   * @member {String} merchantReferenceNumber
   */
  exports.prototype['merchantReferenceNumber'] = undefined;
  /**
   * Date of conversion
   * @member {Date} conversionTime
   */
  exports.prototype['conversionTime'] = undefined;
  /**
   * Cybersource Transation request id
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * Original decision
   * @member {String} originalDecision
   */
  exports.prototype['originalDecision'] = undefined;
  /**
   * New decision
   * @member {String} newDecision
   */
  exports.prototype['newDecision'] = undefined;
  /**
   * User name of the reviewer
   * @member {String} reviewer
   */
  exports.prototype['reviewer'] = undefined;
  /**
   * Comments of the reviewer
   * @member {String} reviewerComments
   */
  exports.prototype['reviewerComments'] = undefined;
  /**
   * Name of the queue
   * @member {String} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * Name of the profile
   * @member {String} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * @member {Array.<module:model/ReportingV3ConversionDetailsGet200ResponseNotes>} notes
   */
  exports.prototype['notes'] = undefined;



  return exports;
}));


