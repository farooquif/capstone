import { jest } from '@jest/globals'
import request from 'supertest'

// ✅ Set up mock *before* importing anything that uses it
const mockQuery = jest.fn()
jest.unstable_mockModule('../db.js', () => ({
  query: mockQuery
}))

// ✅ Dynamically import the app and query AFTER mocking
const { app } = await import('../psdbserver.js')
const { query } = await import('../db.js')

describe('GET /api/employees', () => {

  afterEach(() => {
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
        work_location: "Minnesota",
        image_url: "https://randomuser.me/api/portraits/women/26.jpg"
      }
    ]

    query.mockResolvedValue({ rows: mockData })

    const res = await request(app).get('/api/employees?name=Sandra')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual(mockData)
    expect(query).toHaveBeenCalledWith(
      'SELECT id, name, job_role, image_url FROM users WHERE name ILIKE $1',
      ['%Sandra%']
    )
  })

  it('should return 500 on database error', async () => {
    query.mockRejectedValue(new Error('DB error'))

    const res = await request(app).get('/api/employees?name=Goku')
    expect(res.statusCode).toBe(500)
    expect(res.text).toBe('Internal Server Error')
  })

})
