module.exports = catchAsync = func => {
    return (req, res, next) => {
        return func(req, res, next).then(next());
    }
}