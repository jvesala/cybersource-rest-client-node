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
    root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions model module.
   * @module model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions} The populated <code>TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authType')) {
        obj['authType'] = ApiClient.convertToType(data['authType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Authorization type.  Possible values:   - **AUTOCAPTURE**: automatic capture.  - **STANDARDCAPTURE**: standard capture.  - **VERBAL**: forced capture. Include it in the payment request for a forced capture. Include it in the capture request for a verbal payment.  **Asia, Middle East, and Africa Gateway; Cielo; Comercio Latino; and CyberSource Latin American Processing**\\ Set this field to _AUTOCAPTURE_ and include it in a bundled request to indicate that you are requesting an automatic capture. If your account is configured to enable automatic captures, set this field to STANDARDCAPTURE and include it in a standard authorization or bundled request to indicate that you are overriding an automatic capture. For more information, see \"Automatic Captures,\" page 33.  **Forced Capture**\\ Set this field to _VERBAL_ and include it in the authorization request to indicate that you are performing a forced capture; therefore, you receive the authorization code outside the CyberSource system. For more information, see \"Forced Captures,\" page 123.  **Verbal Authorization**\\ Set this field to _VERBAL_ and include it in the capture request to indicate that the request is for a verbal authorization. For more information, see \"Verbal Authorizations,\" page 84.  For processor-specific information, see the auth_type field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} authType
   */
  exports.prototype['authType'] = undefined;



  return exports;
}));


