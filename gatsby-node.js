
const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = ({ boundActionCreators }) => {

    const { createNode } = boundActionCreators

    console.time(`fetch Github data`)
    console.log('Using Github Token')
    console.log(
        `starting to fetch data from the Github API. Warning: This may take a long time.`
    )

    const instance = axios.create({
        baseURL: 'https://api.github.com/',
        timeout: 1000,
        headers: {'Authorization': 'token ' + process.env.GITHUB_TOKEN}
      });

    return instance.get(`orgs/leboncoin/repos`)
    .then(res => {

        res.data.forEach(item => {
            console.log(item)
            if (item.forks == false){
                createNode({
                id: item.url,
                url: item.html_url,
                name: item.name,
                description: item.description,
                stars: item.stargazers_count,
                topics: item.topics,
                parent: null,
                children: [],
                internal: {
                    type: 'GithubRepos',
                    contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(item))
                    .digest(`hex`),
                },
                })
            }
        })

        console.timeEnd(`fetch Github data`)
    })
    .catch(error => {
        console.timeEnd(error)
    })

}