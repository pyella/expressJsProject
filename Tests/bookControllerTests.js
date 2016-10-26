/**
 * Created by PY028031 on 10/22/2016.
 */

var should = require("should"),
    sinon = require("sinon");

describe("Book controller tests", function() {
    describe("post", function() {
        var Book;
        var res;
        beforeEach(function() {
            Book = function(book) { this.save = sinon.spy()};
            res = {
                status: sinon.spy(),
                send: sinon.spy()
            };
        });
        it("should not allow an empty title on post", function() {
            var req = {
                body: {
                    author: "Prashanth"
                }
            };
            var bookController = require("../controllers/bookController")(Book);
            bookController.post(req, res);

            res.status.calledWith(400).should.equal(true, "Bad status " +res.status.args[0][0]);
            res.send.calledWith("Title is required").should.equal(true);
        });

        it("should send response with status 201 with a non empty title", function() {
            var req = {
                body: {
                    title: "I will pass with 201"
                }
            };
            var bookController = require("../controllers/bookController")(Book);
            bookController.post(req, res);
            res.status.calledWith(201).should.equal(true);
        });
    });

    xdescribe("get", function() {

    });
});