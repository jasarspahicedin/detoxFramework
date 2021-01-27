class Settings {

    get SettingsButton() {
        return element(by.id('Connection Settings Button Login'));
    }

    get ConnectionSetting() {
        return element(by.id('Staging Connection Settings'));
    }

    setStagingConnectionSettings = async () => {
        await this.SettingsButton.tap();
        await this.ConnectionSetting.tap();
    };
}

module.exports = Settings;
