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
    tone: "D23",
    focus: {
        topic: "D24",
        headline: "D25",
        adverseness: "D26",
        clientGoals: "D27",
        headers: "D28" 
    },
    source: "D29",
    performance: {
        linkText: "D30", 
        linkMatchesHeaders: "D31"
    }, 
    compliance:{
        words: "D32",
        isEthical: "D33",
        noMisleadingImpressions: "D34",
        noFactualInaccuracies: "D35"
    },
    total: "D36",
    totalPossiblePoints: "D37",
    status: ["D38", "B8"],
    score: ["D39", "B9"],
}