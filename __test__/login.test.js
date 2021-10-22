jest.mock('../models/users');
jest.mock('jsonwebtoken')
const User = require('../models/users');
const {login} = require('../routes/controller/login');
const jwt = require('jsonwebtoken');

describe('로그인에 대한 검사', ()=>{
  const req = {
    body: {
      userId: 'this_is_test',
      pw: '1234',
    },
  };
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const token = jwt.sign({userId: 'this_is.=_test'}, process.env.JWT_SECRET)
  test('아이디와 비밀번호가 알맞는 로그인입니다.', async () => {
    User.findOne.mockReturnValue(Promise.resolve({
      login() {
        return Promise.resolve(true);
      }
    }));
    await login(req, res);
    expect(res.status).toBeCalledWith({msg: 'hi'})
  })
})