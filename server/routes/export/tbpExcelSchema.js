// This defines where each property should go into the excel sheet

module.exports = {
    postInfo: {
        vendorName: "B2",
        postDate: "B3",
        clientName: "B4",
        blogType: "B5",
        postTitle: "B6",
        requestId: "B7",
    },
    plagiarism: {
        copyscape: "D12",
        uniqueness: "D13"
    }, 
    spellcheck: {
        basic: "D14", 
        vendorInfo: "D15",
        wordUsage: "D16",
        grammar: "D17"
    },
    writingProficiency: {
        pov: "D18",
        grammar: "D19",
        readability: "D20"
    },
    topic: {
        appropriateness: "D21",
        date: "D22"
    },
    focus: {
        topic: "D23",
        headline: "D24",
        appropriateness: "D25",
        clientPracGoals: "D26"
    },
    source: "D27",
    performance: {
        linkText: "D28", 
        linkMatchesHeaders: "D29"
    }, 
    compliance:{
        words: "D30",
        isEthical: "D31",
        noMisleadingImpressions: "D32",
        noFactualInaccuracies: "D33"
    },
    total: "D34",
    totalPossiblePoints: "D35",
    status: ["D36", "B8"],
    score: ["D37", "B9"]
}