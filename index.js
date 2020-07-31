'use strict';

function Once(middleware) {

    let done = false;

    return async (ctx, next) => {
        
        if (done) {
            return await next();
        } else {
            done = true;
            return await middleware(ctx, next);
        }
    };
}

module.exports = Once;
