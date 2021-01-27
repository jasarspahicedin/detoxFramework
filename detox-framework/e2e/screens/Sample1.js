export default class Sample1 {
    get locator1() {
        return element(by.text('SampleText1'));
    }

    get locator2() {
        return element(by.text('SampleText2'));
    }

    get locator3() {
        return element(by.text('SampleText3'));
    }

    get locator4() {
        return element(by.id('SampleID4'));
    }

    get locator5() {
        return element(by.text('SampleText5'));
    }

    get locator6 () {
        return element(by.text('SampleText6'))
    }

    get locator7 () {
        return element(by.text('SampleText7'))
    }

    check = async () => {
        await expect(this.locator1).toBeVisible();
        await expect(this.locator2).toBeVisible();
        await expect(this.locator3).toBeVisible();

        await this.locator4.scroll(500, 'down');

        await expect(this.locator5).toBeVisible();

        await expect(this.locator6).toBeVisible();
        await expect(this.locator7).toBeVisible();
    };
}
