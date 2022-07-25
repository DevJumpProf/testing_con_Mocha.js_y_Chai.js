
/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmployeePage{
  
    get userNameHeader () {
        return $('/html/body/div[1]/header/div[7]/details/details-menu/div[1]/a/strong');
    }


getUserNameText () {
    this.userNameHeader.getText();
};


}

module.exports = new EmployeePage();