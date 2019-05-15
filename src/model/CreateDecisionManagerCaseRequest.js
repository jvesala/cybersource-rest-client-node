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
    define(['ApiClient', 'model/Riskv1decisionsBuyerInformation', 'model/Riskv1decisionsCardVerification', 'model/Riskv1decisionsClientReferenceInformation', 'model/Riskv1decisionsDeviceInformation', 'model/Riskv1decisionsMerchantDefinedInformation', 'model/Riskv1decisionsOrderInformation', 'model/Riskv1decisionsPaymentInformation', 'model/Riskv1decisionsProcessorInformation', 'model/Riskv1decisionsRiskInformation', 'model/Riskv1decisionsTravelInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsBuyerInformation'), require('./Riskv1decisionsCardVerification'), require('./Riskv1decisionsClientReferenceInformation'), require('./Riskv1decisionsDeviceInformation'), require('./Riskv1decisionsMerchantDefinedInformation'), require('./Riskv1decisionsOrderInformation'), require('./Riskv1decisionsPaymentInformation'), require('./Riskv1decisionsProcessorInformation'), require('./Riskv1decisionsRiskInformation'), require('./Riskv1decisionsTravelInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreateDecisionManagerCaseRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsBuyerInformation, root.CyberSource.Riskv1decisionsCardVerification, root.CyberSource.Riskv1decisionsClientReferenceInformation, root.CyberSource.Riskv1decisionsDeviceInformation, root.CyberSource.Riskv1decisionsMerchantDefinedInformation, root.CyberSource.Riskv1decisionsOrderInformation, root.CyberSource.Riskv1decisionsPaymentInformation, root.CyberSource.Riskv1decisionsProcessorInformation, root.CyberSource.Riskv1decisionsRiskInformation, root.CyberSource.Riskv1decisionsTravelInformation);
  }
}(this, function(ApiClient, Riskv1decisionsBuyerInformation, Riskv1decisionsCardVerification, Riskv1decisionsClientReferenceInformation, Riskv1decisionsDeviceInformation, Riskv1decisionsMerchantDefinedInformation, Riskv1decisionsOrderInformation, Riskv1decisionsPaymentInformation, Riskv1decisionsProcessorInformation, Riskv1decisionsRiskInformation, Riskv1decisionsTravelInformation) {
  'use strict';




  /**
   * The CreateDecisionManagerCaseRequest model module.
   * @module model/CreateDecisionManagerCaseRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateDecisionManagerCaseRequest</code>.
   * @alias module:model/CreateDecisionManagerCaseRequest
   * @class
   * @param clientReferenceInformation {module:model/Riskv1decisionsClientReferenceInformation} 
   * @param orderInformation {module:model/Riskv1decisionsOrderInformation} 
   */
  var exports = function(clientReferenceInformation, orderInformation) {
    var _this = this;

    _this['clientReferenceInformation'] = clientReferenceInformation;


    _this['orderInformation'] = orderInformation;






  };

  /**
   * Constructs a <code>CreateDecisionManagerCaseRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDecisionManagerCaseRequest} obj Optional instance to populate.
   * @return {module:model/CreateDecisionManagerCaseRequest} The populated <code>CreateDecisionManagerCaseRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Riskv1decisionsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = Riskv1decisionsProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Riskv1decisionsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Riskv1decisionsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Riskv1decisionsBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Riskv1decisionsDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('cardVerification')) {
        obj['cardVerification'] = Riskv1decisionsCardVerification.constructFromObject(data['cardVerification']);
      }
      if (data.hasOwnProperty('riskInformation')) {
        obj['riskInformation'] = Riskv1decisionsRiskInformation.constructFromObject(data['riskInformation']);
      }
      if (data.hasOwnProperty('travelInformation')) {
        obj['travelInformation'] = Riskv1decisionsTravelInformation.constructFromObject(data['travelInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Riskv1decisionsMerchantDefinedInformation]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1decisionsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsCardVerification} cardVerification
   */
  exports.prototype['cardVerification'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsRiskInformation} riskInformation
   */
  exports.prototype['riskInformation'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsTravelInformation} travelInformation
   */
  exports.prototype['travelInformation'] = undefined;
  /**
   * @member {Array.<module:model/Riskv1decisionsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;



  return exports;
}));


