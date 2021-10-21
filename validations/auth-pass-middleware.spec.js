const authPassMiddleware = require("../middlewares/auth-pass-middleware");

jest.mock("../models/users");

const User = require("../models/users");

test("정상적인 토큰을 넣은 경우 User.findOne이 실행된다.", () => {
  User.findOne = jest.fn();
  authPassMiddleware(
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

test("프론트에서 넘겨줄 때 로그인이 안되어 있어도 next로 넘어간다.", () => {
  const mockedSend = jest.fn();
  authPassMiddleware(
    {
      headers: {
        authorization: "",
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
    msg: undefined,
  });

  authPassMiddleware(
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
    msg: "알수없는 문제가 생겼습니다.",
  });
});
