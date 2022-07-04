
/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmployeePage{
  
    get userNameHeader () {
        return $('//[@id="contentEmployee"]/h4/span');
    }
    get employeeNameInput () {
        return $('#name');
    }
    get employeeAddressInput () {
        return $('#adress');
    }
    get employeeCityInput () {
        return $('//*[@ng-model-"city"]');
    }
    get employeeStateInput () {
        return $('#state');
    }
    get employeePostCodeInput () {
        return $('#postcode');
    }
    get employeeEmailInput () {
        return $('#email');
    }
    get employeePhoneNumberInput () {
        return $('#phoneNumber');
    }

    get addButton () {
        return $('#addButton');
    }

    get sucessAlert () {
        return $('#success-alert');
    }

getUserNameText () {
    this.userNameHeader.getText();
};

fillEmployeeForm(employeName,employeeAddress, employeeCity, employeeState, employeePostCode, employeeEmail,employeePhoneNumber) {
      this.employeeNameInput.setValue(employeName);
      this.employeeAddressInput.setValue(employeeAddress);
      this.employeeCityInput.setValue(employeeCity);
      this.employeeStateInput.setValue(employeeState);
      this.employeePostCodeInput.setValue(employeePostCode);
      this.employeeEmailInput.setValue(employeeEmail);
      this.employeePhoneNumberInput.setValue(employeePhoneNumber);
    };


addEmployee() {
    this.addButton.click();
};

isSuccessAlertDisplayed(){
    this.successAlert.isDisplayed();
}

}

module.exports = new EmployeePage();