// 의심가는 테스트가 많으니 믿지마세요
jest.mock('../models/users');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const {createUser, dupCheckId} = require('../routes/controller/unit/signup-joi');

describe('아이디 중복 및 닉네임 중복 검사', () => {
  const userId = 'jeangho293';
  const nickname = 'Badboy';
  test('이미 존재하는 아이디일 경우', async () => {
    User.findOne.mockReturnValue(true);
    await expect(dupCheckId(userId, nickname)).rejects.toThrow('이미 존재하는 아이디입니다.')
  });
});
describe('단방향 암호화 및 회원 가입에 대한 검사', () => {
  const userId = 'jeangho293';
  const pw = 'dkssud123@';
  const nickname = 'Badboy';
  const EncryptPw = bcrypt.hashSync(pw, parseInt(process.env.SALF));
  const res = {
    send: jest.fn()
  }
  test('회원가입에 성공했을 경우', async () => {
    User.create.mockReturnValue(Promise.resolve(true));
    await createUser(userId, EncryptPw, nickname, res);
    expect(res.send).toBeCalledWith({msg: '회원 가입을 축하드립니다.'});
  });
});