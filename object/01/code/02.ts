namespace Object01Code02 {
  class Invitation {
    constructor(when: Date) {
      this.when = when;
    }
    private when: Date;
  }

  class Ticket {
    constructor(fee: number) {
      this.fee = fee;
    }

    private fee: number;

    get getFee(): number {
      return this.fee;
    }
  }

  class Bag {
    private amount: number;
    private invitation?: Invitation;
    private ticket: Ticket;

    constructor(amount: number, invitation?: Invitation) {
      this.amount = amount;

      this.invitation = invitation;
    }

    hasInvitation(): boolean {
      return this.invitation !== null;
    }

    hasTicket(): boolean {
      return this.ticket !== null;
    }

    setTicket(ticket: Ticket): void {
      this.ticket = ticket;
    }

    minusAmount(amount: number): void {
      this.amount -= amount;
    }

    plusAmount(amount: number): void {
      this.amount += amount;
    }
  }

  class Audience {
    constructor(bag: Bag) {
      this.bag = bag;
    }

    private bag: Bag;

    get getBag(): Bag {
      return this.bag;
    }

    buy(ticket: Ticket): number {
      if (this.bag.hasInvitation()) {
        this.bag.setTicket(ticket);

        return 0;
      } else {
        // 구매
        const fee = ticket.getFee;
        this.bag.minusAmount(fee);
        this.bag.setTicket(ticket);

        return fee;
      }
    }
  }

  class TicketOffice {
    constructor(amount: number, tickets: Ticket[]) {
      this.amount = amount;
      this.tickets = tickets;
    }

    private amount: number;
    private tickets: Ticket[];

    get getTicket(): Ticket {
      const ticket = this.tickets.pop();
      if (!ticket) {
        throw new Error("매진");
      }

      return ticket;
    }

    minusAmount(amount: number): void {
      this.amount -= amount;
    }

    plusAmount(amount: number): void {
      this.amount += amount;
    }
  }

  class TicketSeller {
    private ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
      this.ticketOffice = ticketOffice;
    }

    sellTo(audience: Audience): void {
      this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket));
    }
  }

  class Theater {
    constructor(ticketSeller: TicketSeller) {
      this.ticketSeller = ticketSeller;
    }

    private ticketSeller: TicketSeller;

    enter(audience: Audience): void {
      this.ticketSeller.sellTo(audience);
    }
  }
}
