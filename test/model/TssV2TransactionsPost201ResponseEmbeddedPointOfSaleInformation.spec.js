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
    instance = new CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation();
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

  describe('TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation', function() {
    it('should create an instance of TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation', function() {
      // uncomment below and update the code to test TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation
      //var instane = new CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation();
      //expect(instance).to.be.a(CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation);
    });

    it('should have the property terminalId (base name: "terminalId")', function() {
      // uncomment below and update the code to test the property terminalId
      //var instane = new CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property terminalSerialNumber (base name: "terminalSerialNumber")', function() {
      // uncomment below and update the code to test the property terminalSerialNumber
      //var instane = new CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation();
      //expect(instance).to.be();
    });

    it('should have the property partner (base name: "partner")', function() {
      // uncomment below and update the code to test the property partner
      //var instane = new CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation();
      //expect(instance).to.be();
    });

  });

}));
