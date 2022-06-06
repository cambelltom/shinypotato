import {LoginPage} from "../Pages/login_page"

const login_page = new LoginPage()

it('google test', function(){

    login_page.navigate('https://trytestingthis.netlify.app/')
    login_page.enterUsername('test')
    login_page.enterPassword('test')
    login_page.clickLogin()

})