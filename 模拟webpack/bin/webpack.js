#!/usr/bin/env node

const path = require('path');
const argv = require('yargs').argv;
const webpack = require('../lib/webpack');

//参数处理
let options = {};
let nonHyphenatedOptions = argv._;
if (!nonHyphenatedOptions.length) {
    // 无任何参数
    return;
}

// 第一个参数,指定入口js文件
options.input = path.join(process.cwd(), nonHyphenatedOptions[0]);

// 上下文,入口js文件所在目录
options.context = path.dirname(options.input);

// 第二个参数,指定出口js文件
if (nonHyphenatedOptions.length === 1) {
    options.output = path.join(options.context, 'output.js');
} else {
    let output = nonHyphenatedOptions[1];
    if (path.isAbsolute(output)) {
        options.output = output
    } else {
        options.output = path.join(options.context, output)
    }
}

webpack(options.input, options);


