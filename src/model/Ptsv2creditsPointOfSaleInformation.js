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
    define(['ApiClient', 'model/Ptsv2creditsPointOfSaleInformationEmv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2creditsPointOfSaleInformationEmv'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2creditsPointOfSaleInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2creditsPointOfSaleInformationEmv);
  }
}(this, function(ApiClient, Ptsv2creditsPointOfSaleInformationEmv) {
  'use strict';




  /**
   * The Ptsv2creditsPointOfSaleInformation model module.
   * @module model/Ptsv2creditsPointOfSaleInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2creditsPointOfSaleInformation</code>.
   * @alias module:model/Ptsv2creditsPointOfSaleInformation
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Ptsv2creditsPointOfSaleInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2creditsPointOfSaleInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2creditsPointOfSaleInformation} The populated <code>Ptsv2creditsPointOfSaleInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emv')) {
        obj['emv'] = Ptsv2creditsPointOfSaleInformationEmv.constructFromObject(data['emv']);
      }
      if (data.hasOwnProperty('partnerSdkVersion')) {
        obj['partnerSdkVersion'] = ApiClient.convertToType(data['partnerSdkVersion'], 'String');
      }
      if (data.hasOwnProperty('storeAndForwardIndicator')) {
        obj['storeAndForwardIndicator'] = ApiClient.convertToType(data['storeAndForwardIndicator'], 'String');
      }
      if (data.hasOwnProperty('cardholderVerificationMethod')) {
        obj['cardholderVerificationMethod'] = ApiClient.convertToType(data['cardholderVerificationMethod'], ['String']);
      }
      if (data.hasOwnProperty('terminalInputCapability')) {
        obj['terminalInputCapability'] = ApiClient.convertToType(data['terminalInputCapability'], ['String']);
      }
      if (data.hasOwnProperty('terminalSerialNumber')) {
        obj['terminalSerialNumber'] = ApiClient.convertToType(data['terminalSerialNumber'], 'String');
      }
      if (data.hasOwnProperty('terminalCardCaptureCapability')) {
        obj['terminalCardCaptureCapability'] = ApiClient.convertToType(data['terminalCardCaptureCapability'], 'String');
      }
      if (data.hasOwnProperty('terminalOutputCapability')) {
        obj['terminalOutputCapability'] = ApiClient.convertToType(data['terminalOutputCapability'], 'String');
      }
      if (data.hasOwnProperty('terminalPinCapability')) {
        obj['terminalPinCapability'] = ApiClient.convertToType(data['terminalPinCapability'], 'Number');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2creditsPointOfSaleInformationEmv} emv
   */
  exports.prototype['emv'] = undefined;
  /**
   * Version of the software installed on the POS terminal. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} partnerSdkVersion
   */
  exports.prototype['partnerSdkVersion'] = undefined;
  /**
   * When connectivity is unavailable, the client software that is installed on the POS terminal can store a transaction in its memory and send it for authorization when connectivity is restored. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  Possible values: - Y: Transaction was stored and then forwarded. - N (default): Transaction was not stored and then forwarded.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} storeAndForwardIndicator
   */
  exports.prototype['storeAndForwardIndicator'] = undefined;
  /**
   * @member {Array.<String>} cardholderVerificationMethod
   */
  exports.prototype['cardholderVerificationMethod'] = undefined;
  /**
   * @member {Array.<String>} terminalInputCapability
   */
  exports.prototype['terminalInputCapability'] = undefined;
  /**
   * Terminal serial number assigned by the hardware manufacturer. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} terminalSerialNumber
   */
  exports.prototype['terminalSerialNumber'] = undefined;
  /**
   * Indicates whether the terminal can capture the card.  Possible values: - 1: Terminal can capture card. - 0: Terminal cannot capture card.  This field is supported only on American Express Direct. 
   * @member {String} terminalCardCaptureCapability
   */
  exports.prototype['terminalCardCaptureCapability'] = undefined;
  /**
   * Indicates whether the terminal can print or display messages.  Possible values: - 1: Neither - 2: Print only - 3: Display only - 4: Print and display  This field is supported only on American Express Direct. 
   * @member {String} terminalOutputCapability
   */
  exports.prototype['terminalOutputCapability'] = undefined;
  /**
   * Maximum PIN length that the terminal can capture.  Possible values: -  0: No PIN capture capability -  1: PIN capture capability unknown -  4: Four characters -  5: Five characters -  6: Six characters -  7: Seven characters -  8: Eight characters -  9: Nine characters - 10: Ten characters - 11: Eleven characters - 12: Twelve characters  This field is supported only on American Express Direct and SIX. 
   * @member {Number} terminalPinCapability
   */
  exports.prototype['terminalPinCapability'] = undefined;
  /**
   * Value created by the client software that uniquely identifies the POS device. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;



  return exports;
}));


