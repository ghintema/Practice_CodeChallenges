// the judge (if it exists) is being trusted by everyone and trusts no one.

const findJudge = function(n, trust) {

    const vertices = []; // list of all vertices without duplicates.
    const follows = [];
    const followers = [];

    for (let i = 0; i < trust.length; i++) {
        const current = trust[i];

        // a simple edge === current doesn't work here because two different arrays aren't true just because the content is equal.
        const duplicate = trust.slice(0,i).findIndex(edge => edge[0] === current[0] && edge[1] === current[1]);

        if(duplicate >= 0 || current[0] === current[1]) {
            console.log(`there is a duplicate in trust ${current}`)
            console.log('...continue')
            continue;
        }

        // first of all: updating the collection of vertices
        if(!vertices.includes(current[0])) {
            vertices.push(current[0])
        }
        if(!vertices.includes(current[1])) {
            vertices.push(current[1])
        }

        // updating the followers and follows counter.
        const indxA = vertices.indexOf(current[0]);
        const indxB = vertices.indexOf(current[1]);
        if(follows[indxA]) {
            follows[indxA] ++;
        } else {
            follows[indxA] = 1;
        }

        if(followers[indxB]) {
            followers[indxB] ++;
        } else {
            followers[indxB] = 1;
        }
    }

    // the town judge has n-1 followers while following no one.

    // suspect is, how is beeing followed by
    const suspect = followers.indexOf(vertices.length - 1);


    return suspect >= 0 && follows[suspect] === undefined ? vertices[suspect] : -1;
}




const judge4 = [[1,4],[2,4],[4,4],[3,4],[1,2],[2,3], [3,1]]

console.log(findJudge(4,judge4))