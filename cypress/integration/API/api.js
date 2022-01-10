/// <reference types="Cypress" />
const apiURL = "https://reqres.in/api";
const testName = "Reqres"

describe(`${testName} Test Case`, () => {
    it("it's pretty awesome, don't worry", () => {
        cy.request({
            url: apiURL + "/users?page=2",
            method: "GET",
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.data.length).eq(6);
        })
    })
})