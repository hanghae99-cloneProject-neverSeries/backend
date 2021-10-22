jest.mock('../models/products');
jest.mock('../models/rounds');
jest.mock('../models/likes');
jest.mock('../models/users');
jest.mock('../models/reviews');
jest.mock('../models/buyproducts');
const {User, Product, BuyProduct} = require('../models');

const {home, buyMuffin} = require('../routes/controller/index');

describe('홈 화면 조회에 대한 검사', () => {
  const req = {};
  const res = {
    send: jest.fn(),
  };
  const next = jest.fn();

  test('홈 화면에 성공적으로 도서 리스트를 뿌려줍니다.', async () => {
    Product.findAll.mockReturnValue(Promise.resolve({
      home() {
        return Promise.resolve(true);
      }
    }));
    await home(req, res, next);
    expect(res.send).toBeCalledTimes(1); // res.send()는 잘 작동되는데 toBeCalledwith 랑 어떻게 맞춰야할지 모르겠음
  });
});

describe('머핀 충전에 대한 검사', () => {
  const req = {
    body: {muffin: 15}
  };
  const res = {
    locals: {
      userId: 1,
      muffin: 0,
    },
    send: jest.fn(),
  };
  const next = jest.fn();
  test('성공적으로 머핀이 충전되었을 경우 /머핀이 충전되었습니다/ 메세지 응답', async () => {
    User.update.mockReturnValue(Promise.resolve(true));
    await buyMuffin(req, res, next);
    expect(res.send).toBeCalledWith({msg: '머핀이 충전되었습니다'})
  });
});
