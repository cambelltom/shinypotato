export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginbutton = '[type="submit"]'


    navigate(url: string){
        cy.visit(url)

    }
    
    enterUsername(usrnm: string){
        cy.get(this.loginPage_username).type(usrnm)

    }    
    
    enterPassword(psswrd: string){
        cy.get(this.loginPage_password).type(psswrd)

    }
    
    clickLogin(){
        cy.get(this.loginPage_loginbutton).click()
    }
}