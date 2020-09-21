interface ApplicationTexts{
    generalError: string
}

const norwegian:ApplicationTexts = {
    generalError: "Noe gikk galt"
}
const english:ApplicationTexts = {
    generalError: "Something went wrong"
}
function showError(language:ApplicationTexts, message:object) {
    return "Problemer med å kontakte serveren";
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
    it("shows different error message", () => {
        expect(showError(english,{errorCode:"PermissionDeniedError"})).toEqual("You are not permitted to perform this action")
    })
})