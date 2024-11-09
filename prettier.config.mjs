export default {
  printWidth: 100, // 每行代码长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格而不是tab缩进
  semi: false, // 句末使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的key仅在必要时用引号
  jsxSingleQuote: false, // jsx中使用双引号
  trailingComma: 'es5', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 对象字面量的大括号间使用空格
  bracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾
  arrowParens: 'avoid', // 箭头函数只有单个参数时省略括号
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被prettier格式化的文件顶部加上标注
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定html要不要折行
  endOfLine: 'lf', // 换行符使用 lf
embeddedLanguageFormatting: 'auto' // 格式化嵌入的内容
};
