import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  return res.send({ message: 'Hello world' });
});

describe('App e2e', () => {
  it('Hi Message - / (GET)', async (done: any) => {
    return request(app)
      .get('/')
      .expect(200)
      .then((res: any) => {
        const body = res.body;
        expect(body).toHaveProperty('message');
        done();
      })
      .catch((err) => done(err));
  });
});
