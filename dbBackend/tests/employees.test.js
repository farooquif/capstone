import request from 'supertest'
import app from '../psdbserver.js'
import { query } from '../db.js'

jest.unstable_mockModule('../db.js', () => {
    query: jest.fn()
})

describe('GET /api/employees', () => {

    afterEeach(() => {
        jest.clearAllMocks()
    })

    it('should return 400 if name is missing', async () => {
        const res = await request(app).get('/api/employees')
        expect(res.statusCode).toBe(400)
        expect(res.text).toBe('Name is required')
    })

    it('should return employees when name is provided', async () => {
        const mockData = [
            {
                id: 20,
                name: "Sandra King",
                username: "sking",
                password: "tiger123",
                phone_number: "612-555-0123",
                job_role: "Software Engineer",
                work_location: "Minnesota"
            }
        ]

        query.mockResolvedValue({ rows: mockData })

        const res = await request(app).get('/api/employees?name=Sandra')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(mockData)
        expect(query).toHaveBeenCalledWith(
            'SELECT id, name, username, phone_number, job_role, work_location FROM users WHERE name ILIKE $1',
      ['%Sandra%']
        )

    })

    it('should return 500 on databaase error', async () => {

        query.mockRejectedValue(new Error('DB error'))

        const res = await request(app).get('api/employees?name=Goku')
        expect(res.statusCode).toBe(500)
        expect(res.text).toBe('Internal Server Error')
    })

})