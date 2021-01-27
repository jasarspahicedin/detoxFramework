export default class Sample2 {
    get Sample2Tab() {
        return element(by.id('Orders Tab'));
    }

    get Food1() {
        return element(by.id('item1'));
    }

    get Food2() {
        return element(by.id('item2'))
    }

    get OrderList() {
        return element(by.id('Order List'))
    }


    get TotalOrder() {
        return element(by.id('Order Total'))
    }

    setEmptyFieldTo0 = async (data) => {
        await this.OrdersTab.tap();

        await expect(this.TotalOrder).toBeVisible();
        await expect(this.TotalOrder).toHaveText(data.price1)

        await this.OrderList.scroll(70, 'down');
       
        await expect(this.Food1).toBeVisible();
        await expect(this.Food2).toBeVisible();

        await this.Food1.tap();
        await this.Food1.replaceText('');
       
        await this.OrdersTab.tap();
        await this.Food2.tap();

       await expect(this.Food1).toHaveText('0');
       await expect(this.TotalOrder).toHaveText(data.price2)

    };

    checkTotalPrice = async () => {

        await this.OrderList.scroll(70, 'up');

        await this.Food1.tap();
        await this.Food1.replaceText('4');

        await this.Food2.tap();

        expect(this.Food1).toHaveText('4');
        expect(this.TotalOrder).toHaveText('$6.35')
    };
}
