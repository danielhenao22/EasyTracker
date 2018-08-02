export class Order {
    public id: string;
    public tracking_Number: string;
    public status: string;
    public origin: string;
    public destination: string;
    public address: string;
    public name: string;
    public comment: string;
    public company: string;
    public initiated: Date;
    public dispached: Date;
    public customs: Date;
    public delivered: Date;
    public closed: Date;
    public weight: string;
}
