const {userAuthController} = require('../routes/controller/me');

describe('로그인했는지에 대한 API 검사', () => {
  const req = {};
  const res = {
    locals: {
      userId: 'this_is_test',
      user_id: '1',
      nickname: 'this_is_test',
      muffin: '15',
    },
    send: jest.fn(),
  };
  test('로그인 한 유저입니다.', async () => {
    await userAuthController(req, res);
    expect(res.send).toBeCalledWith({
      userId: 'this_is_test',
      user_id: '1',
      nickname: 'this_is_test',
      muffin: '15',
    })
  })
})