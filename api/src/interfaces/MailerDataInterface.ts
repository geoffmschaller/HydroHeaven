interface MailerDataInterface {
    from: FromInterface,
    to: string,
    subject: string,
    replyTo: string,
    template: TemplateInterface
}

interface FromInterface {
    name: string,
    address: string
}

interface TemplateInterface {
    name: string,
    engine: string,
    context: ContactContextInterface
}

interface ContactContextInterface {
    name: string,
    email: string,
    message: string,
    header: string
}

export default MailerDataInterface;