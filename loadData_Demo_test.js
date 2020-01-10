// (C) 2019 GoodData Corporation
import { Selector } from "testcafe";
import fixtureWithLogin from "./fixtureWithLogin";

fixtureWithLogin("Load Data Demo - GoodData", 1, "data/#/projects/cie6whw1mke3x822d8kjuqmw8to1p0f4/datasets");

test("should apply parent child filter", async t => {
    await t
      .click(".s-add-data-button")
      .expect(Selector(".upload-dialog-header").innerText)
      .eql("Choose a CSV file");
});
