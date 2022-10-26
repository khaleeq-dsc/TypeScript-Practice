const data = {
    "brandInfluencersSales": [
        {
            "brandInfluencers": "good light world-***-gg-rhode",
            "total": 108
        },
        {
            "brandInfluencers": "-***-gg-inesvaan3",
            "total": 124
        },
        {
            "brandInfluencers": "Kiramoon-***-gg-rhode",
            "total": 38
        }
    ],
    "influencers": [
        {
            "id": 67,
            "name": "X Vaan",
            "email": "xavier@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-xaviervaan"
        },
        {
            "id": 42,
            "name": "Hailey Bieber",
            "email": "hailey@rhode.com",
            "commissionPercent": 5,
            "promoCode": "cfgi-chord"
        },
        {
            "id": 8,
            "name": "amsoell",
            "email": "andy@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-andysoell"
        },
        {
            "id": 8,
            "name": "amsoell",
            "email": "andy@vaangroup.com",
            "commissionPercent": 10,
            "promoCode": "gg-amsoell2"
        },
        {
            "id": 40,
            "name": "Andy Soell",
            "email": "asoell@gmail.com",
            "commissionPercent": 5,
            "promoCode": "gg-amsoell"
        },
        {
            "id": 11,
            "name": "Borna Se",
            "email": "borna@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-bornavaan"
        },
        {
            "id": 37,
            "name": "Ines M",
            "email": "ines@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-inesvaan"
        },
        {
            "id": 42,
            "name": "Hailey Bieber",
            "email": "hailey@rhode.com",
            "commissionPercent": 5,
            "promoCode": "gg-rhode"
        },
        {
            "id": 44,
            "name": "Ines Barcena",
            "email": "barcena.inesmaria@gmail.com",
            "commissionPercent": 5,
            "promoCode": "gg-inesmariabarcena"
        },
        {
            "id": 47,
            "name": "GALATEST",
            "email": "studio@pencilz.io",
            "commissionPercent": 5,
            "promoCode": "gg-galagala"
        },
        {
            "id": 48,
            "name": null,
            "email": "katie@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-katievaan"
        },
        {
            "id": 60,
            "name": "IMBarcena",
            "email": "ines+2@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-ines2vaan"
        },
        {
            "id": 62,
            "name": "Ines M test",
            "email": "ines+3@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-inesvaan3"
        },
        {
            "id": 66,
            "name": "Melanie",
            "email": "melanie@galagala.team",
            "commissionPercent": 5,
            "promoCode": "gg-jolenethekees"
        }
    ]
};

let response = {
    isValid: false,
    influencersComissions: []
}

function getInfluencerDetail(influencers, affiliateId) {
    if (!Array.isArray(influencers)) return null
    let infl = null
    for (let i = 0; i < influencers.length; i++) {
        if (influencers[i].promoCode) {
            if (influencers[i].promoCode.toString() === affiliateId.toString()) {
                infl = influencers[i]
                break
            }
        }
    }
    return infl
}
function calcInfluencersCom(brandInfluencersSales, influencers) {
    let formattedArray = []
    for (let i = 0; i < brandInfluencersSales.length; i++) {
        const bi = brandInfluencersSales[i]
        const brandInfluencerArray = bi.brandInfluencers.split('-***-')
        if (brandInfluencerArray) {
            bi.brand = brandInfluencerArray[0] ? brandInfluencerArray[0] : ''
            let affiliateId = brandInfluencerArray[1] ? brandInfluencerArray[1] : null
            if (affiliateId) {
                bi.affiliateId = affiliateId
                let influencerDetail = getInfluencerDetail(influencers, affiliateId)
                if (influencerDetail) {
                    if (influencerDetail.commissionPercent && influencerDetail.name && influencerDetail.email && influencerDetail.id) {
                        bi.commissionPercent = influencerDetail.commissionPercent
                        if (bi.total) {
                            bi.totalSales = bi.total
                            delete bi.total

                            bi.commissionValue = bi.totalSales * influencerDetail.commissionPercent * 0.01
                            bi.commissionValue = Math.round(bi.commissionValue * 100) / 100
                            bi.name = influencerDetail.name
                            bi.email = influencerDetail.email
                            bi.influencerId = influencerDetail.id
                            formattedArray.push(bi)
                        }
                    }
                }
            }
        }
    }
    return formattedArray
}


if (data) {
    if (data.influencers && data.brandInfluencersSales) {
        response.influencersComissions = calcInfluencersCom(data.brandInfluencersSales, data.influencers)
    }
}

response.isValid = response.influencersComissions.length > 0 ? true : false

return response