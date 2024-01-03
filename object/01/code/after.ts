namespace Object01After {
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

    private hasInvitation(): boolean {
      return this.invitation !== null;
    }

    hasTicket(): boolean {
      return this.ticket !== null;
    }

    private setTicket(ticket: Ticket): void {
      this.ticket = ticket;
    }

    private minusAmount(amount: number): void {
      this.amount -= amount;
    }

    private plusAmount(amount: number): void {
      this.amount += amount;
    }

    hold(ticket: Ticket): number {
      if (this.hasInvitation()) {
        this.setTicket(ticket);
        return 0;
      } else {
        // 구매
        const fee = ticket.getFee;
        this.minusAmount(fee);
        this.setTicket(ticket);
        return fee;
      }
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
      return this.bag.hold(ticket);
    }
  }

  class TicketOffice {
    constructor(amount: number, tickets: Ticket[]) {
      this.amount = amount;
      this.tickets = tickets;
    }

    private amount: number;
    private tickets: Ticket[];

    private get getTicket(): Ticket {
      const ticket = this.tickets.pop();
      if (!ticket) {
        throw new Error("매진");
      }

      return ticket;
    }

    private minusAmount(amount: number): void {
      this.amount -= amount;
    }

    private plusAmount(amount: number): void {
      this.amount += amount;
    }

    selTicketTo(audience: Audience): void {
      this.plusAmount(audience.buy(this.getTicket));
    }
  }

  class TicketSeller {
    private ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
      this.ticketOffice = ticketOffice;
    }

    sellTo(audience: Audience): void {
      this.ticketOffice.selTicketTo(audience);
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
