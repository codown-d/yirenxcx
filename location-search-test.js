// 位置搜索功能测试示例
// 注意：这是一个测试文件，用于验证功能，实际项目中不需要此文件

import { 
  searchLocations, 
  findLocationByValue, 
  fuzzySearchLocations, 
  getHotCities 
} from './src/constant/locations.ts'

console.log('=== 位置搜索功能测试 ===\n')

// 测试1：基础搜索功能
console.log('1. 测试基础搜索功能')
console.log('搜索关键词："北京"')
const beijingResults = searchLocations('北京')
console.log(`找到 ${beijingResults.length} 个结果:`)
beijingResults.forEach((result, index) => {
  console.log(`  ${index + 1}. ${result.fullPath} (${result.level})`)
})
console.log()

// 测试2：搜索区县
console.log('2. 测试区县搜索')
console.log('搜索关键词："朝阳"')
const chaoyangResults = searchLocations('朝阳')
console.log(`找到 ${chaoyangResults.length} 个结果:`)
chaoyangResults.slice(0, 5).forEach((result, index) => {
  console.log(`  ${index + 1}. ${result.fullPath} (${result.level})`)
})
if (chaoyangResults.length > 5) {
  console.log(`  ... 还有 ${chaoyangResults.length - 5} 个结果`)
}
console.log()

// 测试3：根据编码查找
console.log('3. 测试根据编码查找')
const testCodes = ['11', '1101', '110105', '31', '3101', '310101']
testCodes.forEach(code => {
  const result = findLocationByValue(code)
  if (result) {
    console.log(`  编码 ${code}: ${result.fullPath} (${result.level})`)
  } else {
    console.log(`  编码 ${code}: 未找到`)
  }
})
console.log()

// 测试4：智能搜索
console.log('4. 测试智能搜索（限制5个结果）')
console.log('搜索关键词："海"')
const haiResults = fuzzySearchLocations('海', 5)
console.log(`找到 ${haiResults.length} 个结果:`)
haiResults.forEach((result, index) => {
  const matchedName = result.district?.label || result.city?.label || result.province.label
  console.log(`  ${index + 1}. ${result.fullPath} (匹配: ${matchedName})`)
})
console.log()

// 测试5：热门城市
console.log('5. 测试热门城市')
const hotCities = getHotCities()
console.log(`热门城市列表 (${hotCities.length} 个):`)
hotCities.forEach((city, index) => {
  console.log(`  ${index + 1}. ${city.city?.label || city.province.label}`)
})
console.log()

// 测试6：不区分大小写搜索
console.log('6. 测试不区分大小写搜索')
const caseTests = ['beijing', 'SHANGHAI', 'GuangZhou']
caseTests.forEach(keyword => {
  const results = searchLocations(keyword)
  console.log(`  搜索 "${keyword}": 找到 ${results.length} 个结果`)
})
console.log()

// 测试7：空值和边界情况
console.log('7. 测试边界情况')
const edgeCases = ['', '   ', 'xyz123', '不存在的城市']
edgeCases.forEach(keyword => {
  const results = searchLocations(keyword)
  console.log(`  搜索 "${keyword}": 找到 ${results.length} 个结果`)
})
console.log()

// 测试8：性能测试
console.log('8. 性能测试')
const performanceTest = () => {
  const startTime = Date.now()
  const iterations = 1000
  
  for (let i = 0; i < iterations; i++) {
    searchLocations('北京')
  }
  
  const endTime = Date.now()
  const avgTime = (endTime - startTime) / iterations
  console.log(`  执行 ${iterations} 次搜索，平均耗时: ${avgTime.toFixed(2)}ms`)
}
performanceTest()
console.log()

// 测试9：实际使用场景模拟
console.log('9. 实际使用场景模拟')

// 模拟用户输入搜索
const simulateUserSearch = (input) => {
  console.log(`  用户输入: "${input}"`)
  const results = fuzzySearchLocations(input, 3)
  if (results.length > 0) {
    console.log('    推荐结果:')
    results.forEach((result, index) => {
      console.log(`      ${index + 1}. ${result.fullPath}`)
    })
  } else {
    console.log('    未找到匹配结果')
  }
  console.log()
}

const userInputs = ['北', '上海', '深圳', '成都', '西安']
userInputs.forEach(simulateUserSearch)

// 模拟地址验证
console.log('10. 地址验证模拟')
const validateAddress = (provinceCode, cityCode, districtCode) => {
  const province = findLocationByValue(provinceCode)
  const city = findLocationByValue(cityCode)
  const district = findLocationByValue(districtCode)
  
  console.log(`  验证地址: ${provinceCode}-${cityCode}-${districtCode}`)
  
  if (province && city && district) {
    console.log(`    ✅ 有效地址: ${district.fullPath}`)
  } else {
    console.log(`    ❌ 无效地址`)
    if (!province) console.log(`      省份编码无效: ${provinceCode}`)
    if (!city) console.log(`      城市编码无效: ${cityCode}`)
    if (!district) console.log(`      区县编码无效: ${districtCode}`)
  }
  console.log()
}

// 测试一些地址编码
validateAddress('11', '1101', '110105') // 北京市朝阳区
validateAddress('31', '3101', '310101') // 上海市黄浦区
validateAddress('44', '4401', '440103') // 广州市荔湾区
validateAddress('99', '9999', '999999') // 无效编码

console.log('=== 测试完成 ===')

// 导出测试函数，供其他地方使用
export {
  simulateUserSearch,
  validateAddress
}
