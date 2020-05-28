const config = {
    getHeaders: {},
    postHeaders: {},
    getUrls: {
        buildings: "https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600"
    }
}

export function getCall (target) {
    const url = config.getUrls[target]

    const buildingsPromise = fetch(url);

    return buildingsPromise.then(res => {
        if(!res.ok) return Promise.reject('Incorrect or nonexistent endpoint')
        return res.json()
            .then(res => Promise.resolve(res.data))

    }).catch(e=> {
        console.log(`Error: ${e}`);
    })
}