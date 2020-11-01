class Either {
  static of(x) {
    return new Right(x)
  }

  constructor(x) {
    this.$value = x
  }
}

class Left extends Either {
  map(f) {
    return this
  }

  inspect() {
    return `Left`
  }

  isLeft() {
    return true
  }
}

class Right extends Either {
  map(f) {
    return Either.of(f(this.$value))
  }

  inspect() {
    return `Right`
  }

  isLeft() {
    return false
  }
}

const left = (x) => new Left(x)

function curry(fn) {
  const arity = fn.length

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args)
    }

    return fn.call(null, ...args)
  }
}

const either = curry((f, g, e) => {
  let result

  switch (e.constructor) {
    case Left:
      result = f(e.$value)
      break

    case Right:
      result = g(e.$value)
      break
  }

  return result
})

module.exports = {
  Either,
  Left,
  Right,
  left,
  either,
}
