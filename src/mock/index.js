let Mock = require("mockjs");
let Random = Mock.Random;

Mock.mock("api/messageList", {
  "list|5-20": [
    {
      "title|1-3": "姑妈说：找媳妇", // 属性值重复3次
      "content|1-3":
        "表弟找了女朋友，姑妈死活不同意。表弟急了：你都没见过，就说不同意，为什么呀？ ",
      name: Random.cname(),
      "comment|10-200": 1, // 10~200随机数，1用来确定类型
    },
  ],
});

export default Mock;
