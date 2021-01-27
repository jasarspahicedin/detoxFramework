export default class Home {
    get HomePageTab() {
        return element(by.id('Home Page Tab'));
    }

    get Dry() {
        return element(by.text('DRY'));
    }

    get HealthyRiceItem() {
        return element(by.text('Healthy Rice'));
    }

    get DeliveredList() {
        return element(by.id('Delivered Items'));
    }

    get Produce() {
        return element(by.text('PRODUCE'));
    }

    get PotatoItem() {
        return element(by.text('Roots - Potato'));
    }

    get ArrowBack() {
        return element(by.id('Back Arrow Icon TopBar'));
    }

    check = async () => {
        await this.HomePageTab.tap();

        await expect(this.Dry).toBeVisible();
        await expect(this.HealthyRiceItem).toBeVisible();

        await this.DeliveredList.scroll(1000, 'down');

        await expect(this.Produce).toBeVisible();
        await expect(this.PotatoItem).toBeVisible();

        await this.ArrowBack.tap();
    };
}
