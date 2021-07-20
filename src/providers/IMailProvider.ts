export interface IMessage{
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface IAddress{
    email: string;
    name: string;
}

export interface EMailProvider{
    sendMail(message: IMessage): Promise<void>
}