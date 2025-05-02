import { useState } from "react";
import Container from "../UI/Container";
import Header from "../UI/Header";
import ContactList from "./ContactList";
import LinksPanel from "../UI/LinksPanel";

const Finances = () => {
  const [contacts] = useState([
    {
      name: "Financial Aid Counselor",
      number: "123-456-7890",
      link: "jdo@stevens.edu",
    },
    {
      name: "Office of Student Accounts",
      number: "123-456-7890",
      link: "studentaccount@stevens.edu",
    },
  ]);

  const [studentAccount] = useState({
    studentId: "12345",
    accountBalance: 0,
    paymentDue: 0,
  });
  return (
    <div>
      <div className="border-b-2 border-[var(--color-primary)]">
        <Header title="Finances" />
      </div>
      <div className="grid grid-cols-2 mt-7 gap-10">
        <section className="flex flex-col gap-8">
          <figure className="py-9 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[var(--color-primary)] text-center rounded-2xl">
            <div className="p-6 border-r-2 border-[var(--color-accent)]">
              <p className="text-5xl font-bold text-[var(--color-accent)]">
                ${studentAccount.accountBalance.toFixed(2)}
              </p>
              <p className="text-3xl">Total Account Balance</p>
            </div>

            <div className="p-6 border-[var(--color-accent)]">
              <p className="text-5xl font-bold text-[var(--color-accent)]">
                ${studentAccount.paymentDue.toFixed(2)}
              </p>
              <p className="text-3xl">Due Now</p>
            </div>
          </figure>
          <Container
            title="Important Contacts"
            isOpen={true}
            body={<ContactList list={contacts} />}
          />
        </section>
        <section className="flex flex-col gap-8">
          <Container
            title="Planning & Registration"
            isOpen={true}
            body={
              <LinksPanel
                links={[
                  { name: "View Statement", link: "" },
                  { name: "Make an Online Payment", link: "" },
                  { name: "Payment Plans / Options", link: "" },
                  { name: "Financial Aid Portal", link: "" },
                ]}
              />
            }
          />
          <Container
            title="Academic Advising"
            isOpen={true}
            body={
              <LinksPanel
                links={[
                  { name: "1098-T Forms", link: "" },
                  { name: "Add an Authorized Party", link: "" },
                  { name: "Health Insurance Information", link: "" },
                  { name: "Contact Student Accounts", link: "" },
                ]}
              />
            }
          />
        </section>
      </div>
    </div>
  );
};

export default Finances;
