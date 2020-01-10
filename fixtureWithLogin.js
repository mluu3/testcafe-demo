// (C) 2019 GoodData Corporation
export default (name, version, page = "") =>
    fixture(name)
        .page(`${process.env.TEST_BACKEND}`)
        .meta({ version })
        .beforeEach(async t => {
            await t
                .typeText(".s-login-login", process.env.TEST_USERNAME)
                .typeText(".s-login-password", process.env.TEST_PASSWORD)
                .click(".s-login-button");

            await t.navigateTo(`${process.env.TEST_BACKEND}/${page}`);
        });
