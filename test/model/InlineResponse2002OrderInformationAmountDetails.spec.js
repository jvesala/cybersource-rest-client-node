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
    instance = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
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

  describe('InlineResponse2002OrderInformationAmountDetails', function() {
    it('should create an instance of InlineResponse2002OrderInformationAmountDetails', function() {
      // uncomment below and update the code to test InlineResponse2002OrderInformationAmountDetails
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be.a(CyberSource.InlineResponse2002OrderInformationAmountDetails);
    });

    it('should have the property authorizedAmount (base name: "authorizedAmount")', function() {
      // uncomment below and update the code to test the property authorizedAmount
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "totalAmount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property dutyAmount (base name: "dutyAmount")', function() {
      // uncomment below and update the code to test the property dutyAmount
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "taxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property nationalTaxIncluded (base name: "nationalTaxIncluded")', function() {
      // uncomment below and update the code to test the property nationalTaxIncluded
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property freightAmount (base name: "freightAmount")', function() {
      // uncomment below and update the code to test the property freightAmount
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxDetails (base name: "taxDetails")', function() {
      // uncomment below and update the code to test the property taxDetails
      //var instane = new CyberSource.InlineResponse2002OrderInformationAmountDetails();
      //expect(instance).to.be();
    });

  });

}));