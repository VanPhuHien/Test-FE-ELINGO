// File rác dùng để tạo mã nguồn trùng lặp (Duplicated Code) kiểm thử SonarQube Quality Gate

export function calculateDuplicatedDataBlockOne(data) {
  let result = 0
  if (!data || data.length === 0) return result
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      result += data[i] * 2
    } else {
      result += data[i] * 3
    }
    console.log('Processing item at index:', i, 'Current value:', result)
  }
  return result
}

export function calculateDuplicatedDataBlockTwo(data) {
  let result = 0
  if (!data || data.length === 0) return result
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      result += data[i] * 2
    } else {
      result += data[i] * 3
    }
    console.log('Processing item at index:', i, 'Current value:', result)
  }
  return result
}

export function calculateDuplicatedDataBlockThree(data) {
  let result = 0
  if (!data || data.length === 0) return result
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      result += data[i] * 2
    } else {
      result += data[i] * 3
    }
    console.log('Processing item at index:', i, 'Current value:', result)
  }
  return result
}

export function calculateDuplicatedDataBlockFour(data) {
  let result = 0
  if (!data || data.length === 0) return result
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      result += data[i] * 2
    } else {
      result += data[i] * 3
    }
    console.log('Processing item at index:', i, 'Current value:', result)
  }
  return result
}
