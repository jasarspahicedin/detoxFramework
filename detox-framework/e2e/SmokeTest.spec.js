import Login from './screens/Login';
import Sample1 from './screens/Sample1';
import Sample2 from './screens/Sample2';
import Home from './screens/Home';
import { data } from './config';

const LoginScreen = new Login();
const SampleScreen1 = new Sample1();
const SampleScreen2 = new Sample2();
const HomeScreen = new Home();

describe('Smoke Tests', () => {

  it('Smoke Test for tabs', async () => {

    /***********Login***************/
    await LoginScreen.logIn(data);

    /**************Home Screen*************/
    await HomeScreen.check();

    /*********Sample1 Screen**************/
    await SampleScreen1.check();

    /***********Orders Screen**********/
    await SampleScreen2.setEmptyFieldTo0(data);
    await SampleScreen2.checkTotalPrice(data);

    /*********Logout*******************/ 
    await LoginScreen.logOut();
  });
});
