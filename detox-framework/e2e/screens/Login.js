export default class Login {
    get EmailInput() {
        return element(by.id('Email Input Login'));
    }

    get PasswordlInput() {
        return element(by.id('Password Input Login'));
    }

    get LoginButton() {
        return element(by.id('Login Button Login'));
    }

    get BurgerIcon() {
        return element(by.id('Burger Icon TopBar'));
    }

    get SingOutButton() {
        return element(by.id('Sign Out Button'));
    }

    logIn = async (data) => {
        await expect(this.EmailInput).toBeVisible();
        await expect(this.PasswordlInput).toBeVisible();

        await this.EmailInput.replaceText(data.email);
        await this.PasswordlInput.replaceText(data.password);
        await this.LoginButton.tap();
    };

    logOut = async () => {
        await this.BurgerIcon.tap();
        await this.SingOutButton.tap();
    };
}
