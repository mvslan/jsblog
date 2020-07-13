let Mock = require('mockjs')

Mock.mock('api/messageList', {
  "name|3": "ABC",    // 属性值重复3次
  "age|20-30": 1      // 20~30随机数，1用来确定类型
});

export default Mock
