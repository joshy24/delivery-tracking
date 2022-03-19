
const { savePackage } = require("../services/package.service")
const app = require('../index')

const supertest = require('supertest')
const { statuses } = require("../modules/status-options.module")
const request = supertest(app)

jest.setTimeout(15000)

describe("Testing Routes", () => {
    describe("Create package route tests", () => {
        it("returns a 400 if a body parameter is missing", async () => {
            const response = await request.post('/api/v1/create_package')
            
            expect(response.status).toBe(400)
        })

        it("returns a 400 if a body parameter is empty", async () => {
            const response = await request.post('/api/v1/create_package').send({
                content: "",
                destination_address: "",
                pick_up_address: ""
            })
            
            expect(response.status).toBe(400)
        })

        it("returns a 400 if a body parameter is too long", async () => {
            const response = await request.post('/api/v1/create_package').send({
                content: "This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.This is a question we get from time to time. There are instances when you’re given an assignment, not by word count, but assigned by the number of pages. For example, “Write a paper four pages long.” If you get an assignment to write four pages, one of the first questions that will likely come to mind is, “How many words are in four pages?” If you need to figure out words per page, you can use a words per page calculator.",
                destination_address: "A destination address address",
                pick_up_address: "a pick up address",
                _id: "",
                status: ""
            })
            
            expect(response.status).toBe(400)
        })

        it("returns an 200 if the right parameters are set in the body", async () => {
            const response = await request.post('/api/v1/create_package').send({
                content: "Converse Shoes",
                destination_address: "No 4, Dotun street, New York",
                pick_up_address: "No 31, Gansalo close Florida"
            })

            expect(response.status).toBe(200)
        })
    })

    describe("Update package route tests", () => {
        it("returns a 400 if a body parameter is missing", async () => {
            const response = await request.post('/api/v1/update_package')
            
            expect(response.status).toBe(400)
        })

        it("returns a 400 if a body parameter is empty", async () => {
            const response = await request.post('/api/v1/update_package').send({
                content: "",
                destination_address: "",
                pick_up_address: "",
                status: "",
                _id: "",
            })
            
            expect(response.status).toBe(400)
        })

        it("returns a 400 if we attempt to switch the state of a package from DELIVERED to any other state or from any other state back to PICKED_UP", async () => {
            let savedPackage = await savePackage({
                content: "Prada Bag and Nike Slippers and Gucci Belt",
                destination_address: "No 4, Dotun street, New York",
                pick_up_address: "No 31, Gansalo close Florida"
            })

            savedPackage.status = statuses.IN_TRANSIT;
            savedPackage = JSON.parse(JSON.stringify(savedPackage))

            const response = await request.post('/api/v1/update_package').send(savedPackage)
            
            expect(response.status).toBe(200)

            savedPackage.status = statuses.PICKED_UP;
            savedPackage = JSON.parse(JSON.stringify(savedPackage))

            const response_one = await request.post('/api/v1/update_package').send(savedPackage)
            
            expect(response_one.status).toBe(400)

            savedPackage.status = statuses.DELIVERED;
            savedPackage = JSON.parse(JSON.stringify(savedPackage))

            const response_three = await request.post('/api/v1/update_package').send(savedPackage)
            
            expect(response_three.status).toBe(200)

            savedPackage.status = statuses.IN_TRANSIT;
            savedPackage = JSON.parse(JSON.stringify(savedPackage))

            const response_four = await request.post('/api/v1/update_package').send(savedPackage)
            
            expect(response_four.status).toBe(400)

            await request.delete(`/api/v1/delete_package/${savedPackage._id.toString()}`)
        })

    })

    describe("Get package route tests", () => {
        it("returns a 404 if the _id parameter is missing", async () => {
            const response = await request.get('/api/v1/get_package')
            
            expect(response.status).toBe(404)
        })

        it("returns a 400 if the _id parameter is not the right length", async () => {
            const response = await request.get(`/api/v1/get_package/123456`)
            
            expect(response.status).toBe(400)
        })

        it("returns a 404 if the package with the passed _id cant be found", async () => {
            const response = await request.get(`/api/v1/get_package/62359f29ab544720919e8a74`)
            
            expect(response.status).toBe(404)
        })

        it("returns a 200 if the package with the passed _id can be found", async () => {
            let savedPackage = await savePackage({
                content: "Prada Bag and Nike Slippers and Gucci Belt",
                destination_address: "No 4, Dotun street, New York",
                pick_up_address: "No 31, Gansalo close Florida"
            })

            const response = await request.get(`/api/v1/get_package/${savedPackage._id.toString()}`)
            
            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('data')
            expect(response.body.data).toHaveProperty('_id')
            expect(response.body.data).toHaveProperty('content')
            expect(response.body.data).toHaveProperty('destination_address')
            expect(response.body.data).toHaveProperty('pick_up_address')
            expect(response.body.data).toHaveProperty('created')
            expect(response.body.data).toHaveProperty('status')

            await request.delete(`/api/v1/delete_package/${savedPackage._id.toString()}`)
        })
    })

    describe("Delete package route tests", () => {
        it("returns a 404 if a parameter is missing", async () => {
            const response = await request.delete('/api/v1/delete_package/')
            
            expect(response.status).toBe(404)
        })

        it("returns a 400 if the _id parameter is not the right length", async () => {
            const response = await request.delete(`/api/v1/delete_package/12345`)
            
            expect(response.status).toBe(400)
        })

        it("returns a 404 if the package with the passed _id cant be found", async () => {
            const response = await request.delete(`/api/v1/delete_package/62359f29ab544720919e8a74`)
           
            expect(response.status).toBe(404)
        })

        it("returns a 200 after successfully deleting a package", async () => {
            let savedPackage = await savePackage({
                content: "Prada Bag and Nike Slippers and Gucci Belt",
                destination_address: "No 4, Dotun street, New York",
                pick_up_address: "No 31, Gansalo close Florida"
            })

            const response = await request.delete(`/api/v1/delete_package/${savedPackage._id.toString()}`)

            expect(response.status).toBe(200)
        })
    })
})