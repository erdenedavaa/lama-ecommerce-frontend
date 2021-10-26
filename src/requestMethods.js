import axios from 'axios'

const BASE_URL = 'http://localhost:2000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmJkZGQyZDdlNDBhNjFhZGQ1OTVlOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTEzMzA1OSwiZXhwIjoxNjM1MzkyMjU5fQ.q7aS1i9UtcUagmZjmdjZb7JOMz1jjZDp56ZwR-m57ao'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})
