const { request } = require('supertest');
const express = require('express');
const { describe } = require('mocha');
//const expect = require('chai').expect;

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response"});
});

describe("First test", () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200)
        });
    });
});

    it('Mocky OK Response', (done) => {
        request('http://mocky.io')
        .get('https://run.mocky.io/v3/411f8c29-cc88-4c5a-a229-b9b35a749c16')
        .expect(200, done);
    })