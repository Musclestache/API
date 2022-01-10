/// <reference types="Cypress" />
const apiURL = "https://reqres.in/api";
const testName = "Reqres"

describe(`${testName} Test Case`, () => {
    it("Sends a GET request", () => {
        cy.request({
            url: apiURL + "/users?page=2",
            method: "GET",
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.data.length).eq(6)
        });
    });


    it("Sends a POST request", () => {
        cy.request({
            method: "POST",
            url: apiURL + "/users",
            body: {
                "id": "211",
                "name": "morpheus",
                "job": "leader",
            }
        }).then((response) => {
            expect(response.status).eq(201);
            expect(response.body).has.property("job", "leader");
        });
    });


    it("Sends a PUT request", () => {
        cy.request({
            method: "PUT",
            url: apiURL + "/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident",
            }
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body).has.property("job", "zion resident");
        });
    });


    it("Sends a DELETE request", () => {
        cy.request({
            method: "DELETE",
            url: apiURL + "/users/2",
        }).then((response) => {
            expect(response.status).eq(204);
            expect(response.body).to.be.empty;
        });
    });
})
