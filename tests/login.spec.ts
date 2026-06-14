import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as testData from '../fixtures/users.json'; 

test.describe('Authentication Functionality with Data-Driven', () => {
    let loginPage: LoginPage;

    // 1. SETUP: Chạy trước mỗi Test Case
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    // 2. TEARDOWN (Dọn dẹp): Chạy sau mỗi Test Case 
    test.afterEach(async ({ page }) => {
        // Nơi gọi thẳng câu lệnh SQL vào DB
        // or gọi API để xóa các dữ liệu rác (user ảo, đơn hàng test) vừa tạo
        // Ở đây với SauceDemo, thực hiện xóa sạch Cookie/Session để reset trạng thái sạch sẽ
        console.log('Teardown: Đang dọn dẹp Cookie và Cache của trình duyệt...');
        await page.context().clearCookies();
    });

    // 3. KỊCH BẢN 1: Luồng rủi ro (Negative Case)
    test('Should show error message with invalid credentials', async ({ page }) => {
        
        // Bốc data từ khối "invalidUser" trong file JSON
        await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);
        
        // Kiểm tra
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
    });

    // 4. KỊCH BẢN 2: Luồng thành công (Happy Path)
    test('Should login successfully with valid credentials', async ({ page }) => {
        
        // Bốc data từ khối "validUser" trong file JSON
        await loginPage.login(testData.validUser.email, testData.validUser.password);
        
        // Kiểm tra
        await expect(loginPage.errorMessage).toBeHidden();
        await expect(page).toHaveURL(/.*inventory.html/);
    });
});