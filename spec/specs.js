beforeEach(function() {
  Contact.all = [];
});

describe("Contact", function() {
  describe("initialize", function() {
    it("sets the first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });

    it("sets up an empty array for the addresses property", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });

    it("sets up an empty array for the phones property", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.phoneNumbers.should.eql([]);
    });
  });
  describe("create", function() {
    it("creates a new instance of a Contact", function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it("initializes the contact", function() {
      var testContact = Contact.create("Mary","Jane");
      testContact.addresses.should.eql([]);
    });
    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
});

describe("Address", function () {
  describe("initialize", function() {
    it("initializes the address", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("123 4th Ave", "Portland", "Oregon");
      testAddress.street.should.equal("123 4th Ave");
      testAddress.city.should.equal("Portland");
      testAddress.state.should.equal("Oregon");
    });
  });
  describe("create", function() {
    it("creates an instance of the address object", function() {
      var testAddress = Address.create
      ();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
  });
  describe("fullAddress", function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
    });
  });

  describe("valid", function() {
    it("returns false if City is not a string", function() {
      var testAddress = Object.create(Address);
      testAddress.city = "125Dre";
      testAddress.street = "Street";
      testAddress.valid().should.equal(false);
    });
    it("returns true if City is a string", function() {
      var testAddress = Object.create(Address);
      testAddress.city = "City";
      testAddress.street = "Street";
      testAddress.valid().should.equal(true);
    });
    it("returns false if the string is fewer than four characters", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "Glo";
      testAddress.city = "City";
      testAddress.valid().should.equal(false);
    });
  });
});

describe("Phone", function(){
  describe("initialize", function() {
    it("initializes the phone number", function() {
      var testPhone = Object.create(Phone);
      testPhone.initialize("334", "332", "2700");
      testPhone.areaCode.should.equal("334");
      testPhone.firstThreeNumbers.should.equal("332");
      testPhone.lastFourNumbers.should.equal("2700");
    });
  });
  describe("create", function() {
    it("creates an insance of the phone protoype", function() {
      var testPhone = Phone.create();
      Phone.isPrototypeOf(testPhone).should.equal(true);
    });
  });
  describe("phoneNumber", function(){
    it("returns a phone number with nice formatting", function(){
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "545";
      testPhone.firstThreeNumbers = "551";
      testPhone.lastFourNumbers = "1234"; 
      testPhone.phoneNumber().should.equal("545-551-1234");
    });
  });
  describe("valid", function() {
    it("returns false for an entry containing non-number characters", function() {
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "332";
      testPhone.firstThreeNumbers = "34!";
      testPhone.lastFourNumbers = "R2D2";
      testPhone.valid().should.equal(false);
    });
    it("returns true for a valid phone number", function() {
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "332";
      testPhone.firstThreeNumbers = "344";
      testPhone.lastFourNumbers = "5698";
      testPhone.valid().should.equal(true);
    });
  });
});
