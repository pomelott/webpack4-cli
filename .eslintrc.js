module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "vue"
    ],
    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
                                             // default to "createReactClass"
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "detect", // React version. "detect" automatically picks the version you have installed.
                               // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                               // default to latest and warns if missing
                               // It will default to "detect" in the future
          "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
          "Hyperlink",
          {"name": "Link", "linkAttribute": "to"}
        ]
      },
    "rules": {
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-unused-vars": 1,
        "no-console": 1,
        "semi": [1, "always"],
        "comma-dangle": [2, "never"], //定义数组或对象最后多余的逗号
        "no-constant-condition": 2, //常量作为条件
        "no-dupe-args": 2, //参数重复
        "no-dupe-keys": 2, //对象属性重复
        "no-duplicate-case": 2, //case重复
        "no-empty-character-class": 2, //正则无法匹配任何值
        "no-invalid-regexp": 2, //无效的正则
        "no-func-assign": 2, //函数被赋值
        "valid-typeof": 2, //无效的类型判断
        "no-unreachable": 2, //不可能执行到的代码
        "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
        "no-sparse-arrays": 2, //数组中多出逗号
        "no-shadow-restricted-names": 2, //关键词与命名冲突
        "no-undef": 0, //变量未定义        
        "no-native-reassign": 2, //禁止覆盖原生对象
        "block-scoped-var": 2, //变量定义后未使用
        // code style
        "key-spacing": [1, { "beforeColon": false, "afterColon": true }],
        "curly": 2 ,//if、else、while、for代码块用{}包围
        "no-void": 2, //禁用void
        "no-with": 2, //禁用with
        "no-sequences": 2, //禁止可能导致结果不明确的逗号操作符
        "no-throw-literal": 2, //禁止抛出一个直接量 应是Error对象
        "no-return-assign": [2, "always"], //不允return时有赋值操作
        "no-redeclare": [2, { "builtinGlobals": true }], //不允许重复声明
        "no-new-func": 2, //禁止new Function(...) 写法
        // react
        "react/jsx-uses-vars": 2,
    }
};