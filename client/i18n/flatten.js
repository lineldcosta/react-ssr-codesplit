let flatten = json => {
  let result = {}
  Object.getOwnPropertyNames(json).forEach(name => {
    let v = json[name]
    if (typeof v === 'string') {
      result[name] = v
    } else {
      let nested = flatten(v)
      Object.getOwnPropertyNames(nested).forEach(n => {
        result[`${name}.${n}`] = nested[n]
      })
    }
  })
  return result
}

export default flatten
