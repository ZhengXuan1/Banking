export class loanDetails {
    constructor(){};
        
    public appId!: number;
    public firstName!: string;
    public midInitial!: string;
    public lastName!: string;
    public birthDate!: string;
    public email!: string;
    public maritalStatus!: string;
    public street!: string;
    public city!: string;
    public state!: string;
    public zip!: string;
    public ssNum!: string;
    public phone!: string;
    public loanAmount!: string;
    public loanPurpose!: string;
    public salary!: string;
    public decisionDetails: string = `Your application is currently under review. It should take no longer then 
                                        2-5 business days for you to get your decision. Thank you for your patience.`;
    public decisionStatus: string = "PENDING";
        
        
}
