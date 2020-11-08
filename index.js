function instaProfile(username){
    fetch(`https://www.instagram.com/${username}/?__a=1`)
        .then(data=> {
            return data
        })
        .catch(err => console.log(err))
}

module.exports.instaProfile = instaProfile;