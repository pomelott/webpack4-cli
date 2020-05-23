const {
    series,
    src,
    dest,
    task
  } = require('gulp');
  const imagemin = require('gulp-imagemin');
  const smushit = require('gulp-smushit');
  const tinypng_nokey = require('gulp-tinypng-nokey');
  task('minImg', function () {
    return src('dist/images/**/*.*')
        // 脚本压缩
        // .pipe(imagemin([
        //     // imagemin.gifsicle({interlaced: true}),
        //     imagemin.mozjpeg({quality: 75, progressive: true}),
        //     imagemin.optipng({optimizationLevel: 5}),
        //     imagemin.svgo({
        //         plugins: [
        //             {removeViewBox: true},
        //             {cleanupIDs: false}
        //         ]
        //     })
        // ]))
        // 在线压缩，压缩率较高但需要翻墙且图片格式有限制
        // .pipe(smushit({
        //     verbose: true
        // }))
        // 在线压缩
        .pipe(tinypng_nokey())
        .pipe(dest('dist/images'))
  
  })
  
  // function minImg (cb) {
  //   src('../build/static/images/bg.png')
  //         .pipe(imageMin({progressive: true}))
  //         .pipe(dest('../build/dest/images'))
  //   Promise.resolve(true);
  // }
  
  task('minImg')