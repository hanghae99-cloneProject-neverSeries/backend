const authMiddleware = require("../middlewares/auth-middleware");

jest.mock("../models/users");

const User = require("../models/users");

test("정상적인 토큰을 넣은 경우 User.findOne이 실행된다.", () => {
  User.findOne = jest.fn();
  authMiddleware(
    {
      headers: {
        //시크릿 키를 이용한 정상토큰
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhc2RmIn0.lzZkSzkjZ1FUDab5iubSL2sVzY2PpQKXj9ddcn24Xn8",
      },
    },
    {
      status: () => ({
        send: () => {},
      }),
      locals: {},
    }
  );
  expect(User.findOne).toHaveBeenCalled();
});

test("프론트에서 넘겨줄 때 Bearer를 붙이지 않고 넘겨줄 경우 실패한다.", () => {
  const mockedSend = jest.fn();

  authMiddleware(
    {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XJ9tvUkwJFn8GAN8YRNIOlXTlF7bcoMOMxD5WPNAEAg",
      },
    },
    {
      status: () => ({
        send: mockedSend,
      }),
      locals: {},
    }
  );
  expect(mockedSend).toHaveBeenCalledWith({
    msg: "로그인 후 이용하실 수 있습니다.",
  });

  authMiddleware(
    {
      headers: {
        authorization:
          "Tigerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XJ9tvUkwJFn8GAN8YRNIOlXTlF7bcoMOMxD5WPNAEAg",
      },
    },
    {
      status: () => ({
        send: mockedSend,
      }),
      locals: {},
    }
  );

  expect(mockedSend).toHaveBeenCalledWith({
    msg: "로그인 후 이용하실 수 있습니다.",
  });
});
