interface ApplicationTexts {
    illegalString(value: string): string;
    generalError: string;
    networkError: string;
    permissionDeniedError: string;
}

const norwegian: ApplicationTexts = {
    illegalString: (value) => `Verdien ${value} er ikke tillat`,
    generalError: "Noe gikk galt",
    networkError: "Problemer med å kontakte serveren",
    permissionDeniedError: "Ikke lov"
}
const english: ApplicationTexts = {
    illegalString: (value) => `Verdien ${value} er ikke tillat`,
    generalError: "Something went wrong",
    networkError: "Problemes contacting server",
    permissionDeniedError: "You are not permitted to perform this action"
}

interface SimpleMessage {
    errorCode: "networkError" | "permissionDeniedError"
}
interface IllegalStringMessage {
    errorCode: "illegalString",
    value: string;
}
type ErrorMessage = SimpleMessage|IllegalStringMessage;

function showError(language: ApplicationTexts, message: ErrorMessage): string {
    switch (message.errorCode) {
        case "networkError":
        case "permissionDeniedError":
            return language[message.errorCode];
        case "illegalString":
            return language.illegalString(message.value);
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
        expect(showError(norwegian, { errorCode: "illegalString", value: "example" })).toEqual("Verdien example er ikke tillat")
    })
})