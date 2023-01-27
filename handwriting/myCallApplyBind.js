Function.prototype.myCall = function (ctx, ...args) {
  if (typeof ctx === 'object') {
    ctx = ctx || window
  } else {
    ctx = Object.create(null)
  }
  // 注意细节，用symbol
  let fn = Symbol()
  // 关键一步
  ctx[fn] = this
  ctx[fn](...args)

  delete ctx[fn]
}

Function.prototype.myApply = function (ctx, args) {
  if (typeof ctx === 'object') {
    ctx = ctx || window
  } else {
    ctx = Object.create(null)
  }
  let fn = Symbol()
  // 关键一步
  ctx[fn] = this
  ctx[fn](...args)

  delete ctx[fn]
}

Function.prototype.myBind = function (ctx, ...innerargs) {
  let me = this
  return function (...finalargs) {
    return me.call(ctx, ...innerargs, ...finalargs)
  }
}

let fn = function (name, sex) {
  console.log(this, name, sex)
}

fn.myCall('', '前端胖头鱼', 'boy'),
fn.myCall({ name: '前端胖头鱼', sex: 'boy' }, '前端胖头鱼', 'boy')


Function.prototype.mCall = function (obj, ...args) {
  let fn = Symbol()
  obj[fn] = this
  let res = obj[fn](...args)
  delete obj[fn]
  return res
}

Function.prototype.mBind = function (obj, ...args) {
  let me = this
  return function () {
    return me.call(obj, ...args)
  }
}