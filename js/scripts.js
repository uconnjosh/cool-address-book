var Contact = {
  all: [],
  initialize: function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = [];
    this.phoneNumbers = [];
  },

  create: function (firstName, lastName) {
    var contact = Object.create(Contact);
    contact.initialize(firstName, lastName);
    Contact.all.push(contact);
    return contact;
  },

  createAddress: function(inputtedStreet, inputtedCity, inputtedState) {
      var address = Address.create(inputtedStreet, inputtedCity, inputtedState);
      this.addresses.push(address);  
  },
  
  createPhone: function(inputtedAreaCode, inputtedFirstThree, inputtedLastFour) {
    var phone = Phone.create(inputtedAreaCode, inputtedFirstThree, inputtedLastFour);
    this.phones.push(phone);
  } ,   

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  initialize: function(inputtedStreet, inputtedCity, inputtedState) {
    this.street = inputtedStreet;
    this.city = inputtedCity;
    this.state = inputtedState;
  },

  create: function(inputtedStreet, inputtedCity, inputtedState) {
    var newAddress = Object.create(Address);
    newAddress.initialize(inputtedStreet, inputtedCity, inputtedState);
    return newAddress;
  },
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  },

  valid: function() {
    var regEx = (/([*+?^=!:${}()|\[\]\/\\\d])+/g);
    if((!regEx.test(this.city)) && (this.street.length > 4)) {
      console.log();
      return true;
    } else {
      return false;
    }
  }
};

var Phone = {
  initialize: function(inputtedAreaCode, inputtedFirstThree, inputtedLastFour) {
    this.areaCode = inputtedAreaCode;
    this.firstThreeNumbers = inputtedFirstThree;
    this.lastFourNumbers = inputtedLastFour;
  },

  create: function(inputtedAreaCode, inputtedFirstThree, inputtedLastFour) {
    var newPhone = Object.create(Phone);
    newPhone.initialize(inputtedAreaCode, inputtedFirstThree, inputtedLastFour);
    return newPhone;
  },

  phoneNumber: function() {
    return this.areaCode + "-" + this.firstThreeNumbers + "-" + this.lastFourNumbers;
  },

  valid: function() {
    if (((this.areaCode.length === 3) && (this.firstThreeNumbers.length === 3) && (this.lastFourNumbers.length === 4)) || ((this.areaCode.length === 0) && (this.firstThreeNumbers.length === 0) && (this.lastFourNumbers.length === 0))) {
      if ((this.areaCode % 1 !== 0) || (this.firstThreeNumbers % 1 !== 0) || (this.lastFourNumbers % 1 !== 0)) {
        return false;
      } 
    } else {
      return false;
    } 
    return true;
  } 
};

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('Next Address' + '<div class="new-address">' +
                                  '<div class="form-group">' +
                                    '<input type="text" class="form-control new-street" placeholder="Street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<input type="text" class="form-control new-city" placeholder="City">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<select class="form-control new-state">' +
                                      '<option value="">Select State</option>'+
                                      '<option value="AL">Alabama</option>'+
                                      '<option value="AK">Alaska</option>'+
                                      '<option value="AZ">Arizona</option>'+
                                      '<option value="AR">Arkansas</option>'+
                                      '<option value="CA">California</option>'+
                                      '<option value="CO">Colorado</option>'+
                                      '<option value="CT">Connecticut</option>'+
                                      '<option value="DE">Delaware</option>'+
                                      '<option value="FL">Florida</option>'+
                                      '<option value="GA">Georgia</option>'+
                                      '<option value="HI">Hawaii</option>'+
                                      '<option value="ID">Idaho</option>'+
                                      '<option value="IL">Illinois</option>'+
                                      '<option value="IN">Indiana</option>'+
                                      '<option value="IA">Iowa</option>'+
                                      '<option value="KS">Kansas</option>'+
                                      '<option value="KY">Kentucky</option>'+
                                      '<option value="LA">Louisiana</option>'+
                                      '<option value="ME">Maine</option>'+
                                      '<option value="MD">Maryland</option>'+
                                      '<option value="MA">Massachusetts</option>'+
                                      '<option value="MI">Michigan</option>'+
                                      '<option value="MS">Mississippi</option>'+
                                      '<option value="MN">Minnisota</option>'+
                                      '<option value="MO">Missouri</option>'+
                                      '<option value="MT">Montana</option>'+
                                      '<option value="NE">Nebraska</option>'+
                                      '<option value="NV">Nevada</option>'+
                                      '<option value="NH">New Hampshire</option>'+
                                      '<option value="NJ">New Jersey</option>'+
                                      '<option value="NY">New York</option>'+
                                      '<option value="NC">North Carolina</option>'+
                                      '<option value="NM">New Mexico</option>'+
                                      '<option value="SC">South Carolina</option>'+
                                      '<option value="ND">North Dakota</option>'+
                                      '<option value="SD">South Dakota</option>'+
                                      '<option value="OH">Ohio</option>'+
                                      '<option value="OK">Oklahoma</option>'+
                                      '<option value="OR">Oregon</option>'+
                                      '<option value="PA">Pennsylvania</option>'+
                                      '<option value="RI">Rhode Island</option>'+
                                      '<option value="TN">Tennessee</option>'+
                                      '<option value="TX">Texas</option>'+
                                      '<option value="UT">Utah</option>'+
                                      '<option value="VT">Vermont</option>'+
                                      '<option value="VA">Virginia</option>'+
                                      '<option value="WV">West Virginia</option>'+
                                      '<option value="WA">Washington</option>'+
                                      '<option value="WI">Wisconsin</option>'+
                                      '<option value="WY">Wyoming</option>'+
                                    '</select>' +
                                                      '</div>' +
                                                    '</div>') 
  });
  $("#add-phone").click(function() {
    $("#new-phone-numbers").append('<div class="new-phone">' +
                                      '<div class="col-xs-3">' +
                                        '<div class="form-group">' +
                                          '<input type="text" class="form-control new-area-code"  placeholder="Area Code">' +
                                        '</div>' +
                                      '</div>' +
                                      '<div class="col-xs-4">  ' +
                                        '<div class="form-group">' +
                                          '<input type="text" class="form-control new-first-three" placeholder="First Three Digits">' +
                                        '</div>' +
                                      '</div>' +
                                      '<div class="col-xs-5">' +
                                        '<div class="form-group">' +
                                          '<input type="text" class="form-control new-last-four"  placeholder="Last Four Digits">' +
                                        '</div>' +
                                      '</div>' +
                                    '</div>')
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = Contact.create(inputtedFirstName, inputtedLastName);

    $(".new-phone").each(function() {
      var inputtedAreaCode = $(this).find("input.new-area-code").val();
      var inputtedFirstThree = $(this).find("input.new-first-three").val();
      var inputtedLastFour = $(this).find("input.new-last-four").val();
      
      var newPhone = Phone.create(inputtedAreaCode, inputtedFirstThree, inputtedLastFour);  
      newContact.phoneNumbers.push(newPhone);
    });

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find(".new-state").val();

      var newAddress = Address.create(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });

    var allPhonesValid // = loop through all phones with every or check phones as entered.

    if (newPhone.valid() && newAddress.valid()) {
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

      $(".contact").last().click(function() {
      
        $("#show-contact").show();

        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);

        $("ul#phone-numbers").text("");
        newContact.phoneNumbers.forEach(function(phone) {
          $("ul#phone-numbers").append("<li>" + phone.phoneNumber() + "</li>");
        });

        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
      });
      this.reset();
    } else {
        if (!newPhone.valid()) {
          alert("Please Enter a Valid Number."); 
          $(".new-area-code").val("");
          $(".new-first-three").val("");
          $(".new-last-four").val("");
      } else {
          alert("Please Enter a Valid City");
          $(".new-city").val("");
      }
    }
  });
});

