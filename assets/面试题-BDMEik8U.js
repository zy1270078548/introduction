var e=`# 第一章 面试题基础\r
\r
## 1.1 HTML面试题\r
\r
### 1：行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？\r
\r
\`\`\`\r
行内元素：span、img、input...\r
块级元素：div、footer、header、section、p、h1...h6...\r
空元素：br、hr...\r
\r
元素之间的转换问题：\r
display: inline;			把某元素转换成了行内元素		===>不独占一行的，不能设置宽高\r
display: inline-block;		把某元素转换成了行内块元素		===>不独占一行的，可以设置宽高\r
display: block;				把某元素转换成了块元素			===>独占一行，可以设置宽高\r
\`\`\`\r
\r
### 2：页面导入样式时，使用link和@import有什么区别？\r
\r
\`\`\`\`\`\`\r
一：link先有，后有@import（兼容性link比@import兼容）；\r
二：加载顺序差别，浏览器先加载的标签link，后加载@import\r
\`\`\`\`\`\`\r
\r
### 3：img标签的title和alt有什么区别？\r
\r
\`\`\`\`\`\`\r
一：\r
    title ： 鼠标移入到图片显示的值\r
    alt   ： 图片无法加载时显示的值\r
二：\r
    在seo的层面上，蜘蛛抓取不到图片的内容，所以前端在写img标签的时候为了增加seo效果要加入alt属性来描述这张图是什么内容或者关键词。\r
\`\`\`\`\`\`\r
\r
## 1.2 CSS面试题\r
\r
### 1：介绍一下CSS的盒子模型\r
\r
\`\`\`\`\`\`\r
CSS的盒子模型有哪些：标准盒子模型、IE盒子模型\r
CSS的盒子模型区别：\r
    标准盒子模型：margin、border、padding、content\r
    IE盒子模型 ：margin、content（ border +  padding  + content ）\r
通过CSS如何转换盒子模型：\r
    box-sizing: content-box;	/*标准盒子模型*/\r
    box-sizing: border-box;		/*IE盒子模型*/\r
\`\`\`\`\`\`\r
\r
### 2：CSS选择符有哪些？哪些属性可以继承？\r
\r
\`\`\`\`\`\`\r
CSS选择符：\r
    通配（*）\r
    id选择器（#）\r
    类选择器（.）\r
    标签选择器（div、p、h1...）\r
    相邻选择器(+)\r
    后代选择器(ul li)\r
    子元素选择器（ > ）\r
    属性选择器(a[href])\r
     \r
CSS属性哪些可以继承：\r
        文字系列：font-size、color、line-height、text-align...\r
   不可继承属性：border、padding、margin...\r
\`\`\`\`\`\`\r
\r
### 3：CSS优先级算法如何计算？\r
\r
\`\`\`\r
优先级比较：!important > 内联样式 > id > class > 标签 > 通配\r
\`\`\`\r
\r
### 4：一个盒子如何水平垂直居中？\r
\r
\`\`\`\r
1. 使用flex布局，给它的父元素增加align-items:center;justify-content:center;\r
2. 设置宽高，position: absolute;inset: 0;margin: auto;\r
3. 给元素设置position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);\r
\`\`\`\r
\r
### 5：对BFC规范(块级格式化上下文)的理解？\r
\r
\`\`\`\r
最直白的理解： 一个封闭的盒子，里面的东西再怎么折腾，都不会影响到盒子外面\r
BFC的常见触发条件（满足一条就行）：\r
	float 不是 none\r
	position 是 absolute 或 fixed\r
	display 是 inline-block、table-cell、flex 等\r
	overflow 不是 visible（常用 hidden 或 auto）\r
	\r
1. 清除浮动（防止高度塌陷）\r
.parent {\r
  	overflow: hidden; /* 触发BFC，现在parent的高度会包含浮动的子元素 */\r
}\r
.child {\r
  	float: left;\r
}\r
\r
2. 防止外边距合并\r
<div class="box1">上边</div>\r
<div class="container" style="overflow: hidden;"> <!-- 触发BFC -->\r
	<div class="box2">下边</div>\r
</div>\r
这样 box1 和 box2 的 margin 就不会重叠了。\r
\r
3. 阻止元素被浮动元素覆盖\r
.left {\r
	float: left;\r
	width: 100px;\r
}\r
.right {\r
	overflow: hidden; /* 触发BFC，就不会被左边的浮动盖住了 */\r
}\r
\`\`\`\r
\r
### 6：清除浮动有哪些方式？\r
\r
\`\`\`\r
1. 在浮动元素下新增一个有clear:both;属性的空元素\r
2. 浮动元素伪元素设置clear:both;\r
3. 触发BFC 设置overflow: hidden;\r
\`\`\`\r
\r
### 7：写一个左中右布局占满屏幕，其中左、右俩块固定宽200，中间自适应宽，要求先加载中间块，请写出结构及样式。\r
\r
\`\`\`\r
使用flex布局：dom结构先写中间再写左右，左右设置宽度200，中间设置flex: 1;然后分别给左中右设置order:1/2/3来改变视觉顺序\r
\`\`\`\r
\r
### 8：rem和em有什么区别，它们的应用场景有哪些？\r
\r
**最直白的理解：**\r
\r
- **em**：相对于**当前元素**的字体大小\r
- **rem**：相对于**根元素(html)** 的字体大小\r
\r
| 特性         | em                               | rem                    |\r
| :----------- | :------------------------------- | :--------------------- |\r
| **相对基准** | 当前元素的字体大小               | 根元素(html)的字体大小 |\r
| **可预测性** | 低（受嵌套影响）                 | 高（始终一致）         |\r
| **适用场景** | 组件内部比例关系、行高、文字相关 | 布局、间距、整体尺寸   |\r
| **响应式**   | 组件级响应                       | 全局级响应             |\r
| **维护性**   | 复杂嵌套时难维护                 | 易于维护和计算         |\r
\r
**使用 rem 实现响应式：**\r
\r
\`\`\`css\r
/* 基础字体大小 */\r
html {\r
  font-size: 16px;\r
}\r
\r
/* 平板 */\r
@media (min-width: 768px) {\r
  html {\r
    font-size: 18px;    /* 所有rem单位自动缩放 */\r
  }\r
}\r
\r
/* 桌面 */\r
@media (min-width: 1024px) {\r
  html {\r
    font-size: 20px;    /* 整体放大 */\r
  }\r
}\r
\r
/* 组件样式 - 自动响应根字体变化 */\r
.header {\r
  padding: 2rem;        /* 手机:32px, 平板:36px, 桌面:40px */\r
  font-size: 1.5rem;    /* 手机:24px, 平板:27px, 桌面:30px */\r
}\r
\r
.button {\r
  padding: 0.75rem 1.5rem; /* 自动缩放 */\r
  font-size: 1rem;      /* 始终与根字体保持一致 */\r
}\r
\`\`\`\r
\r
**使用 em 实现组件内部缩放：**\r
\r
\`\`\`css\r
/* 按钮组件 - 内部使用em实现比例关系 */\r
.btn {\r
  font-size: 1rem;      /* 基础大小 */\r
  padding: 0.75em 1.5em;/* 内边距与字体大小成比例 */\r
  border-radius: 0.25em;/* 圆角与字体大小成比例 */\r
  border: 0.125em solid #333; /* 边框与字体大小成比例 */\r
}\r
\r
/* 不同大小的按钮 */\r
.btn--small {\r
  font-size: 0.875rem;  /* 所有相关尺寸自动按比例缩小 */\r
}\r
\r
.btn--large {\r
  font-size: 1.25rem;   /* 所有相关尺寸自动按比例放大 */\r
}\r
\`\`\`\r
\r
### 9：自适应和响应式\r
\r
**最直白的理解：**\r
\r
- **响应式**：一套代码，自动适应所有屏幕（像"水"一样流动）\r
- **自适应**：多套代码，为不同设备准备不同方案（像"预制房"一样匹配）\r
\r
**响应式布局技术**：\r
\r
\`\`\`css\r
/* 1. Flexbox 响应式 */\r
.responsive-grid {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 1rem;\r
}\r
.responsive-grid .item {\r
  flex: 1 1 300px; /* 最小300px，自动换行 */\r
}\r
\r
/* 2. CSS Grid 响应式 */\r
.grid-container {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r
  gap: 1rem;\r
}\r
\r
/* 3. 响应式图片 */\r
.responsive-img {\r
  max-width: 100%;\r
  height: auto;\r
}\r
\r
/* 4. 响应式文字 */\r
.responsive-text {\r
  font-size: clamp(1rem, 2.5vw, 2rem); /* 最小1rem，最大2rem */\r
}\r
\`\`\`\r
\r
**自适应布局：**\r
\r
\`\`\`css\r
/* 手机布局 */\r
@media (max-width: 767px) {\r
  .container {\r
    width: 100%;\r
    padding: 10px;\r
  }\r
  \r
  .menu {\r
    display: none; /* 手机隐藏菜单 */\r
  }\r
  \r
  .mobile-menu {\r
    display: block;\r
  }\r
}\r
\r
/* 平板布局 */\r
@media (min-width: 768px) and (max-width: 1023px) {\r
  .container {\r
    width: 750px;\r
    margin: 0 auto;\r
  }\r
  \r
  .sidebar {\r
    width: 200px;\r
    float: left;\r
  }\r
  \r
  .content {\r
    width: 550px;\r
    float: left;\r
  }\r
}\r
\r
/* 桌面布局 */\r
@media (min-width: 1024px) {\r
  .container {\r
    width: 1200px;\r
    margin: 0 auto;\r
  }\r
  \r
  .sidebar {\r
    width: 250px;\r
  }\r
  \r
  .content {\r
    width: 950px;\r
  }\r
}\r
\`\`\`\r
\r
\r
\r
\r
\r
\r
\r
## 1.3 Javascript基础面试题\r
\r
### 1：async/await的作用和用法\r
\r
\`\`\`javascript\r
//	作用1.解决回调地狱：让异步代码看起来像同步代码\r
//	作用2.错误处理更简单：可以用 try/catch 捕获错误\r
\r
// 1. 在函数前加 async\r
async function fetchData() {\r
  // 在 Promise 前加 await\r
  let data = await fetch('https://api.example.com/data');\r
  let result = await data.json();\r
  return result;\r
}\r
// 2. 错误处理\r
async function fetchData() {\r
  try {\r
    let data = await fetch('https://api.example.com/data');\r
    let result = await data.json();\r
    return result;\r
  } catch (error) {\r
    console.log('出错了:', error);\r
  }\r
}\r
// 总结：\r
async 函数总是返回 Promise\r
await 只能在 async 函数内部使用\r
await 会暂停代码执行，直到 Promise 完成\r
\`\`\`\r
\r
### 2：async/await例子\r
\r
\`\`\`js\r
// 模拟一个异步获取用户信息的函数\r
function getUserInfo() {\r
  return new Promise(resolve => {\r
    setTimeout(() => {\r
      console.log('3.用户数据获取完成');\r
      resolve({ name: '小明', age: 25 });\r
    }, 2000); // 模拟2秒网络请求\r
  });\r
}\r
\r
// 模拟一个异步检查VIP状态的函数\r
function checkVIP(user) {\r
  return new Promise(resolve => {\r
    setTimeout(() => {\r
      console.log('5. VIP状态检查完成');\r
      resolve({ ...user, isVIP: true });\r
    }, 1000); // 模拟1秒检查\r
  });\r
}\r
\r
async function main() {\r
  console.log('1.开始执行程序');\r
  \r
  // 这里会暂停，等待2秒获取用户信息\r
  const user = await getUserInfo();\r
  console.log('4. 用户信息:', user);\r
  \r
  // 这里会再次暂停，等待1秒检查VIP状态\r
  const userWithVIP = await checkVIP(user);\r
  console.log('6. 最终用户数据:', userWithVIP);\r
  \r
  console.log('7. 所有操作完成');\r
}\r
main();\r
console.log('2.这行代码会立即执行，不会等待await');\r
\r
1.开始执行程序\r
2.这行代码会立即执行，不会等待await\r
3.用户数据获取完成\r
4.用户信息: {name: '小明', age: 25}\r
5.VIP状态检查完成\r
6.最终用户数据: {name: '小明', age: 25, isVIP: true}\r
7.所有操作完成\r
\`\`\`\r
\r
### 3：JS数据类型有哪些？\r
\r
\`\`\`\r
String/Number/Object/Boolean/undefined/null/symbol/bigint\r
\`\`\`\r
\r
### 4：JS微任务和宏任务\r
\r
\`\`\`\r
console.log('1'); // 同步任务\r
setTimeout(() => {\r
  console.log('2'); // 宏任务\r
}, 0);\r
Promise.resolve().then(() => {\r
  console.log('3'); // 微任务\r
});\r
console.log('4'); // 同步任务\r
\r
输出：1—>4->3->2\r
\`\`\`\r
\r
### 5：Promise 解决了什么问题？\r
\r
\`\`\`\r
Promise 让异步代码写起来更像同步代码，解决了回调地狱，让代码更易读易维护。\r
Promise 的三种状态：pending：进行中;fulfilled：已成功;rejected：已失败\r
// 层层嵌套，难以阅读和维护\r
getUser(userId, function(user) {\r
    getOrders(user.id, function(orders) {\r
        getOrderDetails(orders[0].id, function(details) {\r
            getProductInfo(details.productId, function(product) {\r
                console.log(product);\r
                // 继续嵌套...\r
            });\r
        });\r
    });\r
});\r
\r
getUser(userId)\r
    .then(user => getOrders(user.id))\r
    .then(orders => getOrderDetails(orders[0].id))\r
    .then(details => getProductInfo(details.productId))\r
    .then(product => console.log(product))\r
    .catch(error => console.log('出错了:', error));\r
\`\`\`\r
\r
### 6：typeof和instanceof的区别\r
\r
\`\`\`\r
typeof：检查基本数据类型\r
instanceof：检查引用数据类型，判断对象是否是某个类的实例\r
\r
比如：\r
let fun = function(){};\r
typeof fun;   				// 为 function	\r
fun instanceof Function;	// 为 true\r
---\r
let arr = [];\r
typeof arr;				// 为 Object\r
arr instanceof Array;	// 为 true\r
\`\`\`\r
\r
| 特性         | typeof           | instanceof   |\r
| :----------- | :--------------- | :----------- |\r
| **检查对象** | 数据类型         | 构造函数关系 |\r
| **返回值**   | 字符串           | 布尔值       |\r
| **基本类型** | 有效             | 无效         |\r
| **引用类型** | 不精确（除函数） | 精确         |\r
| **原型链**   | 不检查           | 会检查       |\r
\r
### 7：操作数组的方法有哪些？\r
\r
\`\`\`\r
pop()：删除数组的最后一个元素，并返回该元素【会改变数组长度】\r
let fruits = ['Apple', 'Banana', 'Cherry'];  \r
let lastFruit = fruits.pop(); \r
\r
unshift()：将新元素添加到数组的开头，并返回新的长度【会改变数组长度】\r
let fruits = ['Banana', 'Cherry'];  \r
let newLength = fruits.unshift('Apple', 'Orange'); \r
\r
shift()：删除数组的第一个元素，并返回被删除的元素【会改变原数组及数组长度】\r
let fruits = ['Apple', 'Banana', 'Cherry'];  \r
let firstFruit = fruits.shift(); \r
\r
reverse()：反转数组\r
\r
push()：将元素添加到数组末尾\r
\r
slice()：选择数组的一部分，并返回新数组【不改变原数组】\r
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];  \r
let citrus = fruits.slice(1, 3);  // 选择数组中从第1项开始到第3项之前的元素\r
let citrus = fruits.slice(3);	// 选择数组中第3项元素\r
\r
splice()：删除或替换现有元素，或在指定位置添加新元素，【改变原数组】\r
let fruits = ["苹果", "香蕉", "橙子", "芒果"];\r
let arr = fruits.splice(1, 2); // 从索引 1 开始，删除 2 个元素\r
let arr = fruits.splice(1, 0, '橘子'); // 从索引 1 开始，删除 0 个元素，添加'橘子'\r
let arr = fruits.splice(-2, 1); // 从倒数第 2 个索引开始，删除 1 个元素\r
\r
every()：判断数组每个元素是否都满足某个条件，返回true/false\r
const evens = [0, 2, 4, 6];\r
const res = evens.every(item => item > 1) // 判断evens是否每一项都大于1\r
\r
some()：判断数组至少有一个元素满足某个条件，返回true/false\r
\r
filter()：\r
\r
map()：\r
\r
contact()：\r
\r
join()：\r
\r
isArray()：\r
\r
sort()：\r
\r
findIndex()：\r
\r
indexOf()：\r
\r
lastIndexOf()：\r
\r
forEach()：\r
\r
其中会改变原数组的方法有：push、unshift、pop、shift、sort、splice、reverse\r
\`\`\`\r
\r
### 8：数组中的reduce\r
\r
reduce()：该方法对数组中的每个元素 按序执行 一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。\r
  应用场景：\r
\r
	1. 数学运算：求和、求积、找最大值/最小值\r
	2. 数据转换：数组转对象、数组扁平化\r
	3. 数据统计：计数、分组、去重\r
	4. 流水线处理：多个数据处理步骤串联\r
  一句话总结： reduce 是数组的"瑞士军刀"，功能强大，可以把数组元素累积成任何你想要的形式。\r
\r
基本用法：\r
\r
\`\`\`\r
array.reduce((accumulator, currentValue, currentIndex, array) => {\r
  // 处理逻辑\r
}, initialValue)\r
accumulator：累加器，存储每一步的结果\r
currentValue：当前遍历到的数组元素\r
currentIndex：当前元素的索引（可选）\r
array：原始数组（可选）\r
initialValue：初始值（可选）\r
\`\`\`\r
\r
1. 数组求和\r
   \`\`\`\r
   const numbers = [1, 2, 3, 4, 5];\r
   // 传统方式\r
   let sum = 0;\r
   for (let i = 0; i < numbers.length; i++) {\r
     sum += numbers[i];\r
   }\r
   // 用 reduce\r
   const sum = numbers.reduce((acc, curr) => acc + curr, 0);\r
   console.log(sum); // 15\r
   // 执行过程\r
   初始值: acc = 0\r
   第1次: acc = 0 + 1 = 1\r
   第2次: acc = 1 + 2 = 3  \r
   第3次: acc = 3 + 3 = 6\r
   第4次: acc = 6 + 4 = 10\r
   第5次: acc = 10 + 5 = 15\r
   \`\`\`\r
\r
2. 数组求乘积\r
\r
   \`\`\`\r
   const numbers = [1, 2, 3, 4];\r
   const product = numbers.reduce((acc, curr) => acc * curr, 1);\r
   console.log(product); // 24\r
   \`\`\`\r
\r
3. 找出最大值\r
\r
   \`\`\`\r
   const numbers = [10, 5, 25, 8, 30];\r
   const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr, numbers[0]);\r
   console.log(max); // 30\r
   \`\`\`\r
\r
4. 数组转对象\r
\r
   \`\`\`\r
   const fruits = ['apple', 'banana', 'orange'];\r
   const fruitObj = fruits.reduce((acc, curr, index) => {\r
     acc[curr] = index;\r
     return acc;\r
   }, {});\r
   \r
   console.log(fruitObj); \r
   // { apple: 0, banana: 1, orange: 2 }\r
   \`\`\`\r
\r
5. 统计元素出现的次数\r
\r
   \`\`\`\r
   const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];\r
   const count = words.reduce((acc, curr) => {\r
     acc[curr] = (acc[curr] || 0) + 1;\r
     return acc;\r
   }, {});\r
   \r
   console.log(count);\r
   // { apple: 3, banana: 2, orange: 1 }\r
   \`\`\`\r
\r
6. 数组扁平化\r
\r
   \`\`\`\r
   const nestedArray = [[1, 2], [3, 4], [5, 6]];\r
   const flatArray = nestedArray.reduce((acc, curr) => {\r
     return acc.concat(curr);\r
   }, []);\r
   \r
   console.log(flatArray); // [1, 2, 3, 4, 5, 6]\r
   \`\`\`\r
\r
7. 按条件分组\r
\r
   \`\`\`\r
   const people = [\r
     { name: 'Alice', age: 25 },\r
     { name: 'Bob', age: 30 },\r
     { name: 'Charlie', age: 25 },\r
     { name: 'David', age: 30 }\r
   ];\r
   \r
   const grouped = people.reduce((acc, curr) => {\r
     const age = curr.age;\r
     if (!acc[age]) {\r
       acc[age] = [];\r
     }\r
     acc[age].push(curr);\r
     return acc;\r
   }, {});\r
   \r
   console.log(grouped);\r
   // {\r
   //   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],\r
   //   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]\r
   // }\r
   \`\`\`\r
\r
### 9：虚拟DOM是什么？涉及到的Diff算法是什么？\r
\r
**最直白的理解：**\r
虚拟DOM就是用对象构建的一个DOM树，当数据更新时利用Diff算法去对比新旧DOM的差异，最后批量更新DOM；如果没有虚拟DOM每次操作都要修改真实DOM，更加消耗性能。\r
\r
虚拟 DOM 的工作原理：\r
\r
1. 创建虚拟DOM\r
\r
   \`\`\`\r
   // 真实DOM\r
   <div class="container">\r
     <h1>Hello</h1>\r
     <p>World</p>\r
   </div>\r
   \r
   // 对应的虚拟DOM（简化版）\r
   const virtualDOM = {\r
     type: 'div',\r
     props: { className: 'container' },\r
     children: [\r
       {\r
         type: 'h1',\r
         props: {},\r
         children: ['Hello']\r
       },\r
       {\r
         type: 'p', \r
         props: {},\r
         children: ['World']\r
       }\r
     ]\r
   }\r
   \`\`\`\r
\r
2. 数据变化时的流程\r
\r
   数据变化 → 生成新虚拟DOM → 对比新旧虚拟DOM → 找出差异 → 批量更新真实DOM\r
\r
3. **虚拟 DOM 的核心价值：**\r
\r
   1. **性能**：批量更新，减少直接DOM操作\r
   2. **抽象**：开发者只需关注数据，不用手动操作DOM\r
   3. **跨平台**：一套虚拟DOM可以渲染到多个平台 PC、移动端等\r
\r
4. 涉及到的DIff算法（对比差异）：\r
\r
   \`\`\`\r
   // 旧虚拟DOM\r
   const oldVDOM = {\r
     type: 'div',\r
     children: [\r
       { type: 'p', children: ['A'] },\r
       { type: 'p', children: ['B'] },\r
       { type: 'p', children: ['C'] }\r
     ]\r
   }\r
   \r
   // 新虚拟DOM  \r
   const newVDOM = {\r
     type: 'div', \r
     children: [\r
       { type: 'p', children: ['A'] },\r
       { type: 'p', children: ['D'] },  // B 改为 D\r
       { type: 'p', children: ['C'] },\r
       { type: 'p', children: ['E'] }   // 新增 E\r
     ]\r
   }\r
   \r
   // Diff 算法发现：\r
   // - 第二个 p 内容从 B 变为 D\r
   // - 新增了一个 p 包含 E\r
   // 然后只更新这两处到真实DOM\r
   \`\`\`\r
\r
### 10：说一下浅拷贝和深拷贝\r
\r
\`\`\`\r
浅拷贝方法：\r
1. Object.assign()\r
const copy1 = Object.assign({}, obj);\r
2. 扩展运算符\r
const copy2 = { ...obj };\r
3. Array.prototype.slice() (数组)\r
const copy3 = arr.slice();\r
4. Array.from() (数组)\r
const copy4 = Array.from(arr);\r
\r
浅拷贝案例：\r
const original = {\r
  name: '张三',\r
  age: 25,\r
  hobbies: ['篮球', '游泳'],\r
  address: {\r
    city: '北京',\r
    street: '朝阳路'\r
  }\r
};\r
\r
// 浅拷贝\r
const shallowCopy = Object.assign({}, original);\r
// 修改浅拷贝后的对象\r
shallowCopy.name = '李四';			// 不影响原对象\r
shallowCopy.hobbies.push('跑步');		// 影响原对象\r
shallowCopy.address.city = '上海'; 	// 影响原对象\r
\r
console.log(original.hobbies);    	// ['篮球', '游泳', '跑步'] 被影响了！\r
console.log(original.address.city); // '上海' 被影响了！\r
\r
总结：浅拷贝如果拷贝的数据都是基本数据类型则不会影响原数据，如果拷贝的数据有对象或者数组等复杂数据类型则会影响原数据，如果拷贝的数据有对象或者数组等复杂数据类型但是修改时将原复杂数据类型的值替换为新的值也不会影响原数据\r
\`\`\`\r
\r
\`\`\`\r
深拷贝方法：\r
1. JSON方法（最常用，但有局限性）\r
const deepCopy1 = JSON.parse(JSON.stringify(obj));\r
2. 递归实现\r
function deepClone(obj) {\r
  if (obj === null || typeof obj !== 'object') {\r
    return obj;\r
  }\r
  \r
  if (obj instanceof Date) {\r
    return new Date(obj.getTime());\r
  }\r
  \r
  if (obj instanceof Array) {\r
    return obj.map(item => deepClone(item));\r
  }\r
  \r
  const cloned = {};\r
  for (let key in obj) {\r
    if (obj.hasOwnProperty(key)) {\r
      cloned[key] = deepClone(obj[key]);\r
    }\r
  }\r
  return cloned;\r
}\r
3. 使用 lodash库\r
const deepCopy3 = _.cloneDeep(obj);\r
\r
\r
深拷贝案例：\r
const original = {\r
  name: '张三',\r
  age: 25,\r
  hobbies: ['篮球', '游泳'],\r
  address: {\r
    city: '北京',\r
    street: '朝阳路'\r
  }\r
};\r
\r
// 深拷贝\r
const deepCopy = JSON.parse(JSON.stringify(original));\r
// 修改深拷贝后的对象\r
deepCopy.name = '李四';\r
deepCopy.hobbies.push('跑步');\r
deepCopy.address.city = '上海';\r
\r
console.log(original.hobbies);    	// ['篮球', '游泳'] 不受影响！\r
console.log(original.address.city); // '北京' 不受影响！\r
\`\`\`\r
\r
### 11：说一下原型和原型链\r
\r
- **原型**：每个对象都有一个"爸爸"（原型对象）\r
- **原型链**：当访问对象属性时，如果自己找不到，就沿着"爸爸链"一直往上找\r
\r
##### 原型：Prototype\r
\r
1. **构造函数、原型、实例的关系：构造函数为定义一个实例提供了条件**\r
\r
   \`\`\`\r
   // 构造函数\r
   function Person(name) {\r
     this.name = name;\r
   }\r
   \r
   // 原型对象（每个函数都有一个prototype属性）\r
   Person.prototype.sayHello = function() {\r
     console.log('Hello, ' + this.name);\r
   };\r
   \r
   // 实例\r
   const person1 = new Person('张三');\r
   const person2 = new Person('李四');\r
   \r
   person1.sayHello(); // Hello, 张三\r
   person2.sayHello(); // Hello, 李四\r
   \`\`\`\r
\r
   **关系图：**\r
\r
   \`\`\`\r
   person1 → Person.prototype → Object.prototype → null\r
   person2 → Person.prototype → Object.prototype → null\r
   \`\`\`\r
\r
2. **原型相关的属性**\r
\r
   \`\`\`\r
   function Person(name) {\r
     this.name = name;\r
   }\r
   \r
   const person = new Person('张三');\r
   \r
   console.log(person.__proto__ === Person.prototype); // true\r
   console.log(Person.prototype.constructor === Person); // true\r
   console.log(Object.getPrototypeOf(person) === Person.prototype); // true\r
   \`\`\`\r
\r
##### 原型链（Prototype Chain）\r
\r
1. 原型链的查找机制\r
\r
   \`\`\`\r
   function Person(name) {\r
     this.name = name;\r
   }\r
   \r
   Person.prototype.sayHello = function() {\r
     console.log('Hello, ' + this.name);\r
   };\r
   \r
   // Object.prototype 是所有对象的最终原型\r
   Object.prototype.toString = function() {\r
     return \`Person: \${this.name}\`;\r
   };\r
   \r
   const person = new Person('张三');\r
   \r
   // 属性查找过程：\r
   person.name        // 1. 先在person自身找 → 找到"张三"\r
   person.sayHello()  // 2. person自身没有 → 去Person.prototype找 → 找到\r
   person.toString()  // 3. person自身没有 → Person.prototype没有 → Object.prototype找到\r
   person.nothing     // 4. 一直找到null还没找到 → 返回undefined\r
   \`\`\`\r
\r
2. 完整的原型链示例\r
\r
   \`\`\`\r
   function GrandParent() {\r
     this.grandValue = '爷爷的值';\r
   }\r
   \r
   function Parent() {\r
     this.parentValue = '爸爸的值';\r
   }\r
   \r
   function Child() {\r
     this.childValue = '孩子的值';\r
   }\r
   \r
   // 建立原型链：Child → Parent → GrandParent → Object → null\r
   Parent.prototype = new GrandParent();\r
   Child.prototype = new Parent();\r
   \r
   const child = new Child();\r
   \r
   console.log(child.childValue);    // "孩子的值" - 自身属性\r
   console.log(child.parentValue);   // "爸爸的值" - Parent实例属性  \r
   console.log(child.grandValue);    // "爷爷的值" - GrandParent实例属性\r
   console.log(child.toString());    // "[object Object]" - Object.prototype方法\r
   \`\`\`\r
\r
##### 最终总结：\r
\r
**构造函数 \`Person\`**：\r
\r
- 是创建对象的"工厂"\r
- 定义了对象的结构和初始属性\r
\r
**实例 \`person\`**：\r
\r
- 是根据构造函数创建的具体对象\r
- 拥有构造函数中定义的属性\r
- 继承自构造函数的原型\r
\r
直白来说：\`构造函数(Person)\` 为\`实例(person)\` 提供了条件并且定义了\`实例\`的结构和属性，\`实例\` 是根据\`构造函数\`创建的一个对象。\r
\r
**原型（Prototype）：**\r
\r
- 每个构造函数都有一个 \`prototype\` 属性\r
- 可以在 \`prototype\` 上挂载任何值（方法、属性）\r
- 这些挂载的值会被所有实例共享\r
\r
**原型链（Prototype Chain）：**\r
\r
- 通过将父级的实例赋值给子级的 \`prototype\` 来建立继承关系\r
- 当访问实例属性时，如果自身没有，就沿着 \`prototype\` 链向上查找\r
- 这个查找过程形成一条"链"，所以叫原型链\r
\r
### 12：说一下回流和重绘\r
\r
- **回流**：计算元素的位置和大小，重新布局（代价高）\r
- **重绘**：元素外观改变，但位置大小不变（代价较低）\r
\r
浏览器渲染流程：\r
\r
\`\`\`\r
HTML解析 → 构建DOM树 → 构建渲染树 → 布局（回流）→ 绘制（重绘）\r
\`\`\`\r
\r
区别对比：\r
\r
| 特性         | 回流                   | 重绘                 |\r
| :----------- | :--------------------- | :------------------- |\r
| **触发条件** | 位置、大小、布局变化   | 颜色、背景等外观变化 |\r
| **性能代价** | 高（需要重新计算布局） | 低（只需重新绘制）   |\r
| **包含关系** | 一定引起重绘           | 不一定引起回流       |\r
\r
**优化原则：**\r
\r
1. 尽量减少回流次数\r
2. *使用 transform 和 opacity 做动画\r
3. 批量操作DOM\r
4. *避免在循环中频繁读写布局信息\r
\r
### 13：说一下undefined和null\r
\r
主要区别对比：\r
\r
| 特性         | undefined                          | null                        |\r
| :----------- | :--------------------------------- | :-------------------------- |\r
| **含义**     | 未定义                             | 空值                        |\r
| **来源**     | JavaScript 系统自带                | 手动设置为空                |\r
| **类型**     | \`typeof undefined\` → \`"undefined"\` | \`typeof null\` → \`"object"\`  |\r
| **数值转换** | \`Number(undefined)\` → \`NaN\`        | \`Number(null)\` → \`0\`        |\r
| **出现场景** | 变量声明未赋值、函数无返回值       | 主动清空变量、DOM查询无结果 |\r
\r
### 14：举几个数组去重的例子\r
\r
\`\`\`\r
1. Set 方法（最简单，ES6）\r
const arr = [1, 2, 2, 3, 4, 4, 5];\r
const uniqueArr = [...new Set(arr)];\r
console.log(uniqueArr); // [1, 2, 3, 4, 5]\r
\r
2. filter + indexOf\r
const arr = [1, 2, 2, 3, 4, 4, 5];\r
const uniqueArr = arr.filter((item, index) => {\r
  return arr.indexOf(item) === index;\r
});\r
console.log(uniqueArr); // [1, 2, 3, 4, 5]\r
\r
3. reduce + includes\r
const arr = [1, 2, 2, 3, 4, 4, 5];\r
const uniqueArr = arr.reduce((acc, curr) => {\r
  return acc.includes(curr) ? acc : [...acc, curr];\r
}, []);\r
console.log(uniqueArr); // [1, 2, 3, 4, 5]\r
\r
4. for循环\r
const arr = [1, 2, 2, 3, 4, 4, 5];\r
const uniqueArr = [];\r
for (let i = 0; i < arr.length; i++) {\r
  if (uniqueArr.indexOf(arr[i]) === -1) {\r
    uniqueArr.push(arr[i]);\r
  }\r
}\r
console.log(uniqueArr); // [1, 2, 3, 4, 5]\r
\r
5.对象键值法\r
const arr = [1, 2, 2, 3, 4, 4, 5];\r
const obj = {};\r
const uniqueArr = [];\r
for (let i = 0; i < arr.length; i++) {\r
  if (!obj[arr[i]]) {\r
    uniqueArr.push(arr[i]);\r
    obj[arr[i]] = true;\r
  }\r
}\r
console.log(uniqueArr); // [1, 2, 3, 4, 5]\r
\r
6. 对象数组去重\r
const users = [\r
  { id: 1, name: '张三' },\r
  { id: 2, name: '李四' },\r
  { id: 1, name: '张三' }, // 重复\r
  { id: 3, name: '王五' }\r
];\r
// 方法1：使用 Map\r
const uniqueUsers = Array.from(\r
  new Map(users.map(user => [user.id, user])).values()\r
);\r
console.log(uniqueUsers); // 根据id去重\r
\r
// 方法2：使用 reduce\r
const uniqueUsers2 = users.reduce((acc, curr) => {\r
  const exists = acc.find(user => user.id === curr.id);\r
  return exists ? acc : [...acc, curr];\r
}, []);\r
\`\`\`\r
\r
### 15：讲一下闭包\r
\r
闭包就是一个函数能够"记住"并访问它声明时所在的作用域\r
\r
\`\`\`\r
function outer() {\r
  const name = '张三'; // outer函数的局部变量\r
  function inner() {\r
    console.log(name); // inner函数访问了outer的变量\r
  }\r
  return inner;\r
}\r
\r
const closureFunc = outer(); // outer执行完毕\r
closureFunc(); // "张三" - 仍然能访问到name变量\r
\`\`\`\r
\r
**闭包的实际运用**\r
\r
1. 创建私有变量\r
\r
   \`\`\`\r
   function createCounter() {\r
     let count = 0; // 私有变量，外部无法直接访问\r
     \r
     return {\r
       increment: function() {\r
         count++;\r
         return count;\r
       },\r
       decrement: function() {\r
         count--;\r
         return count;\r
       },\r
       getValue: function() {\r
         return count;\r
       }\r
     };\r
   }\r
   \r
   const counter = createCounter();\r
   console.log(counter.getValue()); // 0\r
   console.log(counter.increment()); // 1\r
   console.log(counter.increment()); // 2\r
   console.log(counter.decrement()); // 1\r
   \r
   // 无法直接访问count，达到私有化效果\r
   console.log(counter.count); // undefined\r
   \`\`\`\r
\r
2. 在循环中保存状态\r
\r
   \`\`\`\r
   // 问题：循环中的异步操作\r
   for (var i = 0; i < 3; i++) {\r
     setTimeout(function() {\r
       console.log(i); // 全部输出3，不是预期的0,1,2\r
     }, 100);\r
   }\r
   \r
   // 解决：使用闭包\r
   for (var i = 0; i < 3; i++) {\r
     (function(j) {\r
       setTimeout(function() {\r
         console.log(j); // 正确输出0,1,2\r
       }, 100);\r
     })(i);\r
   }\r
   \r
   // 更简单的解决：使用let\r
   for (let i = 0; i < 3; i++) {\r
     setTimeout(function() {\r
       console.log(i); // 正确输出0,1,2\r
     }, 100);\r
   }\r
   \`\`\`\r
\r
3. 函数工厂\r
\r
   \`\`\`\r
   function createMultiplier(multiplier) {\r
     return function(x) {\r
       return x * multiplier;\r
     };\r
   }\r
   \r
   const double = createMultiplier(2);\r
   const triple = createMultiplier(3);\r
   \r
   console.log(double(5)); // 10\r
   console.log(triple(5)); // 15\r
   \`\`\`\r
\r
4. 模块模式\r
\r
   \`\`\`\r
   const calculator = (function() {\r
     let result = 0; // 私有变量\r
     \r
     return {\r
       add: function(x) {\r
         result += x;\r
         return this;\r
       },\r
       subtract: function(x) {\r
         result -= x;\r
         return this;\r
       },\r
       multiply: function(x) {\r
         result *= x;\r
         return this;\r
       },\r
       getResult: function() {\r
         return result;\r
       },\r
       clear: function() {\r
         result = 0;\r
         return this;\r
       }\r
     };\r
   })();\r
   \r
   console.log(calculator.add(5).multiply(3).getResult()); // 15\r
   \`\`\`\r
\r
**闭包的核心概念：**\r
\r
1. 函数能够访问它被创建时的作用域\r
\r
2. 即使外部函数已经执行完毕\r
\r
3. 内部函数仍然持有对外部作用域的引用\r
\r
**缺点：**\r
\r
1. **内存泄漏** - 如果不及时释放，闭包会一直占用内存\r
2. **性能考虑** - 比普通函数占用更多内存\r
\r
\r
\r
### 16：讲一下防抖和节流\r
\r
**防抖（Debounce）**：事件被触发后，等待一段时间再执行函数。如果在这段时间内事件又被触发，则重新计时。\r
\r
简单理解：等用户"停下来"才执行\r
\r
应用场景：搜索框输入、窗口大小调整\r
\r
\`\`\`js\r
function debounce(func, delay) {\r
  let timeoutId;\r
  \r
  return function(...args) {\r
    // 清除之前的定时器\r
    clearTimeout(timeoutId);\r
    \r
    // 设置新的定时器\r
    timeoutId = setTimeout(() => {\r
      func.apply(this, args);\r
    }, delay);\r
  };\r
}\r
\`\`\`\r
\r
**节流（Throttle）**：在一定时间间隔内，只执行一次函数。\r
\r
简单理解：不管触发多频繁，都按固定频率执行\r
\r
应用场景：滚动事件、鼠标移动事件、按钮频繁点击、\r
\r
\`\`\`js\r
function throttle(func, delay) {\r
  let lastCall = 0;\r
  \r
  return function(...args) {\r
    const now = Date.now();\r
    \r
    if (now - lastCall >= delay) {\r
      lastCall = now;\r
      func.apply(this, args);\r
    }\r
  };\r
}\r
\`\`\`\r
\r
### 17：localStorage、sessionStorage、cookie 的区别\r
\r
| 特性          | localStorage | sessionStorage | cookie           |\r
| :------------ | :----------- | :------------- | :--------------- |\r
| **容量**      | 5MB          | 5MB            | 4KB              |\r
| **生命周期**  | 永久存储     | 会话结束消失   | 可设置过期时间   |\r
| **作用域**    | 同源窗口共享 | 单个标签页私有 | 同源窗口共享     |\r
| **自动发送**  | 不自动发送   | 不自动发送     | 每次请求自动发送 |\r
| **API易用性** | 简单         | 简单           | 复杂             |\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
## 1.4 Vue面试题\r
\r
### 1：vue2和vue3的响应式原理\r
\r
\`\`\`\r
vue2：使用object.defineProperty进行数据劫持，get的时候读取数据，set的时候通知数据更新\r
缺点：1. 无法检测对象属性的添加/删除\r
	 2. 数组变异需要特殊处理\r
	 3. 需要递归遍历所有属性\r
	 \r
vue3：使用Proxy进行代理\r
\r
Vue2的问题：\r
data() {\r
  return {\r
    user: { name: '张三' }\r
  }\r
}\r
// 这不会触发更新：\r
this.user.age = 25;\r
// 需要这样：\r
this.$set(this.user, 'age', 25);\r
\r
Vue3的优势：\r
const state = reactive({ name: '张三' });\r
// 直接添加就响应：\r
state.age = 25; // 自动触发更新\r
\r
总结：Vue3的Proxy比Vue2的defineProperty更强大，能直接监听对象和数组的所有变化。\r
\`\`\`\r
\r
---\r
| 特性         | Vue2                  | Vue3     |\r
| ------------ | --------------------- | -------- |\r
| **实现方式** | Object.defineProperty | Proxy    |\r
| **数组监听** | 需要重写数组方法      | 直接监听 |\r
| **新增属性** | 需要Vue.set           | 直接响应 |\r
| **性能**     | 需要递归遍历          | 惰性监听 |\r
| **代码量**   | 较多                  | 较少     |\r
---\r
\r
### 2：computed和watch的异同？\r
\r
\`\`\`\r
用 Computed 当：需要基于其他数据计算一个新的显示值\r
// 购物车总价计算\r
computed: {\r
  totalPrice() {\r
    return this.items.reduce((sum, item) => {\r
      return sum + item.price * item.quantity;\r
    }, 0);\r
  }\r
}\r
用 Watch 当：数据变化时需要执行某些操作（如API调用、保存数据等）\r
// 搜索框输入防抖\r
watch: {\r
  searchKeyword: {\r
    handler(newVal) {\r
      clearTimeout(this.timer);\r
      this.timer = setTimeout(() => {\r
        this.searchAPI(newVal);\r
      }, 500);\r
    },\r
    immediate: true // 页面加载立即执行一次\r
  }\r
}\r
\`\`\`\r
\r
| 特性         | Computed（计算属性）       | Watch（侦听器）        |\r
| :----------- | :------------------------- | :--------------------- |\r
| **用途**     | 计算新值                   | 监听变化执行操作       |\r
| **返回值**   | 必须返回一个值             | 没有返回值             |\r
| **缓存**     | 有缓存，依赖不变不重新计算 | 无缓存，每次变化都执行 |\r
| **异步**     | 不支持异步                 | 支持异步操作           |\r
| **立即执行** | 默认不立即执行             | 可配置立即执行         |\r
\r
### 3：路由有几种模式？以及应用\r
\r
| 模式         | Hash 模式                                                    | History 模式（需要nginx配置）                     |\r
| :----------- | :----------------------------------------------------------- | :------------------------------------------------ |\r
| **URL 格式** | 带 #                                                         | 不带 #                                            |\r
| **原理**     | 监听 \`hashchange\` 事件                                       | 使用 HTML5 History API（pushState, replaceState） |\r
| **优点**     | 兼容性好； 不需要服务器配置；不会向服务器发送 \`#\` 后面的路由信息 | URL 更美观；SEO 更友好                            |\r
\r
### 4：vue2和vue3的生命周期：\r
\r
| Vue2                                             | Vue3 (Composition API)  |\r
| :----------------------------------------------- | :---------------------- |\r
| beforeCreate  实例刚创建，数据观测和事件配置之前 |                         |\r
| created  实例创建完成，数据观测完成，但DOM未生成 |                         |\r
| beforeMount  模板编译/挂载之前                   | onBeforeMount  挂载前   |\r
| mounted  模板编译/挂载完成（DOM已生成）          | onMounted  挂载完成     |\r
| beforeUpdate  数据更新时，虚拟DOM重新渲染之前    | onBeforeUpdate  更新前  |\r
| updated  数据更新后，虚拟DOM重新渲染完成         | onUpdated  更新完成     |\r
| beforeDestroy  实例销毁之前                      | onBeforeUnmount  销毁前 |\r
| destroyed  实例销毁后                            | onUnmounted  销毁后     |\r
\r
### 5：一旦进入页面会执行哪些生命周期？\r
\r
\`\`\`\r
beforeCreate、created、beforeMount、mounted\r
\`\`\`\r
\r
### 6：如果父组件引入子组件，那么生命周期的执行顺序是什么？\r
\r
\`\`\`\r
先执行父页面的前三个生命周期：beforeCreate、created、beforeMount\r
然后执行子组件 * N个的前四个生命周期：beforeCreate、created、beforeMount、mounted\r
最后执行父页面的第四个个生命周期：mounted\r
\`\`\`\r
\r
### 7：MVVM是什么？\r
\r
\`\`\`\r
MVVM = Model-View-ViewModel，是一种前端架构模式。\r
Model（模型）-数据层————View（视图）-界面层————ViewModel（视图模型）-连接层\r
总结：Vue 通过 MVVM 模式实现了数据与视图的自动同步，让开发者只需关注数据变化，不用手动操作DOM，大大提升了开发效率。\r
\`\`\`\r
\r
### 8：Vue2和Vue3的双向绑定原理\r
\r
\`\`\`\r
双向绑定是什么：\r
  数据变化 → 视图自动更新\r
  视图变化（用户输入） → 数据自动更新\r
Vue2 双向绑定原理：objectDefinProperty + 发布订阅模式\r
  数据劫持 - 使用 Object.defineProperty 监听数据变化\r
  依赖收集 - 收集哪些地方用到了这个数据\r
  派发更新 - 数据变化时通知所有依赖更新\r
Vue3 双向绑定原理核心：Proxy + Reflect\r
  数据代理 - 使用 Proxy 代理整个对象\r
  依赖追踪 - 建立响应式依赖关系\r
  触发更新 - 数据变化时触发相应更新\r
  \r
总结：\r
思想一样：都是数据劫持 + 发布订阅模式\r
实现不同：Vue2用Object.defineProperty，Vue3用Proxy\r
\`\`\`\r
\r
| 特性         | Vue2                  | Vue3             |\r
| :----------- | :-------------------- | :--------------- |\r
| **实现方式** | Object.defineProperty | Proxy            |\r
| **监听范围** | 需要遍历每个属性      | 直接监听整个对象 |\r
| **数组监听** | 需要重写数组方法      | 直接监听数组变化 |\r
| **新增属性** | 需要Vue.set           | 自动响应         |\r
| **性能**     | 需要递归初始化        | 惰性监听         |\r
\r
### 9：如何在 Vue 3 中创建一个响应式对象？\r
\r
\`\`\`\r
使用realtive()创建\r
const user = reactive({\r
    name: 'Alice',\r
    age: 25\r
});\r
\`\`\`\r
\r
### 10：ref() 和 reactive() 的区别？\r
\r
\`\`\`\r
ref适用于基本类型或者单个值，ref定义的值必须使用.value，reactive不用\r
reactive适用于对象或者复杂结构\r
\`\`\`\r
\r
### 11：Vue 3 中如何监听数据变化？\r
\r
| watchEffect                | watch                          |\r
| :------------------------- | :----------------------------- |\r
| 自动追踪依赖并执行副作用。 | 手动指定监听的目标。           |\r
| 可以自动收集数据源作为依赖 | 需要传入监听的数据源           |\r
| 只能获取改变后的值         | 可以访问到改变之前和之后的值   |\r
| 运行后即可执行             | watch通过添加immediate立即执行 |\r
\r
### 12： Vue 3 中如何进行父子组件通信？\r
\r
\`\`\`vue\r
// 子组件 Child.vue\r
export default {\r
    props: ['title'],\r
    emits: ['update'],\r
    setup(props, { emit }) {\r
        function handleClick() {\r
            emit('update', 'New Value');\r
        }\r
    return { handleClick };\r
};\r
\r
// 父组件 Parent.vue\r
<template>\r
<Child :title="msg" @update="handleUpdate" />\r
</template>\r
\r
<script>\r
import Child from './Child.vue';\r
\r
export default {\r
	components: { Child },\r
    data() {\r
        return {\r
            msg: 'Hello'\r
        };\r
	},\r
    methods: {\r
        handleUpdate(value) {\r
        	console.log('收到更新:', value);\r
        }\r
    }\r
};\r
<\/script>\r
\`\`\`\r
\r
### 13：Vue 3 的 setup() 函数的作用是什么？\r
\r
\`\`\`\r
setup() 是 Vue 3 Composition API 的入口函数。\r
替代 Vue 2 中的 data、methods、computed 等选项。\r
更好地组织逻辑复用和模块化代码。\r
\`\`\`\r
\r
### 14：Vue 3 中如何使用插槽（Slot）？\r
\r
\`\`\`\r
<!-- 父组件 -->\r
<template>\r
    <Card>\r
        <template #default>这是默认插槽内容</template>\r
        <template #header>这是头部插槽</template>\r
    </Card>\r
</template>\r
\r
<!-- 子组件 Card.vue -->\r
<template>\r
    <div class="card">\r
        <header><slot name="header"></slot></header>\r
        <main><slot></slot></main>\r
    </div>\r
</template>\r
\`\`\`\r
\r
### 15：provide() 和 inject() 的作用是什么？\r
\r
\`\`\`\r
用于祖先组件向后代组件注入依赖，不通过 props 逐层传递。\r
// 祖先组件\r
import { provide, ref } from 'vue';\r
export default {\r
    setup() {\r
        const theme = ref('dark');\r
        provide('theme', theme);\r
        return { theme };\r
    }\r
};\r
// 后代组件\r
import { inject } from 'vue';\r
export default {\r
    setup() {\r
        const theme = inject('theme');\r
        return { theme };\r
    }\r
};\r
\`\`\`\r
\r
### 16：Vue 3 中如何实现自定义指令？\r
\r
\`\`\`\r
// main.js\r
import { createApp } from 'vue';\r
import App from './App.vue';\r
\r
const app = createApp(App);\r
\r
app.directive('highlight', {\r
    mounted(el) {\r
    el.style.backgroundColor = '#f0e68c';\r
    }\r
});\r
\r
app.mount('#app');\r
\`\`\`\r
\r
### 17：vue和pinia的区别是什么？\r
\r
Vuex：state、mutations、actions、getters\r
\r
| Vuex                           | Pinia                                                   |\r
| ------------------------------ | ------------------------------------------------------- |\r
| vue官方提供的状态管理库        | vite团队创建的状态管理库                                |\r
| 基于mutation的同步操作改变状态 | 基于函数式API的方式，更接近Vue3的composition API        |\r
| 提供了actions来处理异步操作    | 鼓励使用响应式的方式改变状态                            |\r
| 使用单一的全局状态树           | 直接在组件中使用函数改变状态                            |\r
| 使用模块化组织状态             | 支持多个状态树（store）,每个store可以独立维护自己的状态 |\r
\r
\`\`\`\r
Vuex写法\r
export default new Vuex.Store({\r
  state: {\r
    count: 0,\r
    user: null\r
  },\r
  mutations: {\r
    SET_COUNT(state, payload) {\r
      state.count = payload;\r
    },\r
    SET_USER(state, payload) {\r
      state.user = payload;\r
    }\r
  },\r
  actions: {\r
    updateCount({ commit }, newCount) {\r
      commit('SET_COUNT', newCount);\r
    },\r
    async fetchUser({ commit }) {\r
      const user = await api.getUser();\r
      commit('SET_USER', user);\r
    }\r
  },\r
  getters: {\r
    doubleCount: state => state.count * 2\r
  }\r
});\r
\r
// 组件中使用\r
this.$store.state.count;\r
this.$store.getters.doubleCount;\r
this.$store.dispatch('updateCount', 10);\r
\`\`\`\r
\r
#### 17.1：访问 State（状态）\r
\r
\`\`\`\r
// 在组件中访问状态\r
computed: {\r
  count() {\r
    return this.$store.state.count;\r
  },\r
  // 使用 mapState 辅助函数\r
  ...mapState(['count', 'user']),\r
  ...mapState({\r
    // 重命名\r
    currentCount: state => state.count\r
  })\r
}\r
<!-- 在模板中使用 -->\r
<div>计数: {{ count }}</div>\r
<div>用户名: {{ $store.state.user.name }}</div>\r
\`\`\`\r
\r
#### 17.2：触发 Mutations（同步修改）\r
\r
\`\`\`\r
methods: {\r
  increment() {\r
    this.$store.commit('INCREMENT', 10);\r
  },\r
  // 使用 mapMutations 辅助函数\r
  ...mapMutations(['INCREMENT', 'SET_USER']),\r
  ...mapMutations({\r
    add: 'INCREMENT' // 将 \`this.add()\` 映射为 \`this.$store.commit('INCREMENT')\`\r
  })\r
}\r
\`\`\`\r
\r
#### 17.3：触发 Actions（异步操作）\r
\r
\`\`\`\r
methods: {\r
  fetchUser() {\r
    this.$store.dispatch('fetchUser', userId);\r
  },\r
  // 使用 mapActions 辅助函数\r
  ...mapActions(['fetchUser', 'login']),\r
  ...mapActions({\r
    getUser: 'fetchUser' // 将 \`this.getUser()\` 映射为 \`this.$store.dispatch('fetchUser')\`\r
  })\r
}\r
\`\`\`\r
\r
#### 17.4：使用 Getters（计算属性）\r
\r
\`\`\`\r
computed: {\r
  doubleCount() {\r
    return this.$store.getters.doubleCount;\r
  },\r
  // 使用 mapGetters 辅助函数\r
  ...mapGetters(['doubleCount', 'isLoggedIn'])\r
}\r
\`\`\`\r
\r
#### 17.5 Vuex 的应用场景：用户登录状态管理\r
\r
\`\`\`js\r
// store.js\r
state: {\r
  user: null,\r
  token: ''\r
},\r
mutations: {\r
  SET_USER(state, user) {\r
    state.user = user;\r
  },\r
  SET_TOKEN(state, token) {\r
    state.token = token;\r
  }\r
},\r
actions: {\r
  login({ commit }, credentials) {\r
    return api.login(credentials).then(res => {\r
      commit('SET_USER', res.user);\r
      commit('SET_TOKEN', res.token);\r
    });\r
  },\r
  logout({ commit }) {\r
    commit('SET_USER', null);\r
    commit('SET_TOKEN', '');\r
  }\r
},\r
getters: {\r
  isLoggedIn: state => !!state.token\r
}\r
\r
\r
// 组件中使用\r
computed: {\r
  ...mapGetters(['isLoggedIn']),\r
  ...mapState(['user'])\r
},\r
methods: {\r
  ...mapActions(['login', 'logout'])\r
}\r
\`\`\`\r
\r
### 18：assd\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
### 11：\r
\r
\r
\r
\r
\r
\r
\r
## 1.5 微信小程序面试题\r
\r
### 1：小程序的生命周期有哪些?\r
\r
\`\`\`\r
应用维度：\r
	onLauach：小程序初次加载后执行\r
	onShow：小程序启动/从后台进入前台时触发\r
	onHide：小程序从前台离开进入后台触发\r
页面维度：\r
	onLoad\r
	onShow\r
	onReady\r
	onHide\r
	onUnload\r
组件维度：\r
	created：组件实例创建时触发\r
	attached：组件进入页面节点树时触发，用于初始化操作\r
	ready：组件视图层布局完成后触发，但可能延迟执行\r
	detached：组件从页面节点树移除时触发，用于资源清理\r
	error：组件方法抛出错误时触发，用于错误处理\r
\`\`\`\r
\r
### 2：小程序页面之间传值的方法：\r
\r
\`\`\`\r
父传子：父组件在子组件标签上定义属性并传值，通过prop传递\r
子传父：子组件通过 this.triggerEvent 触发自定义事件并传值，父组件通过bind:事件名接收\r
\`\`\`\r
\r
### 3：谈谈你对rpx的理解：\r
\r
\`\`\`\r
rpx是小程序专用的单位，它能根据屏幕宽度自动调整大小，实现不同屏幕上的适配。\r
核心理解：\r
    规定：屏幕总宽度 = 750rpx\r
    无论什么手机，屏幕宽度都是750rpx\r
    rpx 会等比例缩放，在不同宽度的手机上显示合适的大小\r
\`\`\`\r
\r
### 4：如何实现一个简单的拖拽排序？\r
\r
\`\`\`\r
答：用 触摸事件 和 动态样式 实现拖拽排序，\r
核心思路：\r
1. 给每个列表项绑定触摸事件\r
2. 触摸开始时记录位置，触摸移动时更新位置\r
3. 根据移动位置判断是否需要交换顺序\r
\r
核心原理：\r
1. touchstart 记录开始位置和当前项\r
2. touchmove 实时更新位置并判断是否要交换\r
3. touchend 重置状态完成排序\r
4. 用 transform: translateY 实现平滑移动效果\r
\`\`\`\r
\r
Html：\r
\r
\`\`\`html\r
<view class="list">\r
  <view \r
    wx:for="{{list}}" \r
    wx:key="id"\r
    class="item {{currentIndex === index ? 'active' : ''}}"\r
    data-index="{{index}}"\r
    bindtouchstart="onTouchStart"\r
    bindtouchmove="onTouchMove"\r
    bindtouchend="onTouchEnd"\r
    style="transform: translateY({{item.translateY}}px);"\r
  >\r
    {{item.name}}\r
  </view>\r
</view>\r
\`\`\`\r
\r
Js：\r
\r
\`\`\`js\r
Page({\r
  data: {\r
    list: [\r
      {id: 1, name: '项目1', translateY: 0},\r
      {id: 2, name: '项目2', translateY: 0},\r
      {id: 3, name: '项目3', translateY: 0}\r
    ],\r
    startY: 0,        // 触摸起始位置\r
    currentIndex: -1, // 当前拖拽项索引\r
    itemHeight: 50    // 每项高度\r
  },\r
\r
  // 触摸开始\r
  onTouchStart(e) {\r
    const index = e.currentTarget.dataset.index\r
    const startY = e.touches[0].clientY\r
    \r
    this.setData({\r
      currentIndex: index,\r
      startY: startY\r
    })\r
  },\r
\r
  // 触摸移动\r
  onTouchMove(e) {\r
    if (this.data.currentIndex === -1) return\r
    \r
    const currentY = e.touches[0].clientY\r
    const moveY = currentY - this.data.startY\r
    \r
    // 更新当前项位置\r
    const list = this.data.list\r
    list[this.data.currentIndex].translateY = moveY\r
    this.setData({ list })\r
    \r
    // 判断是否需要交换位置\r
    const moveIndex = Math.round(moveY / this.data.itemHeight)\r
    const newIndex = this.data.currentIndex + moveIndex\r
    \r
    if (newIndex >= 0 && newIndex < list.length && newIndex !== this.data.currentIndex) {\r
      // 交换数据顺序\r
      this.swapItems(this.data.currentIndex, newIndex)\r
    }\r
  },\r
\r
  // 触摸结束\r
  onTouchEnd() {\r
    // 重置所有项的位置\r
    const list = this.data.list\r
    list.forEach(item => item.translateY = 0)\r
    \r
    this.setData({\r
      list: list,\r
      currentIndex: -1\r
    })\r
  },\r
\r
  // 交换项目位置\r
  swapItems(fromIndex, toIndex) {\r
    const list = this.data.list\r
    const temp = list[fromIndex]\r
    list[fromIndex] = list[toIndex]\r
    list[toIndex] = temp\r
    \r
    this.setData({ list })\r
  }\r
})\r
\`\`\`\r
\r
Css：\r
\r
\`\`\`css\r
.item {\r
  height: 50px;\r
  line-height: 50px;\r
  border: 1px solid #eee;\r
  margin: 5px;\r
  transition: transform 0.2s; /* 平滑过渡 */\r
  background: white;\r
}\r
.active {\r
  background: #f0f0f0;\r
  z-index: 999; /* 拖拽时在最上层 */\r
}\r
\`\`\`\r
\r
### 5：微信小程序里创建动画应该怎么实现？\r
\r
使用 wx.createAnimation：\r
\r
\`\`\`html\r
<view class="box" animation="{{animationData}}"></view>\r
<button bindtap="startAnimation">开始动画</button>\r
\`\`\`\r
\r
\`\`\`js\r
Page({\r
  data: {\r
    animationData: {}\r
  },\r
  \r
  startAnimation: function() {\r
    // 1. 创建动画实例\r
    const animation = wx.createAnimation({\r
      duration: 1000,        // 动画时长1秒\r
      timingFunction: 'ease' // 缓动函数\r
    })\r
    \r
    // 2. 描述动画过程\r
    animation.translateX(100).rotate(45).step()  // 第一步：右移100px并旋转45度\r
    animation.translateY(50).scale(2).step()     // 第二步：下移50px并放大2倍\r
    \r
    // 3. 导出动画数据\r
    this.setData({\r
      animationData: animation.export()\r
    })\r
  }\r
})\r
\`\`\`\r
\r
\`\`\`css\r
.box {\r
  width: 100rpx;\r
  height: 100rpx;\r
  background: red;\r
}\r
\`\`\`\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};