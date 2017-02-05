import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Test example', () => {
    it('should run and pass', () => {
        expect(true).to.equal(true);
    })
});

describe('index.html', () => {
    it('should have a div with id app', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const el = window.document.getElementById("app");
            expect(el).to.exist;
            done();
            window.close();
        })
    })
});
