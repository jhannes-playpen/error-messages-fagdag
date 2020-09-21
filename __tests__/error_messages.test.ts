interface ApplicationTexts {
    generalError: string;
    networkError: string;
    permissionDeniedError: string;
}

const norwegian: ApplicationTexts = {
    generalError: "Noe gikk galt",
    networkError: "Problemer med å kontakte serveren",
    permissionDeniedError: "Ikke lov"
}
const english: ApplicationTexts = {
    generalError: "Something went wrong",
    networkError: "Problemes contacting server",
    permissionDeniedError: "You are not permitted to perform this action"
}

interface ErrorMessage {
    errorCode: "networkError" | "permissionDeniedError"
}

function showError(language: ApplicationTexts, message: ErrorMessage) {
    switch (message.errorCode) {
        case "networkError":
        case "permissionDeniedError":
            return language[message.errorCode]
    }
}

describe("error messages", () => {
    it("shows error messages in norwegian", () => {
        expect(norwegian.generalError).toEqual("Noe gikk galt")
    })
    it("shows error messages in english", () => {
        expect(english.generalError).toEqual("Something went wrong")
    })
    it("shows error messages with code", () => {
        expect(showError(norwegian, { errorCode: "networkError" })).toEqual("Problemer med å kontakte serveren")
    })
    it("shows different error message", () => {
        expect(showError(english, { errorCode: "permissionDeniedError" })).toEqual("You are not permitted to perform this action")
    })
    it("shows error messages with arguments", () => {
        expect(showError(norwegian, { errorCode: "illegalString", value: "example" })).toEqual("verdien example er ulovlig")
    })
})