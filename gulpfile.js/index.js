const {
    series,
    src,
    dest,
    task
} = require('gulp');
const imagemin = require('gulp-imagemin');
const {logger} = require('../config/tools/logger')
const smushit = require('gulp-smushit');
const tinypng_nokey = require('gulp-tinypng-nokey');
// 通过使用缓存提高压缩速度
const cache = require('gulp-cache');
logger.info('gulp: starting minify images...')
// 压缩实在webpack build执行完之后进行的，即便压缩失败也不会影响webpack打包
task('minifyImg', function () {
    return src('dist/images/**/*.*')
        // 脚本压缩 gifsicle 等插件很容易下载失败，需要确保插件下载成功 特别注意【国内最好用cnpm】
        .pipe(
            cache(
                imagemin([
                    imagemin.gifsicle({interlaced: true}),
                    imagemin.mozjpeg({quality: 75, progressive: true}),
                    imagemin.optipng({optimizationLevel: 5}),
                    imagemin.svgo({
                        plugins: [
                            {removeViewBox: true},
                            {cleanupIDs: false}
                        ]
                    })
                ], {
                    verbose: true
                })
            )
        )
        // 在线压缩，压缩率较高但需要翻墙且图片格式有限制
        // .pipe(
        //     cache(
        //         smushit({
        //             verbose: true
        //         })
        //     )
        // )
        // 在线压缩
        // .pipe(
            // cache(
                // tinypng_nokey()
            // )
        // )
        .pipe(dest('dist/images'))
        

})

task('minifyImg')
