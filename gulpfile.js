const {src,dest,parallel,} = require('gupl');
const copyAll = () =>{
    return src('dist/scss/*.scss')
    .pipe(dest('build/styles'));
}

const images = () =>{
    return console.log("Готово");
};
exports.default = parallel(copyAll,images);