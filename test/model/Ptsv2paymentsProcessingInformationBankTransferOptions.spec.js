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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ptsv2paymentsProcessingInformationBankTransferOptions', function() {
    it('should create an instance of Ptsv2paymentsProcessingInformationBankTransferOptions', function() {
      // uncomment below and update the code to test Ptsv2paymentsProcessingInformationBankTransferOptions
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions);
    });

    it('should have the property declineAvsFlags (base name: "declineAvsFlags")', function() {
      // uncomment below and update the code to test the property declineAvsFlags
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property secCode (base name: "secCode")', function() {
      // uncomment below and update the code to test the property secCode
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property terminalCity (base name: "terminalCity")', function() {
      // uncomment below and update the code to test the property terminalCity
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property terminalState (base name: "terminalState")', function() {
      // uncomment below and update the code to test the property terminalState
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property effectiveDate (base name: "effectiveDate")', function() {
      // uncomment below and update the code to test the property effectiveDate
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property partialPaymentId (base name: "partialPaymentId")', function() {
      // uncomment below and update the code to test the property partialPaymentId
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property customerMemo (base name: "customerMemo")', function() {
      // uncomment below and update the code to test the property customerMemo
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property paymentCategoryCode (base name: "paymentCategoryCode")', function() {
      // uncomment below and update the code to test the property paymentCategoryCode
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property settlementMethod (base name: "settlementMethod")', function() {
      // uncomment below and update the code to test the property settlementMethod
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

    it('should have the property fraudScreeningLevel (base name: "fraudScreeningLevel")', function() {
      // uncomment below and update the code to test the property fraudScreeningLevel
      //var instane = new CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions();
      //expect(instance).to.be();
    });

  });

}));
