# 唐晓萌 | part1 | 模块1
作业1

1.打印结果为10，因为这里的i是用var申明的，var会变量提升，var并不是块级作用域。

2.这里会报错，因为在if这个块级作用域里面，let是在console.log下面定义的，let不会像var一样提升变量，所以这里会报错

3.Math.min(...arr)

4.
a.var会有变量提升，而let，const则没有
b.var没有块级作用域
c.var声明的变量会挂载在window上
d.var可以声明相同的变量，let const不行
e.const的值声明之后就不能更改

5.结果为20    原因：首先在箭头函数里没有this的指向问题，箭头函数的this指向上一个函数的作用域。这里的this上一个函数是fn(),而fn又是被obj调用，所以fn的执行环境是obj,所以结果为20

6.Symbol是指一个独一无二的变量。在对象中，对象的key值会自动toString转化一下，如果key值有object对象的话，会被toString统一转化成[object object]，这样的话不管是什么不同的对象名，最后都叫[object object]，所以涉及到key为对象的时候，需要用到symbol

7.
浅拷贝会让两个值指向同一个堆内存地址，改变这两个值中任意一个值，会导致另一个值也发生变化，浅复制只会将对象的各个属性进行依次复制。
深拷贝是指开辟一个新的内存地址，将原对象的各个属性逐个复制进去，对拷贝对象和源对象各自的操作互不影响。它不仅将原对象的各个属性逐个复制出去，而且将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。

8.执行栈：函数执行的主进程，当前执行的同步代码都会被放进执行栈中依次执行。
同步代码按顺序执行过程中，如果遇到了异步代码，则将异步代码挂载到异步代码处理模块中，然后继续执行下面的同步代码。
当执行栈中的同步代码执行完毕之后，事件轮询（even loop）则去任务队列中查看是否有待执行的任务，如果有的话就将它压入执行栈中执行，执行完毕之后再去查找任务队列，看是否有任务待执行。（任务队列分为微任务和宏任务队列两种，事件轮序会先去微任务队列找，微任务执行完毕再去宏任务队列找）
与此同时，异步处理模块中，若达到触发条件（比如settimeout计时结束，或者ajax有返回值等），则被压入任务队列中去。

微任务包括：process.nextTick  MutationObserver   Promise.then catch finally
宏任务包括：计时器，requestAnimationFrame

9.`Promise.resolve('hello').then(res => res + 'lagou').then(res => res+'love').then(res => console.log(res))`

10.ts相当于js的一个超集，ts包括了js，类型判断，以及es6，ts最终会输出成为js

11.
优点：增加了代码的可读性，可维护性。让代码更加严格，多人开发降低错误率。ts是一个渐进式的语言，可以边学边用，它支持js。
缺点：学习成本大，对于小项目而言用ts则大大增加了项目的开发成本。