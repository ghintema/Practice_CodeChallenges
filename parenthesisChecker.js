const parenthesisChecker = (x) => {

    const openStack = [];
            for (let i = 0; i < x.length; i++) {
                // register all openings
                if (x[i] === '(') {
                    openStack.push(1);
                } else if (x[i] === '['){
                    openStack.push(2);
                } else if (x[i] === '{') {
                    openStack.push(3);
                }
                
                // check on all closings wether there is an opening counter-part
                if (x[i] === ')') {
                    if (openStack[openStack.length - 1 ] === 1) {
                        openStack.pop();
                    } else {
                        return false;
                    }
                } else if (x[i] === ']') {
                    if (openStack[openStack.length - 1 ] === 2 ) {
                        openStack.pop();   
                    } else {
                        return false;
                    }
                        
                } else if (x[i] === '}') {
                    if (openStack[openStack.length - 1 ] === 3 ) {
                        openStack.pop();   
                    } else {
                        return false;
                    }
                        
                }
            }
            if (openStack.length > 0) {
                return false;
            } else {
                return true;
            }
}

console.log(parenthesisChecker(']{[()]}'))
console.log(parenthesisChecker(`ölak jsd( )KLjadf`))