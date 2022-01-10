/// <reference types="Cypress" />
const apiURL = "https://reqres.in/api";
const testName = "Reqres"

describe(`${testName} Test Case`, () => {
    it("Sends a GET request for User List", () => {
        cy.request({
            url: apiURL + "/users?page=2",
            method: "GET",
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.data.length).eq(6)
        });
    });

    it("Sends a GET request for Single User", () => {
        cy.request({
            url: apiURL + "/users/2",
            method: "GET",
        }).then((response) => {
            expect(response.status).eq(200);
        });
    });

    it("Sends a GET request for Single User Not Found", () => {
        cy.request({
            url: apiURL + "/users/23",
            method: "GET",
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).eq(404);
        });
    });

    it("Sends a GET request for List <Resource>", () => {
        cy.request({
            url: apiURL + "/unknown",
            method: "GET",
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.data.length).eq(6)
        });
    });

    it("Sends a GET request for Single <Resource>", () => {
        cy.request({
            url: apiURL + "/unknown/2",
            method: "GET",
        }).then((response) => {
            expect(response.status).eq(200);
        });
    });

    it("Sends a GET request for Single <Resource> Not Found", () => {
        cy.request({
            url: apiURL + "/unknown/23",
            method: "GET",
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).eq(404);
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

    it("Sends a POST Login Request", () => {
        cy.request({
            method: "POST",
            url: apiURL + "/login",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body).has.property("token", "QpwL5tke4Pnpja7X4");
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

    it("Sends a GET request for User List with delay", () => {
        cy.request({
            url: apiURL + "/users?delay=3",
            method: "GET",
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.data.length).eq(6)
        });
    });
})
