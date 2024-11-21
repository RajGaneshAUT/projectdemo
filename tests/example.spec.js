// @ts-check
const { test, expect } = require('@playwright/test');
import {testLogin} from '../tests/command/login'


test(' performance test', async ({ page }) => {


 await testLogin(page)


});