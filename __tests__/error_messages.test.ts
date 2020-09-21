interface ApplicationTexts{
    generalError: string
}

const norwegian:ApplicationTexts = {
    generalError: "Noe gikk galt"
}
const english:ApplicationTexts = {
    generalError: "Something went wrong"
}

describe("error messages", () => {
    it("shows error messages in norwegian", () => {
        expect(norwegian.generalError).toEqual("Noe gikk galt")
    })
    it("shows error messages in english", () => {
        expect(english.generalError).toEqual("Something went wrong")
    })
    it("shows error messages with code", () => {
        expect(showError(norwegian,{errorCode:"NetworkError"})).toEqual("Problemer med å kontakte serveren")
    })
})