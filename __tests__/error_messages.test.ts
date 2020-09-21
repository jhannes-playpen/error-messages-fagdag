const norwegian = {
    generalError: "Noe gikk galt"
}

describe("error messages", () => {
    it("showes error messages in norwegian", () => {
        expect(norwegian.generalError).toEqual("Noe gikk galt")
    })
    it("showes error messages in english", () => {
        expect(english.generalError).toEqual("Something went wrong")
    })
})